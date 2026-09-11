"use strict";

function createTraceabilityModel(data) {
  function requireValid(condition, message) {
    if (!condition) throw new Error(message);
  }
  requireValid(data && Array.isArray(data.categories)
    && Array.isArray(data.outputs) && Array.isArray(data.relations),
  "Dados inválidos: categorias, outputs e relações devem ser listas.");

  const categories = new Map();
  const inputs = new Map();
  const outputs = new Map();
  const rows = [];
  const relations = [];
  const relationKeys = new Set();

  function register(map, item, kind) {
    requireValid(item && typeof item.id === "string" && item.id.trim(),
      `${kind} sem identificador válido.`);
    requireValid(!map.has(item.id), `${kind} duplicado: ${item.id}.`);
    map.set(item.id, item);
  }

  for (const category of data.categories) {
    register(categories, category, "Categoria");
    requireValid(Array.isArray(category.inputRows),
      `Linhas inválidas na categoria ${category.id}.`);
    category.inputRows.forEach((rowInputs, rowIndex) => {
      requireValid(Array.isArray(rowInputs) && rowInputs.length > 0,
        `Linha vazia ou inválida na categoria ${category.id}.`);
      const row = { categoryId: category.id, rowIndex, inputIds: [] };
      rows.push(row);
      for (const input of rowInputs) {
        register(inputs, { ...input, categoryId: category.id, row }, "Input");
        row.inputIds.push(input.id);
      }
    });
  }
  for (const output of data.outputs) register(outputs, output, "Output");

  for (const relation of data.relations) {
    requireValid(relation && Array.isArray(relation.inputIds)
      && relation.inputIds.length > 0, "Relação sem origem válida.");
    requireValid(new Set(relation.inputIds).size === relation.inputIds.length,
      "Input repetido na mesma origem conjunta.");
    for (const id of relation.inputIds) {
      requireValid(inputs.has(id), `Relação referencia input inexistente: ${id}.`);
    }
    requireValid(outputs.has(relation.outputId),
      `Relação referencia output inexistente: ${relation.outputId}.`);
    const firstInput = inputs.get(relation.inputIds[0]);
    requireValid(relation.inputIds.every(id => inputs.get(id).row === firstInput.row),
      "Uma origem conjunta deve pertencer à mesma linha visual.");
    const key = JSON.stringify([[...relation.inputIds].sort(), relation.outputId]);
    requireValid(!relationKeys.has(key), `Relação duplicada: ${key}.`);
    relationKeys.add(key);
    relations.push({
      inputIds: [...relation.inputIds],
      outputId: relation.outputId
    });
  }

  return {
    categories,
    outputs,
    rows,
    relations
  };
}


function renderTraceabilityLayout(data, root) {
  function element(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }
  function label(item) {
    return item.label + (item.detail ? ` (${item.detail})` : "");
  }
  const header = element("header", "diagram-header");
  header.append(element("h1", "", data.title), element("p", "diagram-subtitle", data.subtitle));
  const scroll = element("div", "diagram-scroll");
  const grid = element("div", "diagram-grid");
  const inputsColumn = element("section", "inputs-column");
  inputsColumn.append(element("h2", "column-title", data.inputsTitle));
  const categories = element("div", "categories");
  for (const category of data.categories) {
    const block = element("section", "category");
    block.dataset.categoryId = category.id;
    block.style.setProperty("--category-color", category.color);
    const conops = element("aside", "conops");
    conops.append(element("h3", "", data.conopsTitle));
    const conopsList = element("ul");
    for (const text of category.conops) conopsList.append(element("li", "", text));
    conops.append(conopsList);
    const inputBlock = element("div", "input-block");
    inputBlock.append(element("h2", "", category.title));
    const inputList = element("ul", "input-list");
    for (const row of category.inputRows) {
      const line = element("li", "input-row");
      row.forEach((input, index) => {
        if (index) line.append(document.createTextNode(", "));
        const span = element("span", "input-label", label(input));
        span.dataset.inputId = input.id;
        line.append(span);
      });
      inputList.append(line);
    }
    inputBlock.append(inputList);
    block.append(conops, inputBlock);
    categories.append(block);
  }
  inputsColumn.append(categories);
  const routingSpace = element("div", "routing-space");
  routingSpace.setAttribute("aria-hidden", "true");
  const outputsColumn = element("section", "outputs-column");
  outputsColumn.append(element("h2", "column-title", data.outputsTitle));
  const outputsList = element("ol", "outputs-list");
  data.outputs.forEach((output, index) => {
    const block = element("li", "output");
    block.dataset.outputId = output.id;
    block.append(element("h3", "", `${index + 1}. ${label(output)}`));
    if (output.description) block.append(element("p", "", output.description));
    outputsList.append(block);
  });
  outputsColumn.append(outputsList);
  grid.append(inputsColumn, routingSpace, outputsColumn);
  if (data.referenceNotes) {
    const notes = element("footer", "reference-notes");
    notes.append(element("p", "", data.referenceNotes.conopsReading));
    notes.append(element("p", "", data.referenceNotes.observations.join(" ")));
    grid.append(notes);
  }
  scroll.append(grid);
  root.replaceChildren(header, scroll);
  document.title = data.title;
}


function createVisualUnits(model) {
  return model.rows.map(row => {
    const relations = model.relations.filter(relation =>
      relation.inputIds.some(id => row.inputIds.includes(id)));
    return {
      categoryId: row.categoryId,
      rowIndex: row.rowIndex,
      inputIds: [...row.inputIds],
      outputIds: [...new Set(relations.map(relation => relation.outputId))]
    };
  });
}

function mountConnections(root, model, refreshSelection) {
  const ns = "http://www.w3.org/2000/svg";
  const grid = root.querySelector(".diagram-grid");
  const routing = grid.querySelector(".routing-space");
  const inputs = new Map([...grid.querySelectorAll("[data-input-id]")].map(n => [n.dataset.inputId, n]));
  const outputs = new Map([...grid.querySelectorAll(".output")].map(n => [n.dataset.outputId, n]));
  const units = createVisualUnits(model);
  function element(tag, attrs) {
    const node = document.createElementNS(ns, tag);
    for (const [key, value] of Object.entries(attrs)) node.setAttribute(key, value);
    return node;
  }
  const svg = element("svg", { class: "connections", "aria-hidden": "true" });
  grid.append(svg);
  function draw() {
  
    const viewport = root.querySelector(".diagram-scroll");
    const padding = getComputedStyle(viewport);
    const available = viewport.clientWidth - parseFloat(padding.paddingLeft)
      - parseFloat(padding.paddingRight);
    const scale = Math.min(1, Math.max(1, available) / grid.offsetWidth) * 0.88;
    grid.style.marginLeft = "0";
    const offset = Math.max(0, (available - grid.offsetWidth * scale) / 2);
    grid.style.transform = `translateX(${offset}px) scale(${scale})`;
    viewport.style.height = `${grid.offsetHeight * scale
      + parseFloat(padding.paddingTop) + parseFloat(padding.paddingBottom)}px`;
    const bounds = grid.getBoundingClientRect();
    const central = routing.getBoundingClientRect();
    svg.setAttribute("viewBox", `0 0 ${bounds.width} ${bounds.height}`);
    const content = document.createDocumentFragment();
    const defs = element("defs", {});
    content.append(defs);
    [...model.categories.values()].forEach((category, categoryIndex) => {
      const markerId = `connection-arrow-${categoryIndex}`;
      const marker = element("marker", { id: markerId, viewBox: "0 0 10 10",
        refX: 10, refY: 5, markerWidth: 10, markerHeight: 10,
        orient: "auto", markerUnits: "userSpaceOnUse" });
      marker.append(element("path", { d: "M 0 0 L 10 5 L 0 10 Z", fill: category.color }));
      defs.append(marker);
      const active = units.filter(u => u.categoryId === category.id && u.outputIds.length);
      active.forEach(unit => {
        const range = document.createRange();
        range.selectNodeContents(inputs.get(unit.inputIds[0]).closest(".input-row"));
        const rect = range.getBoundingClientRect();
        const x = rect.right - bounds.left + 8;
        const y = rect.top + rect.height / 2 - bounds.top;
      
        const lane = central.left - bounds.left + central.width * 0.55;
        const targets = unit.outputIds.map(outputId => {
          const r = outputs.get(outputId).getBoundingClientRect();
          return { outputId, x: r.left - bounds.left,
            y: r.top - bounds.top + r.height / 2 };
        });
        const group = element("g", { class: "connection-unit", "data-category-id": category.id,
          "data-row-index": unit.rowIndex });
        group.style.setProperty("--route-color", category.color);
        const stem = `M ${x} ${y} H ${lane} M ${lane} ${Math.min(y, ...targets.map(t => t.y))} V ${Math.max(y, ...targets.map(t => t.y))}`;
        const branches = targets.map(t => ({d: `M ${lane} ${t.y} H ${t.x}`, outputId: t.outputId}));
      
        for (const d of [stem, ...branches.map(b => b.d)]) {
          group.append(element("path", { d, class: "route-halo" }));
        }
        group.append(element("path", { d: stem, class: "route-stem" }));
        for (const branch of branches) {
          group.append(element("path", { d: branch.d, class: "connection route-branch",
            "data-output-id": branch.outputId, "marker-end": `url(#${markerId})` }));
        }
        group.append(element("circle", { cx: x, cy: y, r: 3.5, class: "route-origin" }));
        content.append(group);
      });
    });
    svg.replaceChildren(content);
    refreshSelection();
  }
  let frame = null;
  const schedule = () => {
    if (frame !== null) return;
    frame = requestAnimationFrame(() => { frame = null; draw(); });
  };
  draw();
  const observer = new ResizeObserver(schedule);
  observer.observe(root.querySelector(".diagram-scroll"));
  observer.observe(grid);
  observer.observe(routing);
  for (const node of inputs.values()) observer.observe(node.closest(".input-row"));
  for (const node of outputs.values()) observer.observe(node);
  document.fonts.ready.then(schedule);
}

function createExplorationState(model) {
  const units = createVisualUnits(model);
  let categoryId = null;
  let current = null;
  return {
    toggleCategory(id) {
      if (!model.categories.has(id)) throw new Error("Categoria inexistente");
      categoryId = categoryId === id ? null : id;
      const own = units.filter(u => u.categoryId === categoryId);
      current = (own.find(u => u.outputIds.length) || own[0])?.rowIndex ?? null;
    },
    toggleRow(id, rowIndex) {
      if (!units.some(u => u.categoryId === id && u.rowIndex === rowIndex)) throw new Error("Linha inexistente");
      categoryId = id; current = rowIndex;
    },
    stepCategory(direction) {
      const ids = [...model.categories.keys()];
      if (categoryId === null) return;
      const next = ids[ids.indexOf(categoryId) + direction];
      if (!next) return;
      categoryId = next;
      const own = units.filter(u => u.categoryId === categoryId);
      current = (own.find(u => u.outputIds.length) || own[0])?.rowIndex ?? null;
    },
    step(direction) {
      const own = units.filter(u => u.categoryId === categoryId);
      if (!own.length) return;
      const index = own.findIndex(u => u.rowIndex === current);
      current = own[Math.max(0, Math.min(own.length - 1, index + direction))].rowIndex;
    },
    get categoryId() { return categoryId; },
    get focusedRow() { return current; },
    get outputIds() {
      return new Set(units.find(u => u.categoryId === categoryId
        && u.rowIndex === current)?.outputIds || []);
    }
  };
}

function mountCategorySelection(root, model) {
  const state = createExplorationState(model);
  const categories = [...root.querySelectorAll(".category")];
  const outputs = [...root.querySelectorAll(".output")];
  const units = createVisualUnits(model);
  const reader = document.createElement("div");
  reader.className = "relation-reader";
  const text = document.createElement("div");
  const title = document.createElement("strong");
  const detail = document.createElement("span");
  const destinations = document.createElement("ul");
  destinations.className = "related-output-names";
  destinations.setAttribute("aria-label", "Outputs relacionados");
  text.append(title, detail, destinations);
  const controls = document.createElement("div");
  const previous = document.createElement("button");
  previous.textContent = "Linha anterior"; previous.type = "button";
  const next = document.createElement("button");
  next.textContent = "Próxima linha"; next.type = "button";
  const clear = document.createElement("button");
  clear.textContent = "Limpar"; clear.type = "button";
  const nextBlock = document.createElement("button");
  nextBlock.textContent = "Próximo grupo"; nextBlock.type = "button";
  const previousCategory = document.createElement("button");
  previousCategory.textContent = "Grupo anterior"; previousCategory.type = "button";
  const categoryControls = document.createElement("div");
  const lineControls = document.createElement("div");
  categoryControls.className = "navigation-group";
  lineControls.className = "navigation-group";
  categoryControls.append(previousCategory, nextBlock);
  lineControls.append(previous, next, clear);
  controls.className = "reader-controls";
  controls.append(categoryControls, lineControls);
  reader.append(text, controls);
  root.querySelector(".diagram-header").after(reader);
  previous.addEventListener("click", () => { state.step(-1); refresh(); });
  next.addEventListener("click", () => { state.step(1); refresh(); });
  previousCategory.addEventListener("click", () => { state.stepCategory(-1); refresh(); });
  nextBlock.addEventListener("click", () => { state.stepCategory(1); refresh(); });
  clear.addEventListener("click", () => { if (state.categoryId !== null) state.toggleCategory(state.categoryId); refresh(); });
  function refresh() {
    const color = state.categoryId === null ? "" : model.categories.get(state.categoryId).color;
    const related = state.outputIds;
    const own = units.filter(u => u.categoryId === state.categoryId);
    const focusedUnit = own.find(u => u.rowIndex === state.focusedRow);
    title.textContent = focusedUnit ? focusedUnit.inputIds.join(", ") : "Escolha um grupo para explorar";
    detail.textContent = focusedUnit
      ? `Linha ${own.indexOf(focusedUnit) + 1} de ${own.length} · ${related.size ? related.size + " outputs relacionados" : "sem relações cadastradas"}`
      : "Clique numa linha de inputs para consultar seus outputs relacionados.";
    const note = model.categories.get(state.categoryId)?.traceabilityNote;
    if (focusedUnit && related.size === 0 && note) detail.textContent += ` · ${note}`;
    destinations.replaceChildren();
    for (const output of model.outputs.values()) {
      if (!related.has(output.id)) continue;
      const item = document.createElement("li");
      item.textContent = output.label;
      destinations.append(item);
    }
    destinations.hidden = related.size === 0;
    previous.disabled = !focusedUnit || own.indexOf(focusedUnit) === 0;
    next.disabled = !focusedUnit || own.indexOf(focusedUnit) === own.length - 1;
    const categoryIds = [...model.categories.keys()];
    previousCategory.disabled = state.categoryId === null || state.categoryId === categoryIds[0];
    nextBlock.disabled = state.categoryId === null || categoryIds.length === 0 || state.categoryId === categoryIds[categoryIds.length - 1];
    clear.disabled = state.categoryId === null;
    root.classList.toggle("has-selection", state.categoryId !== null);
    for (const category of categories) {
      const selected = category.dataset.categoryId === state.categoryId;
      category.classList.toggle("is-selected", selected);
      category.querySelector(".input-block > h2").setAttribute("aria-pressed", String(selected));
      [...category.querySelectorAll(".input-row")].forEach((row, index) => {
        row.classList.toggle("is-focused", selected && index === state.focusedRow);
        row.setAttribute("aria-pressed", String(selected && index === state.focusedRow));
      });
    }
    for (const output of outputs) {
      output.classList.toggle("is-related", related.has(output.dataset.outputId));
      output.style.setProperty("--selection-color", color || "transparent");
    }
    let focusedGroup = null;
    for (const group of root.querySelectorAll(".connection-unit")) {
      const selected = group.dataset.categoryId === state.categoryId;
      const focused = selected && Number(group.dataset.rowIndex) === state.focusedRow;
      group.classList.toggle("is-selected", selected);
      group.classList.toggle("is-focused", focused);
      if (focused) focusedGroup = group;
    }
  
    if (focusedGroup) focusedGroup.parentNode.append(focusedGroup);
  }
  function keyboard(node, action) {
    node.setAttribute("role", "button");
    node.setAttribute("tabindex", "0");
    node.addEventListener("keydown", event => {
      if ((event.key === "Enter" || event.key === " ") && !event.repeat) {
        event.preventDefault(); event.stopPropagation(); action();
      }
    });
  }
  for (const category of categories) {
    const id = category.dataset.categoryId;
    const heading = category.querySelector(".input-block > h2");
    const select = () => { state.toggleCategory(id); refresh(); };
    keyboard(heading, select);
    category.addEventListener("click", select);
    [...category.querySelectorAll(".input-row")].forEach((row, index) => {
      const pin = () => { state.toggleRow(id, index); refresh(); };
      keyboard(row, pin);

      row.addEventListener("click", event => { event.stopPropagation(); pin(); });
    });
  }
  refresh();
  return refresh;
}

if (typeof document !== "undefined") {
  const status = document.getElementById("model-status");
  try {
    const traceabilityModel = createTraceabilityModel(TRACEABILITY_DATA);
    renderTraceabilityLayout(TRACEABILITY_DATA, document.getElementById("diagram"));
    const root = document.getElementById("diagram");
    const refreshSelection = mountCategorySelection(root, traceabilityModel);
    mountConnections(root, traceabilityModel, refreshSelection);
    if (status) status.textContent = "";
  } catch (error) {
    if (status) status.textContent = `Não foi possível apresentar os dados: ${error.message}`;
    console.error(error);
  }
}

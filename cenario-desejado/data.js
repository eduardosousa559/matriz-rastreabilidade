
const TRACEABILITY_DATA = {
  "title": "CENÁRIO DESEJADO",
  "subtitle": "Novos parâmetros (derivados do CONOPS) → Outputs / métricas",
  "inputsTitle": "INPUTS",
  "outputsTitle": "OUTPUTS / MÉTRICAS",
  "conopsTitle": "CORRESPONDÊNCIA COM O CONOPS",
  "categories": [
    {
      "id": "vitimas",
      "title": "1. MODELO DE VÍTIMAS",
      "color": "#000080",
      "conops": [
        "Representação das vítimas, prioridades e necessidades de atendimento previstas na operação de busca e salvamento."
      ],
      "inputRows": [
        [
          {
            "id": "Quantidade de vítimas",
            "label": "Quantidade de vítimas"
          }
        ],
        [
          {
            "id": "Distribuição das vítimas",
            "label": "Distribuição das vítimas"
          }
        ],
        [
          {
            "id": "Prioridade",
            "label": "Prioridade"
          }
        ],
        [
          {
            "id": "Tipo de ajuda",
            "label": "Tipo de ajuda"
          }
        ],
        [
          {
            "id": "Mobilidade",
            "label": "Mobilidade"
          }
        ],
        [
          {
            "id": "Surgimento das vítimas",
            "label": "Surgimento das vítimas"
          }
        ]
      ]
    },
    {
      "id": "deteccao",
      "title": "2. MODELO DE DETECÇÃO",
      "color": "#006400",
      "conops": [
        "Características de percepção necessárias para representar a identificação de vítimas e situações de interesse."
      ],
      "inputRows": [
        [
          {
            "id": "Probabilidade de detecção",
            "label": "Probabilidade de detecção"
          }
        ],
        [
          {
            "id": "Taxa de falso positivo",
            "label": "Taxa de falso positivo"
          }
        ],
        [
          {
            "id": "FOV do sensor",
            "label": "FOV do sensor"
          }
        ],
        [
          {
            "id": "Largura de varredura",
            "label": "Largura de varredura"
          }
        ]
      ]
    },
    {
      "id": "eventos",
      "title": "3. EVENTOS E FALHAS",
      "color": "#D26900",
      "conops": [
        "Representação de contingências e mudanças durante a operação, incluindo falhas e alteração de prioridades."
      ],
      "inputRows": [
        [
          {
            "id": "Perda de comunicação",
            "label": "Perda de comunicação"
          }
        ],
        [
          {
            "id": "Probabilidade de falha de agente",
            "label": "Probabilidade de falha de agente"
          }
        ],
        [
          {
            "id": "Mudança de prioridade",
            "label": "Mudança de prioridade"
          }
        ],
        [
          {
            "id": "Chegada de novo incidente",
            "label": "Chegada de novo incidente"
          }
        ]
      ]
    },
    {
      "id": "comunicacao",
      "title": "4. MODELO DE COMUNICAÇÃO",
      "color": "#663399",
      "conops": [
        "Representação das condições de comunicação e de sua possível degradação durante a missão."
      ],
      "inputRows": [
        [
          {
            "id": "Alcance da comunicação",
            "label": "Alcance da comunicação"
          }
        ],
        [
          {
            "id": "Latência",
            "label": "Latência"
          }
        ],
        [
          {
            "id": "Perda de pacotes",
            "label": "Perda de pacotes"
          }
        ],
        [
          {
            "id": "Alcance de retransmissão da UMC",
            "label": "Alcance de retransmissão da UMC"
          }
        ]
      ]
    },
    {
      "id": "operador",
      "title": "5. OPERADOR HUMANO",
      "color": "#C00000",
      "conops": [
        "Representação da participação humana na supervisão, decisão e interação com o sistema."
      ],
      "inputRows": [
        [
          {
            "id": "Tempo de resposta",
            "label": "Tempo de resposta"
          }
        ],
        [
          {
            "id": "Política de aceitação/rejeição",
            "label": "Política de aceitação/rejeição"
          }
        ],
        [
          {
            "id": "Nível de autonomia",
            "label": "Nível de autonomia"
          }
        ]
      ],
      "traceabilityNote": "O CONOPS demanda essa dimensão, mas os outputs atuais não conseguem medi-la."
    },
    {
      "id": "riscos",
      "title": "6. RISCOS E REGULAMENTAÇÃO",
      "color": "#007A8A",
      "conops": [
        "Representação de restrições de segurança, zonas de risco e condições operacionais."
      ],
      "inputRows": [
        [
          {
            "id": "Zonas proibidas",
            "label": "Zonas proibidas"
          }
        ],
        [
          {
            "id": "Altitude máxima",
            "label": "Altitude máxima"
          }
        ],
        [
          {
            "id": "Zonas de risco",
            "label": "Zonas de risco"
          }
        ],
        [
          {
            "id": "Janela crítica",
            "label": "Janela crítica"
          }
        ]
      ]
    },
    {
      "id": "controle",
      "title": "7. CONTROLE EXPERIMENTAL",
      "color": "#8B5A2B",
      "conops": [
        "Suporte à repetição e comparação de experimentos para avaliação do comportamento da solução."
      ],
      "inputRows": [
        [
          {
            "id": "Número de execuções",
            "label": "Número de execuções"
          }
        ],
        [
          {
            "id": "Lista de seeds",
            "label": "Lista de seeds"
          }
        ],
        [
          {
            "id": "Métricas a registrar",
            "label": "Métricas a registrar"
          }
        ],
        [
          {
            "id": "Tempo máximo de missão",
            "label": "Tempo máximo de missão"
          }
        ]
      ]
    }
  ],
  "outputs": [
    {
      "id": "area_coverage_percent",
      "label": "area_coverage_percent",
      "description": "Percentual da área explorável coberta simultaneamente por UAVs RGB e térmicos."
    },
    {
      "id": "area_coverage_rgb",
      "label": "area_coverage_rgb",
      "description": "Percentual da área explorável coberta por UAVs RGB."
    },
    {
      "id": "area_coverage_thermal",
      "label": "area_coverage_thermal",
      "description": "Percentual da área explorável coberta por UAVs térmicos."
    },
    {
      "id": "MTTD_min",
      "label": "MTTD_min",
      "detail": "tempo médio de detecção",
      "description": "Tempo médio entre o início da missão e a descoberta dos POIs."
    },
    {
      "id": "MIL_min",
      "label": "MIL_min",
      "detail": "latência média de intervenção",
      "description": "Tempo médio entre a descoberta e a resolução dos POIs."
    },
    {
      "id": "WMIL_min",
      "label": "WMIL_min",
      "detail": "latência ponderada",
      "description": "Latência média de intervenção ponderada pela urgência P1/P2/P3."
    },
    {
      "id": "MIL_P1_min",
      "label": "MIL_P1_min",
      "detail": "latência crítica",
      "description": "Latência média de intervenção dos POIs críticos P1."
    },
    {
      "id": "P1_survival_rate_percent",
      "label": "P1_survival_rate_percent",
      "description": "Percentual de vítimas P1 resolvidas dentro da janela crítica."
    },
    {
      "id": "success_rate_percent",
      "label": "success_rate_percent",
      "detail": "pois_resolved / total_pois",
      "description": "Percentual de POIs resolvidos em relação ao total gerado."
    },
    {
      "id": "payload_delivery_rate",
      "label": "payload_delivery_rate",
      "description": "Percentual de POIs que receberam o kit requerido."
    },
    {
      "id": "payload_delivered_kg",
      "label": "payload_delivered_kg",
      "description": "Massa total de suprimentos entregues aos POIs."
    },
    {
      "id": "total_energy_consumed_pct",
      "label": "total_energy_consumed_pct",
      "description": "Energia total consumida pela frota, incluindo ciclos de troca."
    },
    {
      "id": "energy_per_poi_pct",
      "label": "energy_per_poi_pct",
      "description": "Energia consumida por POI resolvido."
    },
    {
      "id": "survival_rate_percent",
      "label": "survival_rate_percent",
      "description": "Percentual de veículos que permaneceram operacionais até o fim."
    },
    {
      "id": "total_distance_km",
      "label": "total_distance_km",
      "description": "Distância horizontal total percorrida pela frota."
    },
    {
      "id": "delta_L_percent",
      "label": "delta_L_percent",
      "detail": "suavização de trajeto",
      "description": "Redução percentual do comprimento do trajeto após suavização."
    },
    {
      "id": "ca_interventions",
      "label": "ca_interventions",
      "detail": "intervenções de colisão",
      "description": "Número total de intervenções do sistema de evitação de colisão."
    },
    {
      "id": "TMM_min",
      "label": "TMM_min",
      "detail": "duração da missão",
      "description": "Tempo total simulado da missão."
    },
    {
      "id": "elapsed_min",
      "label": "elapsed_min",
      "detail": "tempo decorrido",
      "description": "Tempo total decorrido da simulação."
    },
    {
      "id": "mission_completed",
      "label": "mission_completed",
      "detail": "True / False",
      "description": "Indica se a missão foi concluída com sucesso."
    },
    {
      "id": "termination_reason",
      "label": "termination_reason",
      "description": "Motivo da finalização: success / timeout / all_dead."
    },
    {
      "id": "last_events",
      "label": "last_events",
      "detail": "log de eventos",
      "description": "Últimos eventos da operação: detecções, replanos, cargas e intervenções."
    }
  ],
  "relations": [
    {
      "inputIds": [
        "Quantidade de vítimas"
      ],
      "outputId": "success_rate_percent"
    },
    {
      "inputIds": [
        "Quantidade de vítimas"
      ],
      "outputId": "MTTD_min"
    },
    {
      "inputIds": [
        "Distribuição das vítimas"
      ],
      "outputId": "MTTD_min"
    },
    {
      "inputIds": [
        "Distribuição das vítimas"
      ],
      "outputId": "success_rate_percent"
    },
    {
      "inputIds": [
        "Tipo de ajuda"
      ],
      "outputId": "MIL_min"
    },
    {
      "inputIds": [
        "Mobilidade"
      ],
      "outputId": "MIL_min"
    },
    {
      "inputIds": [
        "Surgimento das vítimas"
      ],
      "outputId": "MTTD_min"
    },
    {
      "inputIds": [
        "Surgimento das vítimas"
      ],
      "outputId": "MIL_min"
    },
    {
      "inputIds": [
        "Probabilidade de detecção"
      ],
      "outputId": "MTTD_min"
    },
    {
      "inputIds": [
        "Probabilidade de detecção"
      ],
      "outputId": "success_rate_percent"
    },
    {
      "inputIds": [
        "Taxa de falso positivo"
      ],
      "outputId": "success_rate_percent"
    },
    {
      "inputIds": [
        "FOV do sensor"
      ],
      "outputId": "area_coverage_percent"
    },
    {
      "inputIds": [
        "FOV do sensor"
      ],
      "outputId": "area_coverage_rgb"
    },
    {
      "inputIds": [
        "FOV do sensor"
      ],
      "outputId": "area_coverage_thermal"
    },
    {
      "inputIds": [
        "Largura de varredura"
      ],
      "outputId": "area_coverage_percent"
    },
    {
      "inputIds": [
        "Largura de varredura"
      ],
      "outputId": "area_coverage_rgb"
    },
    {
      "inputIds": [
        "Largura de varredura"
      ],
      "outputId": "area_coverage_thermal"
    },
    {
      "inputIds": [
        "Largura de varredura"
      ],
      "outputId": "MTTD_min"
    },
    {
      "inputIds": [
        "Perda de comunicação"
      ],
      "outputId": "elapsed_min"
    },
    {
      "inputIds": [
        "Perda de comunicação"
      ],
      "outputId": "mission_completed"
    },
    {
      "inputIds": [
        "Perda de comunicação"
      ],
      "outputId": "termination_reason"
    },
    {
      "inputIds": [
        "Perda de comunicação"
      ],
      "outputId": "last_events"
    },
    {
      "inputIds": [
        "Probabilidade de falha de agente"
      ],
      "outputId": "survival_rate_percent"
    },
    {
      "inputIds": [
        "Probabilidade de falha de agente"
      ],
      "outputId": "mission_completed"
    },
    {
      "inputIds": [
        "Probabilidade de falha de agente"
      ],
      "outputId": "termination_reason"
    },
    {
      "inputIds": [
        "Probabilidade de falha de agente"
      ],
      "outputId": "last_events"
    },
    {
      "inputIds": [
        "Mudança de prioridade"
      ],
      "outputId": "MIL_min"
    },
    {
      "inputIds": [
        "Mudança de prioridade"
      ],
      "outputId": "success_rate_percent"
    },
    {
      "inputIds": [
        "Mudança de prioridade"
      ],
      "outputId": "last_events"
    },
    {
      "inputIds": [
        "Chegada de novo incidente"
      ],
      "outputId": "elapsed_min"
    },
    {
      "inputIds": [
        "Chegada de novo incidente"
      ],
      "outputId": "mission_completed"
    },
    {
      "inputIds": [
        "Chegada de novo incidente"
      ],
      "outputId": "last_events"
    },
    {
      "inputIds": [
        "Alcance da comunicação"
      ],
      "outputId": "last_events"
    },
    {
      "inputIds": [
        "Latência"
      ],
      "outputId": "elapsed_min"
    },
    {
      "inputIds": [
        "Perda de pacotes"
      ],
      "outputId": "last_events"
    },
    {
      "inputIds": [
        "Alcance de retransmissão da UMC"
      ],
      "outputId": "last_events"
    },
    {
      "inputIds": [
        "Zonas proibidas"
      ],
      "outputId": "mission_completed"
    },
    {
      "inputIds": [
        "Zonas proibidas"
      ],
      "outputId": "termination_reason"
    },
    {
      "inputIds": [
        "Altitude máxima"
      ],
      "outputId": "mission_completed"
    },
    {
      "inputIds": [
        "Altitude máxima"
      ],
      "outputId": "termination_reason"
    },
    {
      "inputIds": [
        "Zonas de risco"
      ],
      "outputId": "survival_rate_percent"
    },
    {
      "inputIds": [
        "Zonas de risco"
      ],
      "outputId": "ca_interventions"
    },
    {
      "inputIds": [
        "Janela crítica"
      ],
      "outputId": "success_rate_percent"
    },
    {
      "inputIds": [
        "Número de execuções"
      ],
      "outputId": "area_coverage_percent"
    },
    {
      "inputIds": [
        "Número de execuções"
      ],
      "outputId": "MTTD_min"
    },
    {
      "inputIds": [
        "Número de execuções"
      ],
      "outputId": "success_rate_percent"
    },
    {
      "inputIds": [
        "Número de execuções"
      ],
      "outputId": "total_energy_consumed_pct"
    },
    {
      "inputIds": [
        "Número de execuções"
      ],
      "outputId": "survival_rate_percent"
    },
    {
      "inputIds": [
        "Número de execuções"
      ],
      "outputId": "TMM_min"
    },
    {
      "inputIds": [
        "Lista de seeds"
      ],
      "outputId": "area_coverage_percent"
    },
    {
      "inputIds": [
        "Lista de seeds"
      ],
      "outputId": "MTTD_min"
    },
    {
      "inputIds": [
        "Lista de seeds"
      ],
      "outputId": "success_rate_percent"
    },
    {
      "inputIds": [
        "Lista de seeds"
      ],
      "outputId": "total_energy_consumed_pct"
    },
    {
      "inputIds": [
        "Lista de seeds"
      ],
      "outputId": "survival_rate_percent"
    },
    {
      "inputIds": [
        "Lista de seeds"
      ],
      "outputId": "TMM_min"
    },
    {
      "inputIds": [
        "Tempo máximo de missão"
      ],
      "outputId": "mission_completed"
    },
    {
      "inputIds": [
        "Tempo máximo de missão"
      ],
      "outputId": "termination_reason"
    },

    {"inputIds": ["Quantidade de vítimas"], "outputId": "WMIL_min"},
    {"inputIds": ["Quantidade de vítimas"], "outputId": "payload_delivered_kg"},
    {"inputIds": ["Quantidade de vítimas"], "outputId": "total_distance_km"},
    {"inputIds": ["Distribuição das vítimas"], "outputId": "WMIL_min"},
    {"inputIds": ["Distribuição das vítimas"], "outputId": "MIL_P1_min"},
    {"inputIds": ["Distribuição das vítimas"], "outputId": "total_distance_km"},
    {"inputIds": ["Prioridade"], "outputId": "WMIL_min"},
    {"inputIds": ["Prioridade"], "outputId": "MIL_P1_min"},
    {"inputIds": ["Prioridade"], "outputId": "P1_survival_rate_percent"},
    {"inputIds": ["Tipo de ajuda"], "outputId": "payload_delivery_rate"},
    {"inputIds": ["Tipo de ajuda"], "outputId": "payload_delivered_kg"},
    {"inputIds": ["Mobilidade"], "outputId": "MIL_P1_min"},
    {"inputIds": ["Mobilidade"], "outputId": "payload_delivery_rate"},
    {"inputIds": ["Mobilidade"], "outputId": "total_distance_km"},
    {"inputIds": ["Surgimento das vítimas"], "outputId": "WMIL_min"},
    {"inputIds": ["Surgimento das vítimas"], "outputId": "payload_delivery_rate"},
    {"inputIds": ["Surgimento das vítimas"], "outputId": "payload_delivered_kg"},
    {"inputIds": ["Surgimento das vítimas"], "outputId": "total_distance_km"},

    {"inputIds": ["Probabilidade de detecção"], "outputId": "P1_survival_rate_percent"},
    {"inputIds": ["Taxa de falso positivo"], "outputId": "total_distance_km"},
    {"inputIds": ["FOV do sensor"], "outputId": "total_distance_km"},
    {"inputIds": ["Largura de varredura"], "outputId": "total_distance_km"},

    {"inputIds": ["Perda de comunicação"], "outputId": "WMIL_min"},
    {"inputIds": ["Perda de comunicação"], "outputId": "P1_survival_rate_percent"},
    {"inputIds": ["Perda de comunicação"], "outputId": "payload_delivery_rate"},
    {"inputIds": ["Probabilidade de falha de agente"], "outputId": "MIL_P1_min"},
    {"inputIds": ["Probabilidade de falha de agente"], "outputId": "P1_survival_rate_percent"},
    {"inputIds": ["Probabilidade de falha de agente"], "outputId": "payload_delivery_rate"},
    {"inputIds": ["Probabilidade de falha de agente"], "outputId": "total_distance_km"},
    {"inputIds": ["Mudança de prioridade"], "outputId": "WMIL_min"},
    {"inputIds": ["Mudança de prioridade"], "outputId": "MIL_P1_min"},
    {"inputIds": ["Mudança de prioridade"], "outputId": "P1_survival_rate_percent"},
    {"inputIds": ["Chegada de novo incidente"], "outputId": "WMIL_min"},
    {"inputIds": ["Chegada de novo incidente"], "outputId": "payload_delivery_rate"},
    {"inputIds": ["Chegada de novo incidente"], "outputId": "payload_delivered_kg"},
    {"inputIds": ["Chegada de novo incidente"], "outputId": "total_distance_km"},

    {"inputIds": ["Alcance da comunicação"], "outputId": "payload_delivery_rate"},
    {"inputIds": ["Latência"], "outputId": "WMIL_min"},
    {"inputIds": ["Latência"], "outputId": "MIL_P1_min"},
    {"inputIds": ["Perda de pacotes"], "outputId": "WMIL_min"},
    {"inputIds": ["Perda de pacotes"], "outputId": "payload_delivery_rate"},
    {"inputIds": ["Alcance de retransmissão da UMC"], "outputId": "payload_delivery_rate"},

    {"inputIds": ["Tempo de resposta"], "outputId": "WMIL_min"},
    {"inputIds": ["Tempo de resposta"], "outputId": "MIL_P1_min"},
    {"inputIds": ["Tempo de resposta"], "outputId": "P1_survival_rate_percent"},
    {"inputIds": ["Política de aceitação/rejeição"], "outputId": "WMIL_min"},
    {"inputIds": ["Política de aceitação/rejeição"], "outputId": "payload_delivery_rate"},
    {"inputIds": ["Nível de autonomia"], "outputId": "WMIL_min"},
    {"inputIds": ["Nível de autonomia"], "outputId": "MIL_P1_min"},

    {"inputIds": ["Zonas proibidas"], "outputId": "payload_delivery_rate"},
    {"inputIds": ["Zonas proibidas"], "outputId": "total_distance_km"},
    {"inputIds": ["Zonas de risco"], "outputId": "total_distance_km"},
    {"inputIds": ["Janela crítica"], "outputId": "P1_survival_rate_percent"},

    {"inputIds": ["Tempo máximo de missão"], "outputId": "payload_delivery_rate"},
    {"inputIds": ["Tempo máximo de missão"], "outputId": "payload_delivered_kg"},
    {"inputIds": ["Tempo máximo de missão"], "outputId": "total_distance_km"}
  ],
  "prioritization": {
    "title": "Priorização de Funcionalidades",
    "methodology": {
      "description": "Abordagem multicritério adaptada para o ADS-CAMP, com foco no planejamento de missões, na validação experimental e na aderência à entrega.",
      "formula": "P = (IP × 0,4) + (IV × 0,4) + (RE × 0,2)",
      "weights": { "IP": 0.4, "IV": 0.4, "RE": 0.2 },
      "criteria": {
        "IP": "Impacto no planejamento: importância para planejamento de missões, coordenação dos agentes e tomada de decisão.",
        "IV": "Impacto na validação: importância para avaliação experimental e validação das capacidades previstas no CONOPS.",
        "RE": "Relevância para a entrega: contribuição para o CONOPS e para os objetivos da entrega à FINEP."
      },
      "scale": "1 — Muito baixo; 2 — Baixo; 3 — Moderado; 4 — Alto; 5 — Muito alto.",
      "classes": "Crítica: P ≥ 4,5; Alta: 3,5 ≤ P < 4,5; Média: 2,5 ≤ P < 3,5; Baixa: P < 2,5.",
      "effort": "Muito baixo: alteração localizada; Baixo: adaptação de funcionalidade existente; Médio: nova funcionalidade de impacto limitado; Alto: alterações significativas em múltiplos módulos; Muito alto: mecanismo complexo ou mudança arquitetural.",
      "ordering": "A ordem recomendada considera a pontuação, antecipa dependências técnicas e usa o menor esforço apenas como desempate entre itens equivalentes.",
      "disclaimer": "",
      "references": [
        "KARLSSON, J.; RYAN, K. A Cost-Value Approach for Prioritizing Requirements. IEEE Software, v. 14, n. 5, p. 67–74, 1997. DOI: 10.1109/52.605933.",
        "WIEGERS, K. E. First Things First: Prioritizing Requirements. Software Development, 1999."
      ]
    },
    "implemented": [
      {
        "inputId": "Quantidade de vítimas",
        "evidence": "Atendida por num_pois na geração de cenários e nos experimentos; não recebe prioridade de implementação."
      },
      {
        "inputId": "Prioridade",
        "evidence": "Triagem P1/P2/P3, ponderação de urgência e alocação PriorityGreedy estão implementadas; não recebe prioridade."
      },
      {
        "inputId": "Tipo de ajuda",
        "evidence": "Kits K1/K2/K3, carga requerida, estoque e entrega estão implementados; não recebe prioridade."
      },
      {
        "inputId": "Altitude máxima",
        "evidence": "O limite por veículo é configurado e utilizado na decolagem e no planejamento de trajetórias; não recebe prioridade."
      },
      {
        "inputId": "Número de execuções",
        "evidence": "O gerador de datasets controla repetições por configuração e o executor processa os cenários em lote; não recebe prioridade."
      },
      {
        "inputId": "Tempo máximo de missão",
        "evidence": "O limite max_steps encerra a missão por timeout e é configurável nos experimentos; não recebe prioridade."
      }
    ],
    "items": [
      {
        "name": "Falhas probabilísticas de agentes e recuperação da missão",
        "inputIds": ["Probabilidade de falha de agente"],
        "implementation": "Não implementada",
        "gap": "Injetar falhas probabilísticas, atualizar estados e realocar as tarefas dos agentes indisponíveis.",
        "IP": 5, "IV": 5, "RE": 4,
        "effort": "Médio",
        "justification": "Sem essa capacidade, não é possível validar continuidade e replanejamento após a perda de agentes.",
        "dependencies": [],
        "order": 3
      },
      {
        "name": "Inserção dinâmica de incidentes e vítimas",
        "inputIds": ["Chegada de novo incidente", "Surgimento das vítimas"],
        "implementation": "Parcial",
        "gap": "Inserir incidentes e vítimas durante a execução e acionar o replanejamento.",
        "IP": 5, "IV": 5, "RE": 5,
        "effort": "Médio",
        "justification": "A lacuna impede validar a adaptação da missão a demandas supervenientes.",
        "dependencies": [],
        "order": 1
      },
      {
        "name": "Restrições geográficas e planejamento orientado a risco",
        "inputIds": ["Zonas proibidas", "Zonas de risco"],
        "implementation": "Parcial",
        "gap": "Representar zonas proibidas e custos espaciais de risco no planejador.",
        "IP": 5, "IV": 4, "RE": 4,
        "effort": "Médio",
        "justification": "Essas restrições alteram a viabilidade, a segurança e o custo das rotas planejadas.",
        "dependencies": [],
        "order": 6
      },
      {
        "name": "Modelo de comunicação operacional",
        "inputIds": ["Alcance da comunicação", "Latência", "Perda de pacotes", "Perda de comunicação"],
        "implementation": "Não implementada",
        "gap": "Modelar enlace, alcance, latência, perda de pacotes e desconexões.",
        "IP": 5, "IV": 5, "RE": 5,
        "effort": "Alto",
        "justification": "A coordenação sob comunicação degradada é central para validar o planejamento distribuído.",
        "dependencies": [],
        "order": 2
      },
      {
        "name": "Repriorização dinâmica de vítimas",
        "inputIds": ["Mudança de prioridade"],
        "implementation": "Não implementada",
        "gap": "Atualizar a prioridade em execução e reordenar as tarefas afetadas.",
        "IP": 5, "IV": 4, "RE": 4,
        "effort": "Baixo",
        "justification": "A lacuna compromete a resposta do planejador a mudanças de urgência clínica.",
        "dependencies": [],
        "order": 4
      },
      {
        "name": "Detecção probabilística e falsos positivos",
        "inputIds": ["Probabilidade de detecção", "Taxa de falso positivo"],
        "implementation": "Não implementada",
        "gap": "Aplicar probabilidade de detecção, gerar falsos positivos e tratá-los no fluxo da missão.",
        "IP": 4, "IV": 5, "RE": 4,
        "effort": "Médio",
        "justification": "A incerteza perceptiva é necessária para validar busca e intervenção em condições realistas.",
        "dependencies": [],
        "order": 5
      },
      {
        "name": "Supervisão humana e níveis de autonomia",
        "inputIds": ["Tempo de resposta", "Política de aceitação/rejeição", "Nível de autonomia"],
        "implementation": "Não implementada",
        "gap": "Implementar o ciclo de aprovação humana, seus atrasos e os níveis de autonomia.",
        "IP": 4, "IV": 5, "RE": 3,
        "effort": "Alto",
        "justification": "Sem esse ciclo, não é possível validar a operação Human-in-the-Loop prevista no CONOPS.",
        "dependencies": ["Modelo de comunicação operacional"],
        "validationNote": "Validar com a equipe quais níveis de autonomia e quais decisões humanas pertencem ao escopo da entrega antes da implementação.",
        "order": 7
      },
      {
        "name": "Distribuição espacial configurável de vítimas",
        "inputIds": ["Distribuição das vítimas"],
        "implementation": "Parcial",
        "gap": "Configurar distribuições agrupadas e padrões espaciais coerentes com as áreas afetadas.",
        "IP": 2, "IV": 4, "RE": 3,
        "effort": "Baixo",
        "justification": "A parametrização amplia a representatividade e a comparabilidade dos cenários experimentais.",
        "dependencies": [],
        "order": 10
      },
      {
        "name": "Janelas críticas configuráveis de atendimento",
        "inputIds": ["Janela crítica"],
        "implementation": "Parcial",
        "gap": "Tornar os prazos P1/P2 configuráveis por cenário e registrá-los no experimento.",
        "IP": 2, "IV": 4, "RE": 3,
        "effort": "Baixo",
        "justification": "A configuração permite comparar resultados temporais sob diferentes janelas de atendimento.",
        "dependencies": [],
        "order": 9
      },
      {
        "name": "Geometria operacional do sensor e da varredura",
        "inputIds": ["FOV do sensor", "Largura de varredura"],
        "implementation": "Parcial",
        "gap": "Aplicar FOV direcional e largura de varredura explícita ao sensor e ao plano de busca.",
        "IP": 3, "IV": 4, "RE": 3,
        "effort": "Médio",
        "justification": "A geometria operacional melhora a validade das métricas de cobertura, detecção e distância.",
        "dependencies": [],
        "order": 8
      },
      {
        "name": "Retransmissão de comunicação pela UMC",
        "inputIds": ["Alcance de retransmissão da UMC"],
        "implementation": "Não implementada",
        "gap": "Modelar a UMC como nó de retransmissão, com cobertura e encaminhamento de mensagens.",
        "IP": 3, "IV": 3, "RE": 3,
        "effort": "Baixo",
        "justification": "A retransmissão permite avaliar continuidade da coordenação fora do alcance direto.",
        "dependencies": ["Modelo de comunicação operacional"],
        "order": 11
      },
      {
        "name": "Mobilidade de vítimas",
        "inputIds": ["Mobilidade"],
        "implementation": "Não implementada",
        "gap": "Movimentar os POIs e replanejar a interceptação e o atendimento de alvos móveis.",
        "IP": 3, "IV": 3, "RE": 2,
        "effort": "Médio",
        "justification": "A mobilidade altera trajetórias, entregas e tempos de intervenção.",
        "dependencies": ["Inserção dinâmica de incidentes e vítimas"],
        "order": 12
      },
      {
        "name": "Seleção explícita de seeds experimentais",
        "inputIds": ["Lista de seeds"],
        "implementation": "Parcial",
        "gap": "Aceitar uma lista explícita de seeds na configuração experimental.",
        "IP": 1, "IV": 4, "RE": 2,
        "effort": "Baixo",
        "justification": "A seleção explícita melhora auditoria e comparação pareada sem alterar a missão.",
        "dependencies": [],
        "order": 13
      },
      {
        "name": "Seleção configurável de métricas registradas",
        "inputIds": ["Métricas a registrar"],
        "implementation": "Parcial",
        "gap": "Permitir a seleção do subconjunto de métricas exportadas.",
        "IP": 1, "IV": 2, "RE": 2,
        "effort": "Muito baixo",
        "justification": "A seleção simplifica o protocolo experimental sem alterar os cálculos existentes.",
        "dependencies": [],
        "order": 14
      }
    ]
  }
};

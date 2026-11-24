const TRACEABILITY_DATA = {
  "title": "CENÁRIO ATUAL",
  "subtitle": "Rastreabilidade: Inputs (Parâmetros) → Métricas/Outputs Atuais",
  "inputsTitle": "INPUTS",
  "outputsTitle": "OUTPUTS / MÉTRICAS",
  "conopsTitle": "Correspondência com o CONOPS",
  "categories": [
    {
      "id": "mapa",
      "title": "1. MAPA / AMBIENTE",
      "color": "#000080",
      "conops": [
        "Área operacional definida pelo cenário do deslizamento urbano (Moradias de até 40 m²) e presença de obstáculos e vegetação."
      ],
      "inputRows": [
        [
          {
            "id": "map_type",
            "label": "map_type",
            "detail": "random / dense_city / river_city / rural"
          }
        ],
        [
          {
            "id": "map_width",
            "label": "map_width"
          },
          {
            "id": "map_height",
            "label": "map_height"
          }
        ],
        [
          {
            "id": "num_buildings",
            "label": "num_buildings"
          },
          {
            "id": "num_trees",
            "label": "num_trees"
          }
        ]
      ]
    },
    {
      "id": "frota",
      "title": "2. FROTA DE VEÍCULOS",
      "color": "#006400",
      "conops": [
        "Equipe mista de UAVs e UGVs.",
        "Sensores distintos e capacidades a bordo.",
        "Restrição de bateria, carga útil e consumo energético."
      ],
      "inputRows": [
        [
          {
            "id": "num_uavs",
            "label": "num_uavs"
          },
          {
            "id": "num_ugvs",
            "label": "num_ugvs"
          }
        ],
        [
          {
            "id": "sensor_radius",
            "label": "sensor_radius",
            "detail": "footprint RGB / thermal"
          }
        ],
        [
          {
            "id": "battery_capacity",
            "label": "battery_capacity"
          },
          {
            "id": "consumption_per_second",
            "label": "consumption_per_second"
          }
        ],
        [
          {
            "id": "empty_weight",
            "label": "empty_weight"
          },
          {
            "id": "max_payload_weight",
            "label": "max_payload_weight"
          }
        ],
        [
          {
            "id": "mass_scaling_exponent",
            "label": "mass_scaling_exponent",
            "detail": "consumo dependente da massa"
          }
        ]
      ]
    },
    {
      "id": "estacao",
      "title": "3. ESTAÇÃO DE OPERAÇÃO (BASE/UMC)",
      "color": "#D26900",
      "conops": [
        "Presença da UMC/estação como centro de comando local.",
        "Troca de bateria, estoque e apoio logístico à operação."
      ],
      "inputRows": [
        [
          {
            "id": "station_x",
            "label": "station_x"
          },
          {
            "id": "station_y",
            "label": "station_y"
          }
        ],
        [
          {
            "id": "depot_inventory",
            "label": "inventory",
            "detail": "estoque finito K1 / K2 / K3"
          }
        ]
      ]
    },
    {
      "id": "algoritmos",
      "title": "4. ALGORITMOS E ESTRATÉGIAS",
      "color": "#663399",
      "conops": [
        "Planejamento de rotas.",
        "Alocação de tarefas sensível à prioridade.",
        "Estratégias de exploração e intervenção."
      ],
      "inputRows": [
        [
          {
            "id": "path_algorithm",
            "label": "path_algorithm",
            "detail": "A* / Theta*"
          }
        ],
        [
          {
            "id": "path_parameters",
            "label": "cell_size / clearance"
          }
        ],
        [
          {
            "id": "task_algorithm",
            "label": "task_algorithm",
            "detail": "greedy / priority_greedy"
          }
        ],
        [
          {
            "id": "battery_margin",
            "label": "battery_margin"
          },
          {
            "id": "intervention_time",
            "label": "intervention_time"
          }
        ],
        [
          {
            "id": "allocation_cost_weights",
            "label": "cost_w_time / cost_w_consumed / cost_w_risk"
          }
        ],
        [
          {
            "id": "priority_weight_exp",
            "label": "priority_weight_exp",
            "detail": "ponderação P1 / P2 / P3"
          }
        ],
        [
          {
            "id": "coverage_strategy",
            "label": "coverage_strategy",
            "detail": "lawnmower"
          }
        ]
      ]
    },
    {
      "id": "colisao",
      "title": "5. EVITAÇÃO DE COLISÃO",
      "color": "#C00000",
      "conops": [
        "Segurança operacional dos veículos durante o voo e no solo."
      ],
      "inputRows": [
        [
          {
            "id": "safe_distance_2d",
            "label": "safe_distance_2d"
          }
        ],
        [
          {
            "id": "clearance_distance_2d",
            "label": "clearance_distance_2d"
          }
        ],
        [
          {
            "id": "lateral_offset",
            "label": "lateral_offset"
          }
        ],
        [
          {
            "id": "max_altitude_diff",
            "label": "max_altitude_diff"
          }
        ]
      ]
    },
    {
      "id": "gerais",
      "title": "6. CONFIGURAÇÕES GERAIS DA SIMULAÇÃO",
      "color": "#007A8A",
      "conops": [
        "Geração de vítimas/POIs com requisitos de detecção, triagem e assistência.",
        "Parâmetros que controlam a execução da missão no tempo."
      ],
      "inputRows": [
        [
          {
            "id": "timestep",
            "label": "timestep",
            "detail": "passo de tempo da simulação"
          },
          {
            "id": "viz_freq",
            "label": "viz_freq",
            "detail": "frequência de visualização"
          }
        ],
        [
          {
            "id": "random_seed",
            "label": "random_seed",
            "detail": "semente aleatória"
          }
        ],
        [
          {
            "id": "num_pois",
            "label": "num_pois",
            "detail": "quantidade de vítimas/POIs"
          },
          {
            "id": "poi_margin",
            "label": "poi_margin"
          }
        ],
        [
          {
            "id": "detection_type",
            "label": "detection_type",
            "detail": "rgb / thermal / both"
          }
        ],
        [
          {
            "id": "triage_priority",
            "label": "priority",
            "detail": "P1 / P2 / P3"
          }
        ],
        [
          {
            "id": "rescue_kit",
            "label": "required_payload",
            "detail": "K1 / K2 / K3, massa e potência"
          }
        ],
        [
          {
            "id": "max_steps",
            "label": "max_steps",
            "detail": "limite de execução"
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
    {"inputIds": ["map_type"], "outputId": "area_coverage_percent"},
    {"inputIds": ["map_type"], "outputId": "MTTD_min"},
    {"inputIds": ["map_type"], "outputId": "total_distance_km"},
    {"inputIds": ["map_width", "map_height"], "outputId": "area_coverage_percent"},
    {"inputIds": ["map_width", "map_height"], "outputId": "MTTD_min"},
    {"inputIds": ["map_width", "map_height"], "outputId": "TMM_min"},
    {"inputIds": ["num_buildings", "num_trees"], "outputId": "area_coverage_percent"},
    {"inputIds": ["num_buildings", "num_trees"], "outputId": "total_distance_km"},

    {"inputIds": ["num_uavs", "num_ugvs"], "outputId": "area_coverage_percent"},
    {"inputIds": ["num_uavs", "num_ugvs"], "outputId": "MTTD_min"},
    {"inputIds": ["num_uavs", "num_ugvs"], "outputId": "MIL_min"},
    {"inputIds": ["num_uavs", "num_ugvs"], "outputId": "total_energy_consumed_pct"},
    {"inputIds": ["num_uavs", "num_ugvs"], "outputId": "survival_rate_percent"},
    {"inputIds": ["sensor_radius"], "outputId": "area_coverage_percent"},
    {"inputIds": ["sensor_radius"], "outputId": "area_coverage_rgb"},
    {"inputIds": ["sensor_radius"], "outputId": "area_coverage_thermal"},
    {"inputIds": ["sensor_radius"], "outputId": "MTTD_min"},
    {"inputIds": ["battery_capacity", "consumption_per_second"], "outputId": "total_energy_consumed_pct"},
    {"inputIds": ["battery_capacity", "consumption_per_second"], "outputId": "energy_per_poi_pct"},
    {"inputIds": ["battery_capacity", "consumption_per_second"], "outputId": "survival_rate_percent"},
    {"inputIds": ["empty_weight", "max_payload_weight"], "outputId": "payload_delivery_rate"},
    {"inputIds": ["empty_weight", "max_payload_weight"], "outputId": "total_energy_consumed_pct"},
    {"inputIds": ["mass_scaling_exponent"], "outputId": "total_energy_consumed_pct"},
    {"inputIds": ["mass_scaling_exponent"], "outputId": "energy_per_poi_pct"},

    {"inputIds": ["station_x", "station_y"], "outputId": "MIL_min"},
    {"inputIds": ["station_x", "station_y"], "outputId": "total_distance_km"},
    {"inputIds": ["station_x", "station_y"], "outputId": "total_energy_consumed_pct"},
    {"inputIds": ["depot_inventory"], "outputId": "payload_delivery_rate"},
    {"inputIds": ["depot_inventory"], "outputId": "payload_delivered_kg"},
    {"inputIds": ["depot_inventory"], "outputId": "success_rate_percent"},

    {"inputIds": ["path_algorithm"], "outputId": "delta_L_percent"},
    {"inputIds": ["path_algorithm"], "outputId": "total_distance_km"},
    {"inputIds": ["path_algorithm"], "outputId": "TMM_min"},
    {"inputIds": ["path_parameters"], "outputId": "delta_L_percent"},
    {"inputIds": ["path_parameters"], "outputId": "total_distance_km"},
    {"inputIds": ["task_algorithm"], "outputId": "MIL_min"},
    {"inputIds": ["task_algorithm"], "outputId": "WMIL_min"},
    {"inputIds": ["task_algorithm"], "outputId": "MIL_P1_min"},
    {"inputIds": ["task_algorithm"], "outputId": "P1_survival_rate_percent"},
    {"inputIds": ["task_algorithm"], "outputId": "success_rate_percent"},
    {"inputIds": ["battery_margin", "intervention_time"], "outputId": "MIL_min"},
    {"inputIds": ["battery_margin", "intervention_time"], "outputId": "total_energy_consumed_pct"},
    {"inputIds": ["battery_margin", "intervention_time"], "outputId": "survival_rate_percent"},
    {"inputIds": ["allocation_cost_weights"], "outputId": "MIL_min"},
    {"inputIds": ["allocation_cost_weights"], "outputId": "WMIL_min"},
    {"inputIds": ["allocation_cost_weights"], "outputId": "total_energy_consumed_pct"},
    {"inputIds": ["priority_weight_exp"], "outputId": "WMIL_min"},
    {"inputIds": ["priority_weight_exp"], "outputId": "MIL_P1_min"},
    {"inputIds": ["priority_weight_exp"], "outputId": "P1_survival_rate_percent"},
    {"inputIds": ["coverage_strategy"], "outputId": "area_coverage_percent"},
    {"inputIds": ["coverage_strategy"], "outputId": "MTTD_min"},

    {"inputIds": ["safe_distance_2d"], "outputId": "ca_interventions"},
    {"inputIds": ["clearance_distance_2d"], "outputId": "ca_interventions"},
    {"inputIds": ["lateral_offset"], "outputId": "ca_interventions"},
    {"inputIds": ["max_altitude_diff"], "outputId": "ca_interventions"},

    {"inputIds": ["timestep", "viz_freq"], "outputId": "TMM_min"},
    {"inputIds": ["timestep", "viz_freq"], "outputId": "elapsed_min"},
    {"inputIds": ["random_seed"], "outputId": "area_coverage_percent"},
    {"inputIds": ["random_seed"], "outputId": "MTTD_min"},
    {"inputIds": ["random_seed"], "outputId": "MIL_min"},
    {"inputIds": ["random_seed"], "outputId": "success_rate_percent"},
    {"inputIds": ["random_seed"], "outputId": "total_energy_consumed_pct"},
    {"inputIds": ["num_pois", "poi_margin"], "outputId": "MTTD_min"},
    {"inputIds": ["num_pois", "poi_margin"], "outputId": "MIL_min"},
    {"inputIds": ["num_pois", "poi_margin"], "outputId": "success_rate_percent"},
    {"inputIds": ["detection_type"], "outputId": "MTTD_min"},
    {"inputIds": ["detection_type"], "outputId": "area_coverage_rgb"},
    {"inputIds": ["detection_type"], "outputId": "area_coverage_thermal"},
    {"inputIds": ["triage_priority"], "outputId": "WMIL_min"},
    {"inputIds": ["triage_priority"], "outputId": "MIL_P1_min"},
    {"inputIds": ["triage_priority"], "outputId": "P1_survival_rate_percent"},
    {"inputIds": ["rescue_kit"], "outputId": "payload_delivery_rate"},
    {"inputIds": ["rescue_kit"], "outputId": "payload_delivered_kg"},
    {"inputIds": ["rescue_kit"], "outputId": "total_energy_consumed_pct"},
    {"inputIds": ["max_steps"], "outputId": "mission_completed"},
    {"inputIds": ["max_steps"], "outputId": "termination_reason"}
  ],
  "referenceNotes": {
    "conopsReading": "Os parâmetros à esquerda representam conceitos do CONOPS efetivamente modelados no simulador atual.",
    "observations": [
      "A atualização incorpora Theta*, PriorityGreedy, triagem SAR, entrega de suprimentos e consumo energético dependente da massa.",
      "As métricas são derivadas dos dados de runtime produzidos pelos módulos do simulador."
    ]
  }
};

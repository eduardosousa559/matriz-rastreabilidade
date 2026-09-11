
const TRACEABILITY_DATA = {
  "title": "CENÁRIO ATUAL",
  "subtitle": "Rastreabilidade: Inputs (Parâmetros) → Métricas/Outputs Atuais",
  "inputsTitle": "INPUTS (PARÂMETROS CONFIGURADOS ATUALMENTE)",
  "outputsTitle": "OUTPUTS / MÉTRICAS ATUAIS (16 MÉTRICAS)",
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
            "detail": "floresta / deserto / pradaria"
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
        ],
        [
          {
            "id": "obstacle_density",
            "label": "obstacle_density"
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
        "Restrição de bateria e consumo energético."
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
            "id": "heterogeneous",
            "label": "heterogeneous",
            "detail": "True/False"
          }
        ],
        [
          {
            "id": "vehicle_counts",
            "label": "vehicle_counts",
            "detail": "rgb / thermal / kit"
          }
        ],
        [
          {
            "id": "uav_sensor_range",
            "label": "uav_sensor_range"
          },
          {
            "id": "uav_footprint_radius",
            "label": "uav_footprint_radius"
          }
        ],
        [
          {
            "id": "battery_capacity",
            "label": "battery_capacity"
          },
          {
            "id": "recharge_time",
            "label": "recharge_time"
          }
        ],
        [
          {
            "id": "initial_battery_pct",
            "label": "initial_battery_pct"
          }
        ],
        [
          {
            "id": "energy_consumption_per_sec",
            "label": "energy_consumption_per_sec"
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
        "Recarga e apoio à operação."
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
            "id": "battery_swap_time_sec",
            "label": "battery_swap_time_sec"
          }
        ],
        [
          {
            "id": "station_landable_radius",
            "label": "station_landable_radius"
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
        "Alocação de tarefas.",
        "Estratégias de exploração da área."
      ],
      "inputRows": [
        [
          {
            "id": "path_algorithm",
            "label": "path_algorithm",
            "detail": "A*/RRT"
          }
        ],
        [
          {
            "id": "task_algorithm",
            "label": "task_algorithm",
            "detail": "Greedy/Hungarian"
          }
        ],
        [
          {
            "id": "coverage_strategy",
            "label": "coverage_strategy",
            "detail": "lawnmower/spiral"
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
        "Geração de alvos/POIs de interesse para descoberta.",
        "Parâmetros que controlam a execução da missão no tempo."
      ],
      "inputRows": [
        [
          {
            "id": "sim_speed",
            "label": "sim_speed",
            "detail": "velocidade de visualização"
          }
        ],
        [
          {
            "id": "timestep",
            "label": "timestep",
            "detail": "passo de tempo da simulação"
          }
        ],
        [
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
            "detail": "quantidade de POIs"
          }
        ],
        [
          {
            "id": "poi_margin",
            "label": "poi_margin",
            "detail": "margem mínima dos POIs"
          }
        ]
      ]
    }
  ],
  "outputs": [
    {
      "id": "area_coverage_percent",
      "label": "area_coverage_percent",
      "description": "Percentual da área explorável coberta por qualquer UAV."
    },
    {
      "id": "area_coverage_rgb",
      "label": "area_coverage_rgb",
      "description": "Percentual da área explorável coberta apenas por UAVs RGB."
    },
    {
      "id": "area_coverage_thermal",
      "label": "area_coverage_thermal",
      "description": "Percentual da área explorável coberta apenas por UAVs Térmicos."
    },
    {
      "id": "MTTD_min",
      "label": "MTTD_min",
      "detail": "tempo médio de detecção",
      "description": "Tempo médio entre início da missão e descoberta dos POIs."
    },
    {
      "id": "MIL_min",
      "label": "MIL_min",
      "detail": "tempo médio de identificação",
      "description": "Tempo médio entre descoberta e resolução dos POIs."
    },
    {
      "id": "success_rate_percent",
      "label": "success_rate_percent",
      "detail": "pois_resolved / total_pois",
      "description": "Percentual de POIs resolvidos em relação ao total gerado."
    },
    {
      "id": "total_energy_consumed_pct",
      "label": "total_energy_consumed_pct",
      "description": "Percentual total de energia consumida pela frota."
    },
    {
      "id": "energy_per_poi_pct",
      "label": "energy_per_poi_pct",
      "description": "Percentual médio de energia consumida por POI resolvido."
    },
    {
      "id": "survival_rate_percent",
      "label": "survival_rate_percent",
      "description": "Percentual de veículos que permaneceram operacionais até o fim."
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
      "detail": "tempo médio da missão",
      "description": "Tempo médio total de duração da missão (minutos)."
    },
    {
      "id": "elapsed_min",
      "label": "elapsed_min",
      "detail": "tempo decorrido",
      "description": "Tempo total decorrido da simulação (minutos)."
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
      "description": "Motivo da finalização: Completed / Max Time / Interrupted / No Operational Vehicles."
    },
    {
      "id": "last_events",
      "label": "last_events",
      "detail": "log de eventos",
      "description": "Últimos eventos da operação (detecções, alocações, replanos, resoluções, trocas de bateria, fim)."
    }
  ],
  "relations": [
    {
      "inputIds": [
        "map_type"
      ],
      "outputId": "area_coverage_percent"
    },
    {
      "inputIds": [
        "map_width",
        "map_height"
      ],
      "outputId": "area_coverage_percent"
    },
    {
      "inputIds": [
        "num_buildings",
        "num_trees"
      ],
      "outputId": "area_coverage_percent"
    },
    {
      "inputIds": [
        "obstacle_density"
      ],
      "outputId": "area_coverage_percent"
    },
    {
      "inputIds": [
        "num_uavs"
      ],
      "outputId": "area_coverage_percent"
    },
    {
      "inputIds": [
        "num_uavs"
      ],
      "outputId": "area_coverage_rgb"
    },
    {
      "inputIds": [
        "num_uavs"
      ],
      "outputId": "area_coverage_thermal"
    },
    {
      "inputIds": [
        "num_uavs"
      ],
      "outputId": "MTTD_min"
    },
    {
      "inputIds": [
        "num_uavs"
      ],
      "outputId": "MIL_min"
    },
    {
      "inputIds": [
        "num_uavs"
      ],
      "outputId": "total_energy_consumed_pct"
    },
    {
      "inputIds": [
        "num_uavs"
      ],
      "outputId": "energy_per_poi_pct"
    },
    {
      "inputIds": [
        "num_uavs"
      ],
      "outputId": "survival_rate_percent"
    },
    {
      "inputIds": [
        "num_ugvs"
      ],
      "outputId": "MIL_min"
    },
    {
      "inputIds": [
        "num_ugvs"
      ],
      "outputId": "total_energy_consumed_pct"
    },
    {
      "inputIds": [
        "num_ugvs"
      ],
      "outputId": "energy_per_poi_pct"
    },
    {
      "inputIds": [
        "num_ugvs"
      ],
      "outputId": "survival_rate_percent"
    },
    {
      "inputIds": [
        "heterogeneous"
      ],
      "outputId": "area_coverage_percent"
    },
    {
      "inputIds": [
        "heterogeneous"
      ],
      "outputId": "area_coverage_rgb"
    },
    {
      "inputIds": [
        "heterogeneous"
      ],
      "outputId": "area_coverage_thermal"
    },
    {
      "inputIds": [
        "heterogeneous"
      ],
      "outputId": "total_energy_consumed_pct"
    },
    {
      "inputIds": [
        "heterogeneous"
      ],
      "outputId": "survival_rate_percent"
    },
    {
      "inputIds": [
        "vehicle_counts"
      ],
      "outputId": "area_coverage_rgb"
    },
    {
      "inputIds": [
        "vehicle_counts"
      ],
      "outputId": "area_coverage_thermal"
    },
    {
      "inputIds": [
        "vehicle_counts"
      ],
      "outputId": "MIL_min"
    },
    {
      "inputIds": [
        "uav_sensor_range"
      ],
      "outputId": "area_coverage_percent"
    },
    {
      "inputIds": [
        "uav_sensor_range"
      ],
      "outputId": "area_coverage_rgb"
    },
    {
      "inputIds": [
        "uav_sensor_range"
      ],
      "outputId": "area_coverage_thermal"
    },
    {
      "inputIds": [
        "uav_footprint_radius"
      ],
      "outputId": "area_coverage_percent"
    },
    {
      "inputIds": [
        "uav_footprint_radius"
      ],
      "outputId": "area_coverage_rgb"
    },
    {
      "inputIds": [
        "uav_footprint_radius"
      ],
      "outputId": "area_coverage_thermal"
    },
    {
      "inputIds": [
        "battery_capacity"
      ],
      "outputId": "total_energy_consumed_pct"
    },
    {
      "inputIds": [
        "battery_capacity"
      ],
      "outputId": "energy_per_poi_pct"
    },
    {
      "inputIds": [
        "battery_capacity"
      ],
      "outputId": "survival_rate_percent"
    },
    {
      "inputIds": [
        "recharge_time"
      ],
      "outputId": "total_energy_consumed_pct"
    },
    {
      "inputIds": [
        "recharge_time"
      ],
      "outputId": "energy_per_poi_pct"
    },
    {
      "inputIds": [
        "recharge_time"
      ],
      "outputId": "TMM_min"
    },
    {
      "inputIds": [
        "initial_battery_pct"
      ],
      "outputId": "total_energy_consumed_pct"
    },
    {
      "inputIds": [
        "initial_battery_pct"
      ],
      "outputId": "survival_rate_percent"
    },
    {
      "inputIds": [
        "energy_consumption_per_sec"
      ],
      "outputId": "total_energy_consumed_pct"
    },
    {
      "inputIds": [
        "energy_consumption_per_sec"
      ],
      "outputId": "energy_per_poi_pct"
    },
    {
      "inputIds": [
        "energy_consumption_per_sec"
      ],
      "outputId": "survival_rate_percent"
    },
    {
      "inputIds": [
        "station_x",
        "station_y"
      ],
      "outputId": "total_energy_consumed_pct"
    },
    {
      "inputIds": [
        "station_x",
        "station_y"
      ],
      "outputId": "energy_per_poi_pct"
    },
    {
      "inputIds": [
        "station_x",
        "station_y"
      ],
      "outputId": "survival_rate_percent"
    },
    {
      "inputIds": [
        "battery_swap_time_sec"
      ],
      "outputId": "TMM_min"
    },
    {
      "inputIds": [
        "battery_swap_time_sec"
      ],
      "outputId": "elapsed_min"
    },
    {
      "inputIds": [
        "path_algorithm"
      ],
      "outputId": "delta_L_percent"
    },
    {
      "inputIds": [
        "path_algorithm"
      ],
      "outputId": "ca_interventions"
    },
    {
      "inputIds": [
        "task_algorithm"
      ],
      "outputId": "delta_L_percent"
    },
    {
      "inputIds": [
        "task_algorithm"
      ],
      "outputId": "ca_interventions"
    },
    {
      "inputIds": [
        "coverage_strategy"
      ],
      "outputId": "area_coverage_percent"
    },
    {
      "inputIds": [
        "coverage_strategy"
      ],
      "outputId": "area_coverage_rgb"
    },
    {
      "inputIds": [
        "coverage_strategy"
      ],
      "outputId": "area_coverage_thermal"
    },
    {
      "inputIds": [
        "coverage_strategy"
      ],
      "outputId": "MTTD_min"
    },
    {
      "inputIds": [
        "coverage_strategy"
      ],
      "outputId": "MIL_min"
    },
    {
      "inputIds": [
        "coverage_strategy"
      ],
      "outputId": "total_energy_consumed_pct"
    },
    {
      "inputIds": [
        "coverage_strategy"
      ],
      "outputId": "energy_per_poi_pct"
    },
    {
      "inputIds": [
        "coverage_strategy"
      ],
      "outputId": "TMM_min"
    },
    {
      "inputIds": [
        "safe_distance_2d"
      ],
      "outputId": "ca_interventions"
    },
    {
      "inputIds": [
        "clearance_distance_2d"
      ],
      "outputId": "ca_interventions"
    },
    {
      "inputIds": [
        "lateral_offset"
      ],
      "outputId": "ca_interventions"
    },
    {
      "inputIds": [
        "max_altitude_diff"
      ],
      "outputId": "ca_interventions"
    },
    {
      "inputIds": [
        "random_seed"
      ],
      "outputId": "area_coverage_percent"
    },
    {
      "inputIds": [
        "random_seed"
      ],
      "outputId": "area_coverage_rgb"
    },
    {
      "inputIds": [
        "random_seed"
      ],
      "outputId": "area_coverage_thermal"
    },
    {
      "inputIds": [
        "random_seed"
      ],
      "outputId": "MTTD_min"
    },
    {
      "inputIds": [
        "random_seed"
      ],
      "outputId": "MIL_min"
    },
    {
      "inputIds": [
        "random_seed"
      ],
      "outputId": "success_rate_percent"
    },
    {
      "inputIds": [
        "random_seed"
      ],
      "outputId": "total_energy_consumed_pct"
    },
    {
      "inputIds": [
        "random_seed"
      ],
      "outputId": "energy_per_poi_pct"
    },
    {
      "inputIds": [
        "random_seed"
      ],
      "outputId": "survival_rate_percent"
    },
    {
      "inputIds": [
        "random_seed"
      ],
      "outputId": "delta_L_percent"
    },
    {
      "inputIds": [
        "random_seed"
      ],
      "outputId": "ca_interventions"
    },
    {
      "inputIds": [
        "random_seed"
      ],
      "outputId": "TMM_min"
    },
    {
      "inputIds": [
        "random_seed"
      ],
      "outputId": "elapsed_min"
    },
    {
      "inputIds": [
        "random_seed"
      ],
      "outputId": "mission_completed"
    },
    {
      "inputIds": [
        "random_seed"
      ],
      "outputId": "termination_reason"
    },
    {
      "inputIds": [
        "num_pois"
      ],
      "outputId": "MTTD_min"
    },
    {
      "inputIds": [
        "num_pois"
      ],
      "outputId": "MIL_min"
    },
    {
      "inputIds": [
        "num_pois"
      ],
      "outputId": "success_rate_percent"
    },
    {
      "inputIds": [
        "num_pois"
      ],
      "outputId": "energy_per_poi_pct"
    },
    {
      "inputIds": [
        "poi_margin"
      ],
      "outputId": "MTTD_min"
    },
    {
      "inputIds": [
        "poi_margin"
      ],
      "outputId": "MIL_min"
    },
    {
      "inputIds": [
        "poi_margin"
      ],
      "outputId": "success_rate_percent"
    },
    {
      "inputIds": [
        "timestep"
      ],
      "outputId": "TMM_min"
    },
    {
      "inputIds": [
        "timestep"
      ],
      "outputId": "elapsed_min"
    }
  ],
  "referenceNotes": {
    "conopsReading": "Os parâmetros à esquerda já representam, total ou parcialmente, conceitos presentes no CONOPS e são usados atualmente na aplicação.",
    "observations": [
      "As métricas atuais são todas derivadas de dados de runtime gerados durante a simulação.",
      "Esses dados não são visíveis como entrada na interface, mas são produzidos internamente pelos módulos do simulador."
    ]
  }
};

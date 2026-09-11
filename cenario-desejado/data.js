
const TRACEABILITY_DATA = {
  "title": "CENÁRIO DESEJADO",
  "subtitle": "Novos parâmetros (derivados do CONOPS) → Outputs / métricas",
  "inputsTitle": "INPUTS – NOVOS PARÂMETROS",
  "outputsTitle": "OUTPUTS / MÉTRICAS – CENÁRIO ATUAL",
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
      "label": "area_coverage_percent"
    },
    {
      "id": "area_coverage_rgb",
      "label": "area_coverage_rgb"
    },
    {
      "id": "area_coverage_thermal",
      "label": "area_coverage_thermal"
    },
    {
      "id": "MTTD_min",
      "label": "MTTD_min"
    },
    {
      "id": "MIL_min",
      "label": "MIL_min"
    },
    {
      "id": "success_rate_percent",
      "label": "success_rate_percent"
    },
    {
      "id": "total_energy_consumed_pct",
      "label": "total_energy_consumed_pct"
    },
    {
      "id": "energy_per_poi_pct",
      "label": "energy_per_poi_pct"
    },
    {
      "id": "survival_rate_percent",
      "label": "survival_rate_percent"
    },
    {
      "id": "delta_L_percent",
      "label": "delta_L_percent"
    },
    {
      "id": "ca_interventions",
      "label": "ca_interventions"
    },
    {
      "id": "TMM_min",
      "label": "TMM_min"
    },
    {
      "id": "elapsed_min",
      "label": "elapsed_min"
    },
    {
      "id": "mission_completed",
      "label": "mission_completed"
    },
    {
      "id": "termination_reason",
      "label": "termination_reason"
    },
    {
      "id": "last_events",
      "label": "last_events"
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
        "Prioridade"
      ],
      "outputId": "MTTD_min"
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
      "outputId": "MTTD_min"
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
      "outputId": "MTTD_min"
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
    }
  ]
};

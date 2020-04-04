export type skill = {
  name: string;
  name_eng?: string;
  step: number;
  unit?: string;
};
export const commandors: {
  name: string;
  name_eng?: string
  portrait?: string,
  skills: [[skill, skill], [skill, skill], [skill, skill]];
}[] = [
  {
    name: '雷诺',
    name_eng: 'Raynor',
    portrait: require('./assets/raynorportrait.png'),
    skills: [
      [
        {
          name: '研究资源费用',
          name_eng: 'Research Resource Cost',
          step: -2,
          unit: '%',
        },
        {
          name: '空投仓单位的速度提升',
          name_eng: 'Speed Increases for Drop Pod Units',
          step: 2,
          unit: '%'
        }
      ],
      [
        {
          name: '休伯利安号冷却时间',
          name_eng: 'Hyperion Cooldown	',
          step: -4,
          unit: '秒',
        },
        {
          name: '女妖空袭冷却时间',
          name_eng: 'Banshee Airstrike Cooldown	',
          step: -4,
          unit: '秒',
        }
      ],
      [
        {
          name: '医疗兵治疗额外目标',
          name_eng: 'Medics Heal Addtional Target	',
          step: 3,
          unit: '%'
        },
        {
          name: '机械部队攻击速度',
          name_eng: 'Mech Attack Speed	',
          step: 1,
          unit: '%'
        }
      ]
    ]
  },
  {
    name: '凯瑞甘',
    name_eng: 'Kerrigan',
    portrait: require('./assets/kerriganportrait.png'),
    skills: [
      [
        {
          name: '凯瑞甘能量恢复',
          name_eng: 'Kerrigan Energy Regeneration	',
          step: 1.5,
          unit: '%'
        },
        {
          name: '凯瑞甘攻击伤害',
          name_eng: 'Kerrigan Attack Damage	',
          step: 1,
          unit: ''
        }
      ],
      [
        {
          name: '战斗单位高能瓦斯消耗',
          name_eng: 'Combat Unit Vespene Gas Cost	',
          step: -1,
          unit: '%',
        },
        {
          name: '吸收光环持续时间',
          name_eng: 'Augmented Immobilization Wave	',
          step: 3.33,
          unit: '%'
        }
      ],
      [
        {
          name: '幼虫孵化速度',
          name_eng: 'Expeditious Evolutions	',
          step: -2,
          unit: '%'
        },
        {
          name: '凯瑞甘茧的出生时间',
          name_eng: 'Primary Ability Damage and Attack Speed	',
          step: 1,
          unit: '%',
        }
      ]
    ]
  },
  {
    name: '阿塔尼斯',
    name_eng: 'Artanis',
    portrait: require('./assets/artanisportrait.png'),
    skills: [
      [
        {
          name: '护盾超载持续时间和伤害吸收',
          name_eng: 'Shield Overcharge Duration and Damage Absorption	',
          step: 3,
          unit: '%'
        },
        {
          name: '守护之壳生命值和护盾恢复',
          name_eng: 'Guardian Shell Life and Shield Regeneration	',
          step: 0.5,
          unit: '%'
        }
      ],
      [
        {
          name: '折跃充能恢复',
          name_eng: 'Energy Regeneration and Cooldown Reduction	',
          step: 1.5,
          unit: '%',
        },
        {
          name: '折跃单位的速度提升',
          name_eng: 'Speed Increase for Warped in Units	',
          step: 2,
          unit: '%',
        }
      ],
      [
        {
          name: '时空提速效能',
          name_eng: 'Chrono Boost Efficiency	',
          step: 1,
          unit: '%'
        },
        {
          name: '亚顿之矛初始和最大能量值',
          name_eng: 'Initial and Maximum Spear of Adun Energy	',
          step: 3,
          unit: ''
        }
      ]
    ]
  },
  {
    name: '斯旺',
    name_eng: 'Swann',
    portrait: require('./assets/swannportrait.png'),
    skills: [
      [
        {
          name: '汇聚射线的宽度和伤害',
          name_eng: 'Concentrated Beam Width and Damage	',
          step: 2,
          unit: '%'
          
        },
        {
          name: '战斗空投持续时间和生命值',
          name_eng: 'Combat Drop Duration and Life	',
          step: 2,
          unit: '%'
        }
      ],
      [
        {
          name: '永生程序的消耗和建造时间',
          name_eng: 'Immortality Protocol Cost and Build Time	',
          step: -2,
          unit: '秒',
        },
        {
          name: '建筑生命值',
          name_eng: 'Structure Health	',
          step: 2,
          unit: '秒',
        }
      ],
      [
        {
          name: '瓦斯采集器消耗',
          name_eng: 'Vespene Drone Cost	',
          step: -3,
          unit: '%'
        },
        {
          name: '激光钻机的生产时间',
          name_eng: 'Laser Drill Build Time, Upgrade Time, and Upgrade Cost',
          step: -1.5,
          unit: '%'
        }
      ]
    ]
  },
  {
    name: '扎加拉',
    name_eng: 'Zagara',
    portrait: require('./assets/zagaraportrait.png'),
    skills: [
      [
        {
          name: '扎加拉的生命值和能量恢复',
          name_eng: 'Zagara Life and Energy Regeneration	',
          step: 3,
          unit: '%'
        },
        {
          name: '扎加拉攻击伤害',
          step: 1,
          unit: '',
          name_eng: 'Zagara Attack Damage	'
        }
      ],
      [
        {
          name: '爆虫攻击伤害',
          step: 1,
          unit: '',
          name_eng: 'Baneling Attack Damage	'
        },
        {
          name: '蟑螂的伤害和生命值',
          step: 1.5,
          unit: '%',
          name_eng: 'Zergling Evasion	',
        }
      ],
      [
        {
          name: '蟑螂的伤害和生命值',
          name_eng: 'Roach Damage and Life	',
          step: 2,
          unit: '%'
        },
        {
          name: '扎加拉茧的出生时间',
          name_eng: 'Intensified Frenzy	',
          step: 1.5,
          unit: '%'
        }
      ]
    ]
  },{
    name: '沃拉尊',
    name_eng: 'Vorazun',
    portrait: require('./assets/vorazunportrait.png'),
    skills: [
      [
        {
          name: '黑暗水晶塔范围',
          name_eng: 'Dark Pylon Range	',
          step: 2,
          unit: '%'
        },
        {
          name: '黑洞持续时间',
          name_eng: 'Black Hole Duration	',
          step: 2,
          unit: '%'
        }
      ],
      [
        {
          name: '暗影卫队持续时间',
          name_eng: 'Shadow Guard Duration	',
          step: 2,
          unit: '秒',
        },
        {
          name: '时间停止的单位速度提升',
          name_eng: 'Time Stop Unit Speed Increase	',
          step: 1,
          unit: '秒',
        }
      ],
      [
        {
          name: '时空提速效能',
          name_eng: 'Chrono Boost Efficiency	',
          step: 1,
          unit: '%'
        },
        {
          name: '亚顿之矛初始和最大能量值',
          name_eng: 'Initial and Maximum Spear of Adun Energy	',
          step: 3,
          unit: ''
        }
      ]
    ]
  },{
    name: '阿巴瑟',
    skills: [
      [
        {
          name: '剧毒巢穴重生几率',
          step: 3,
          unit: '%'
        },
        {
          name: '愈合治疗',
          step: 3,
          unit: '%'
        }
      ],
      [
        {
          name: '共生体甲壳吸收',
          step: 3,
          unit: '秒',
        },
        {
          name: '生物质获取几率',
          step: 3,
          unit: '秒',
        }
      ],
      [
        {
          name: '剧毒巢穴最大使用次数',
          step: 3,
          unit: '%'
        },
        {
          name: '建筑变异和进化速度',
          step: 3,
          unit: '%'
        }
      ]
    ]
  }
];


export default commandors
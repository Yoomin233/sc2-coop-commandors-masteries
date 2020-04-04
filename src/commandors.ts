export type skill = {
  name?: string;
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
    name: '雷日天',
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
    name: '女王',
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
    name: '大主教',
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
  },
  {
    name: '凯拉克斯',
    name_eng: 'Karax',
    portrait: require('./assets/karaxportrait.png'),
    skills: [
      [
        {
          name: '战斗单位生命值与护盾',
          name_eng: 'Combat Unit Life and Shields	',
          step: 2,
          unit: '%'
        },
        {
          name: '建筑生命值与护盾',
          name_eng: 'Structure Life and Shields	',
          step: 1,
          unit: '%'
        }
      ],
      [
        {
          name: '修理光束治疗速度',
          name_eng: 'Repair Beam Healing Rate	',
          step: 1,
          unit: '%',
        },
        {
          name: '时空波动能量生成',
          name_eng: 'Chrono Wave Energy Regeneration',
          step: 1,
          unit: '',
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
          step: -2,
          unit: '%'
        }
      ]
    ]
  },{
    name: '阿巴瑟',
    name_eng: 'Abathur',
    portrait: require('./assets/abathurportrait.png'),
    skills: [
      [
        {
          // name: '剧毒巢穴重生几率',
          name_eng: 'Toxic Nest Damage	',
          step: 2,
          unit: '%'
        },
        {
          // name: '愈合治疗',
          name_eng: 'Mend Healing Duration	',
          step: 10,
          unit: '%'
        }
      ],
      [
        {
          // name: '共生体甲壳吸收',
          name_eng: 'Symbiote Ability Improvement	',
          step: 3.33,
          unit: '%',
        },
        {
          name: '生物质获取几率',
          name_eng: 'Double Biomass Chance	',
          step: 1,
          unit: '%',
        }
      ],
      [
        {
          // name: '剧毒巢穴最大使用次数',
          name_eng: 'Toxic Nests Maximum Charges and Cooldown	',
          step: 1,
          unit: '%'
        },
        {
          // name: '建筑变异和进化速度',
          name_eng: 'Structure Morph and Evolution Rate	',
          step: -2,
          unit: '%'
        }
      ]
    ]
  },
  {
    name: '阿拉纳克',
    name_eng: 'Alarak',
    portrait: require('./assets/alarakportrait.png'),
    skills: [
      [
        {
          // name: '剧毒巢穴重生几率',
          name_eng: 'Alarak Attack Damage	',
          step: 1,
          unit: ''
        },
        {
          // name: '愈合治疗',
          name_eng: 'Combat Unit Attack Speed	',
          step: 0.5,
          unit: '%'
        }
      ],
      [
        {
          // name: '共生体甲壳吸收',
          name_eng: 'Empower Me Duration	',
          step: 1,
          unit: '秒',
        },
        {
          // name: '生物质获取几率',
          name_eng: 'Death Fleet Cooldown	',
          step: -4,
          unit: '秒',
        }
      ],
      [
        {
          // name: '剧毒巢穴最大使用次数',
          name_eng: 'Structure Overcharge Shield and Attack Speed	',
          step: 2,
          unit: '%'
        },
        {
          // name: '建筑变异和进化速度',
          name_eng: 'Chrono Boost Efficiency	',
          step: 1,
          unit: '%'
        }
      ]
    ]
  },
  {
    name: '诺娃',
    name_eng: 'Nova',
    portrait: require('./assets/novaportrait.png'),
    skills: [
      [
        {
          // name: '剧毒巢穴重生几率',
          name_eng: 'Nuke and Holo Decoy Cooldown	',
          step: -3,
          unit: '秒'
        },
        {
          // name: '愈合治疗',
          name_eng: 'Griffin Airstrike Cost	',
          step: -10,
          unit: ''
        }
      ],
      [
        {
          // name: '共生体甲壳吸收',
          name_eng: 'Nova Primary Ability Improvement	',
          step: 1.67,
          unit: '%',
        },
        {
          // name: '生物质获取几率',
          name_eng: 'Combat Unit Attack Speed	',
          step: 0.5,
          unit: '%',
        }
      ],
      [
        {
          // name: '剧毒巢穴最大使用次数',
          name_eng: 'Nova Energy Regeneration	',
          step: 1,
          unit: '%'
        },
        {
          // name: '建筑变异和进化速度',
          name_eng: 'Unit Life Regeneration	',
          step: 0.2,
          unit: '%'
        }
      ]
    ]
  },
  {
    name: '毛子',
    name_eng: 'Stukov',
    portrait: require('./assets/stukovportrait.png'),
    skills: [
      [
        {
          // name: '剧毒巢穴重生几率',
          name_eng: 'Volatile Infested Spawn Chance	',
          step: 0.5,
          unit: '%'
        },
        {
          // name: '愈合治疗',
          name_eng: 'Infest Structure Cooldown	',
          step: 1.5,
          unit: '秒'
        }
      ],
      [
        {
          // name: '共生体甲壳吸收',
          name_eng: 'Aleksander Cooldown	',
          step: -3,
          unit: '秒',
        },
        {
          // name: '生物质获取几率',
          name_eng: 'Apocalisk Cooldown	',
          step: -3,
          unit: '秒',
        }
      ],
      [
        {
          // name: '剧毒巢穴最大使用次数',
          name_eng: 'Infested Infantry Duration	',
          step: 1,
          unit: '秒'
        },
        {
          // name: '建筑变异和进化速度',
          name_eng: 'Mech Attack Speed	',
          step: 1,
          unit: '%'
        }
      ]
    ]
  },
  {
    name: '菲尼克斯',
    name_eng: 'Fenix',
    portrait: require('./assets/fenixportrait.png'),
    skills: [
      [
        {
          // name: '剧毒巢穴重生几率',
          name_eng: 'Fenix Suit Attack Speed	',
          step: 2,
          unit: '%'
        },
        {
          // name: '愈合治疗',
          name_eng: 'Fenix Suit Offline Energy Regeneration	',
          step: 0.75,
          unit: '%'
        }
      ],
      [
        {
          // name: '共生体甲壳吸收',
          name_eng: 'Champion A.I. Attack Speed	',
          step: 1,
          unit: '%',
        },
        {
          // name: '生物质获取几率',
          name_eng: 'Champion A.I Life and Shields	',
          step: 2,
          unit: '%',
        }
      ],
      [
        {
          // name: '剧毒巢穴最大使用次数',
          name_eng: 'Chrono Boost Efficiency	',
          step: 1,
          unit: '%'
        },
        {
          // name: '建筑变异和进化速度',
          name_eng: 'Extra Starting Supply	',
          step: 2,
          unit: '%'
        }
      ]
    ]
  },{
    name: '二哈',
    name_eng: 'Dehaka',
    portrait: require('./assets/dehakaportrait.png'),
    skills: [
      [
        {
          // name: '剧毒巢穴重生几率',
          name_eng: 'Devour Healing Increase	',
          step: 1,
          unit: '%'
        },
        {
          // name: '愈合治疗',
          name_eng: 'Devour Buff Duration	',
          step: 3,
          unit: '%'
        }
      ],
      [
        {
          // name: '共生体甲壳吸收',
          name_eng: 'Greater Primal Wurm Cooldown	',
          step: -1.5,
          unit: '%',
        },
        {
          // name: '生物质获取几率',
          name_eng: 'Pack Leaders Active Duration	',
          step: 1,
          unit: '%',
        }
      ],
      [
        {
          // name: '剧毒巢穴最大使用次数',
          name_eng: 'Gene Mutation Chance	',
          step: 2,
          unit: '%'
        },
        {
          // name: '建筑变异和进化速度',
          name_eng: 'Dehaka Attack Speed	',
          step: 1,
          unit: '%'
        }
      ]
    ]
  },{
    name: '霍纳与韩',
    name_eng: 'Han & Horner',
    portrait: require('./assets/hanhornerportrait.png'),
    skills: [
      [
        {
          // name: '剧毒巢穴重生几率',
          name_eng: 'Strike Fighter Area of Effect	',
          step: 1,
          unit: '%'
        },
        {
          // name: '愈合治疗',
          name_eng: 'Stronger Death Chance	',
          step: 2,
          unit: '%'
        }
      ],
      [
        {
          // name: '共生体甲壳吸收',
          name_eng: 'Significant Other Bonuses	',
          step: 0.5,
          unit: '%',
        },
        {
          // name: '生物质获取几率',
          name_eng: 'Double Salvage Chance	',
          step: 2,
          unit: '%',
        }
      ],
      [
        {
          // name: '剧毒巢穴最大使用次数',
          name_eng: 'Air Fleet Travel Distance	',
          step: 2,
          unit: '%'
        },
        {
          // name: '建筑变异和进化速度',
          name_eng: 'Mag Mine Charges, Cooldown and Arming Time',
          step: -1,
          unit: '%'
        }
      ]
    ]
  },{
    name: '好兄弟',
    name_eng: 'Tychus',
    portrait: require('./assets/tychusportrait.png'),
    skills: [
      [
        {
          // name: '剧毒巢穴重生几率',
          name_eng: 'Tychus Attack Speed	',
          step: 1,
          unit: '%'
        },
        {
          // name: '愈合治疗',
          name_eng: 'Tychus Shredder Grenade Cooldown	',
          step: -1,
          unit: '%'
        }
      ],
      [
        {
          // name: '共生体甲壳吸收',
          name_eng: 'Tri-Outlaw Research Improvement	',
          step: 0.5,
          unit: '%',
        },
        {
          // name: '生物质获取几率',
          name_eng: 'Outlaw Availability	',
          step: -2,
          unit: '秒',
        }
      ],
      [
        {
          // name: '剧毒巢穴最大使用次数',
          name_eng: 'Medivac Pickup Cooldown	',
          step: -1.5,
          unit: '秒'
        },
        {
          // name: '建筑变异和进化速度',
          name_eng: 'Odin Cooldown	',
          step: -4,
          unit: '秒'
        }
      ]
    ]
  },{
    name: '泽叔',
    name_eng: 'Zeratul',
    portrait: require('./assets/zeratulportrait.png'),
    skills: [
      [
        {
          // name: '剧毒巢穴重生几率',
          name_eng: 'Zeratul Attack Speed	',
          step: 1.5,
          unit: '%'
        },
        {
          // name: '愈合治疗',
          name_eng: 'Combat Unit Attack Speed	',
          step: 0.5,
          unit: '%'
        }
      ],
      [
        {
          // name: '共生体甲壳吸收',
          name_eng: 'Artifact Fragment Spawn Rate	',
          step: -2,
          unit: '秒'
        },
        {
          // name: '生物质获取几率',
          name_eng: 'Support Calldown Cooldown Reduction	',
          step: -1,
          unit: '%',
        }
      ],
      [
        {
          // name: '剧毒巢穴最大使用次数',
          name_eng: 'Legendary Legion Cost	',
          step: -1,
          unit: '%'
        },
        {
          // name: '建筑变异和进化速度',
          name_eng: 'Avatar Cooldown	',
          step: -4,
          unit: '秒'
        }
      ]
    ]
  },{
    name: '斯特图曼',
    name_eng: 'Stetmann',
    portrait: require('./assets/stetmannportrait.png'),
    skills: [
      [
        {
          // name: '剧毒巢穴重生几率',
          name_eng: 'Upgrade Resource Cost	',
          step: -2,
          unit: '%'
        },
        {
          // name: '愈合治疗',
          name_eng: 'Gary Ability Cooldown	',
          step: -1,
          unit: '%'
        }
      ],
      [
        {
          // name: '共生体甲壳吸收',
          name_eng: 'Stetzone Bonuses	',
          step: 2,
          unit: '%',
        },
        {
          // name: '生物质获取几率',
          name_eng: 'Maximum Egonergy Pool	',
          step: 2,
          unit: '%',
        }
      ],
      [
        {
          // name: '剧毒巢穴最大使用次数',
          name_eng: 'Deploy Stetellite Cooldown	',
          step: -0.17,
          unit: '秒'
        },
        {
          // name: '建筑变异和进化速度',
          name_eng: 'Structure Morph Rate	',
          step: 2,
          unit: '%'
        }
      ]
    ]
  },{
    name: '大帝',
    name_eng: 'Mengsk',
    portrait: require('./assets/mengskportrait.png'),
    skills: [
      [
        {
          // name: '剧毒巢穴重生几率',
          name_eng: 'Laborer and Trooper Imperial Support	',
          step: 1,
          unit: '%'
        },
        {
          // name: '愈合治疗',
          name_eng: 'Royal Guard Imperial Support',
          step: 1,
          unit: '%'
        }
      ],
      [
        {
          // name: '共生体甲壳吸收',
          name_eng: 'Terrible Damage	',
          step: 1,
          unit: '%',
        },
        {
          // name: '生物质获取几率',
          name_eng: 'Royal Guard Cost	',
          step: 0.66,
          unit: '%',
        }
      ],
      [
        {
          // name: '剧毒巢穴最大使用次数',
          name_eng: 'Starting Imperial Mandate',
          step: 1,
          unit: ''
        },
        {
          // name: '建筑变异和进化速度',
          name_eng: 'Royal Guard Experience Gain Rate',
          step: 0.5,
          unit: '%'
        }
      ]
    ]
  }
];


export default commandors
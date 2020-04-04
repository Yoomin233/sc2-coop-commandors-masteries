export type skill = {
  name: string;
  step: number;
  unit?: string;
  minus?: boolean;
};
export const commandors: {
  name: string;
  skills: [[skill, skill], [skill, skill], [skill, skill]];
}[] = [
  {
    name: '雷诺',
    skills: [
      [
        {
          name: '强化剂持续时间',
          step: 3,
          unit: '%'
        },
        {
          name: '空头仓单位的速度提升',
          step: 3,
          unit: '%'
        }
      ],
      [
        {
          name: '休伯利安号冷却时间',
          step: 3,
          unit: '秒',
          minus: true
        },
        {
          name: '女妖空袭冷却时间',
          step: 3,
          unit: '秒',
          minus: true
        }
      ],
      [
        {
          name: '医疗病治疗额外目标',
          step: 3,
          unit: '%'
        },
        {
          name: '医疗病治疗期间的伤害减免',
          step: 3,
          unit: '%'
        }
      ]
    ]
  },
  {
    name: '凯瑞甘',
    skills: [
      [
        {
          name: '凯瑞甘能量恢复',
          step: 3,
          unit: '%'
        },
        {
          name: '凯瑞甘攻击伤害',
          step: 3,
          unit: ''
        }
      ],
      [
        {
          name: '战斗单位高能瓦斯消耗',
          step: 3,
          unit: '%',
          minus: true
        },
        {
          name: '吸收光环持续时间',
          step: 3,
          unit: '秒'
        }
      ],
      [
        {
          name: '幼虫孵化速度',
          step: 3,
          unit: '%'
        },
        {
          name: '凯瑞甘茧的出生时间',
          step: 3,
          unit: '%',
          minus: true
        }
      ]
    ]
  },
  {
    name: '阿塔尼斯',
    skills: [
      [
        {
          name: '护盾超载持续时间和伤害吸收',
          step: 3,
          unit: '%'
        },
        {
          name: '守护之壳生命值和护盾恢复',
          step: 3,
          unit: '%'
        }
      ],
      [
        {
          name: '折跃充能恢复',
          step: 3,
          unit: '秒',
          minus: true
        },
        {
          name: '折跃单位的速度提升',
          step: 3,
          unit: '秒',
          minus: true
        }
      ],
      [
        {
          name: '时空提速效能',
          step: 3,
          unit: '%'
        },
        {
          name: '亚顿之矛初始和最大能量值',
          step: 3,
          unit: '%'
        }
      ]
    ]
  }
];


export default commandors
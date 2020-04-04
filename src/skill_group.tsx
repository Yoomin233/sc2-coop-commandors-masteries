import * as React from 'react';
import { skill } from 'commandors';

const SkillGroup = (prop: { skills: [skill, skill]; idx: number }) => {
  const { skills, idx } = prop;
  const [skill_1_points, set_skill_1_points] = React.useState(0);
  const [skill_2_points, set_skill_2_points] = React.useState(0);

  const remaining_points = 30 - (skill_1_points + skill_2_points);

  const set_points = (
    setter: React.Dispatch<React.SetStateAction<number>>,
    step: number,
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    let added_points = step;
    if (e.shiftKey) {
      added_points *= 10;
    }
    setter(current => {
      /**
       * 上下限处理
       */
      if (current + added_points < 0) {
        return 0;
      }
      if (current + added_points > 20) {
        return 20;
      }
      if (remaining_points < added_points) {
        added_points = remaining_points;
      }
      return current + added_points;
    });
  };
  return (
    <div className='skill_group'>
      <p>
        <span>技能组 {idx + 1}</span>
        <span>尚未花费点数: {remaining_points}</span>
      </p>
      {skills.map((s, idx: 0 | 1) => (
        <p key={idx}>
          <span>{s.name}</span>
          <span>
            {s.minus ? '-' : '+'}
            {(idx === 0 ? skill_1_points : skill_2_points) * s.step}
            {s.unit}
          </span>
          <span>{idx === 0 ? skill_1_points : skill_2_points}/20</span>
          <span
          className='btn'
            onClick={e =>
              set_points(
                idx === 0 ? set_skill_1_points : set_skill_2_points,
                -1,
                e
              )
            }
          >
            -
          </span>
          <span
          className='btn'
            onClick={e =>
              set_points(
                idx === 0 ? set_skill_1_points : set_skill_2_points,
                1,
                e
              )
            }
          >
            +
          </span>
        </p>
      ))}
    </div>
  );
};

export default SkillGroup;

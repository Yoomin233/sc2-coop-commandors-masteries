import * as React from 'react';
import { skill } from 'commandors';
import Transition from 'components/transition';

const SkillGroup = (prop: { skills: [skill, skill]; idx: number }) => {
  const { skills, idx: group_idx } = prop;
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
      if (current + added_points > 30) {
        return 30;
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
        <span>技能组 {group_idx + 1}</span>
        <span>尚未花费点数: {remaining_points}</span>
      </p>
      {skills.map((s, idx: 0 | 1) => {
        const mastery_point = idx === 0 ? skill_1_points : skill_2_points;
        const mastery_setter =
          idx === 0 ? set_skill_1_points : set_skill_2_points;
        return (
          <p key={idx}>
            <Transition delay={group_idx * 2 * 20 + idx * 20}>
              <span>
                {s.name}
                {s.name_eng && (
                  <>
                    <br></br>
                    {s.name_eng}
                  </>
                )}
              </span>
            </Transition>

            <span>
              {s.step < 0 ? '' : '+'}
              {mastery_point * s.step}
              {s.unit}
            </span>
            <span>{mastery_point}/30</span>
            <span
              className={`btn ${mastery_point <= 0 ? 'disabled' : ''}`}
              onClick={e => set_points(mastery_setter, -1, e)}
            >
              -
            </span>
            <span
              className={`btn ${remaining_points <= 0 ? 'disabled' : ''}`}
              onClick={e => set_points(mastery_setter, 1, e)}
            >
              +
            </span>
          </p>
        );
      })}
    </div>
  );
};

export default SkillGroup;

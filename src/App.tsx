import * as React from 'react';

import { hot } from 'react-hot-loader/root';

import commandors from './commandors';
import SkillGroup from './skill_group';


const App = () => {
  const [selected_commandor, set_selected_commandor] = React.useState(commandors[0].name);
  // const [points_available, set_points_available] = React.useState(90);
  // const [points_used, set_points_used] = React.useState(0);

  const commandor_skills = commandors.filter(
    c => c.name === selected_commandor
  )[0].skills;

  return (
    <div className='wrapper'>
      <p className='commandors'>
        {commandors.map(n => (
          <span key={n.name} onClick={() => set_selected_commandor(n.name)} className={n.name === selected_commandor ? 'selected' : '' }>
            {
              n.portrait && <><img src={n.portrait}></img></>
            }
            {
              n.name
            }
            {
              n.name_eng && <span>({n.name_eng})</span>
            }
          </span>
        ))}
      </p>
      {/* <p>总点数: {points_available}</p> */}
      {commandor_skills.map((s, idx) => (
        <SkillGroup skills={s} idx={idx} key={idx}></SkillGroup>
      ))}
    </div>
  );
};

export default hot(App);

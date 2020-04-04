import * as React from 'react';

import './style.less';

interface Props {
  children: any;
  delay?: number
  ident: any
}

const Transition = (prop: Props) => {
  const { children, delay = 0, ident } = prop;
  const [clone, set_clone] = React.useState(React.cloneElement(children));
  const [className, set_className] = React.useState('');

   /**跳过第一次动画 */
  const is_first = React.useRef(true);

 

  React.useEffect(() => {
    if (is_first.current) {
      is_first.current = false;
      return;
    }
    setTimeout(() => {
      set_className('move_out');
      setTimeout(() => {
        const clone = React.cloneElement(children);
        set_clone(clone);
        set_className('move_in');
        setTimeout(() => {
          set_className('');
        }, 250 + delay);
      }, 250 + delay);
    }, delay);
    
    
  }, [ident]);
  return <span className={`transition_wrapper ${className}`}>{clone}</span>;
};

export default Transition;

import * as React from 'react';

interface Props
  extends React.PropsWithChildren<{
    className?: string;
    vertical: boolean;
  }> {}

const ScrollEdge = (prop: Props) => {
  const { className, children } = prop;
  const container = React.useRef<HTMLDivElement>();
  const [top_edge, set_top_edge] = React.useState(false);
  const [bottom_edge, set_bottom_edge] = React.useState(false);
  React.useEffect(() => {
    const { scrollWidth, clientWidth } = container.current;
    if (scrollWidth > clientWidth) set_bottom_edge(true);
    container.current.addEventListener('scroll', e => {
      const { scrollLeft } = e.target;
      // console.log(scrollLeft, clientWidth, scrollWidth)
      if (scrollLeft > 0) {
        set_top_edge(true);
      }
      if (scrollLeft === 0) {
        set_top_edge(false);
      }
      if (scrollLeft + clientWidth === scrollWidth) {
        set_bottom_edge(false);
      }
      if (scrollLeft + clientWidth < scrollWidth) {
        set_bottom_edge(true);
      }
    });
  }, []);
  return (
    <div
      className={`scroll-edge-container ${top_edge ?
        'top-edge' : ''} ${bottom_edge ? 'bottom-edge' : ''}`}
    >
      {/* {top_edge && <span>Top</span>} */}
      <div className={`scroll-container ${className}`} ref={container}>
        {children}
      </div>

      {/* {bottom_edge && <span>Bottom</span>} */}
    </div>
  );
};

export default ScrollEdge;

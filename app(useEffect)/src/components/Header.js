import { forwardRef } from "react";

const Header = forwardRef((props, ref) => {
  const { autoScroll } = props;
  return (
    <div className="header_top" ref={ref.headerRef}>
      <h1>Наши товары</h1>
      <button onClick={() => autoScroll(ref.footerRef)}>Scroll to Footer</button>
    </div>
  );
});

export default Header;

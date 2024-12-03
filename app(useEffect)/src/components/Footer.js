import { forwardRef } from "react";

const Footer = forwardRef((props, ref) => {
  const { autoScroll } = props;
  return (
    <footer className="footer_bottom" ref={ref.footerRef}>
      <button onClick={() => autoScroll(ref.headerRef)}>Scroll to Header</button>
    </footer>
  );
});

export default Footer;

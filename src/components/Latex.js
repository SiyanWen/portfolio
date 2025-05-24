import { useEffect } from "react";


const Latex = ({ children }) => {
  useEffect(() => {
    if (window.MathJax) {
      window.MathJax.typesetPromise();
    }
  }, [children]);

  return <span>{children}</span>;
};
export default Latex;
import { ArrowUp } from "lucide-react";
import "../styles/scrollTop.css";

export default function ScrollTop() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button className="scroll-top" onClick={scrollToTop}>
      <ArrowUp size={18} />
    </button>
  );
}

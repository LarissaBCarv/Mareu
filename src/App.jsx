import { useEffect } from "react";

import Header from "./sections/header";
import Hero from "./sections/hero";
import About from "./sections/about";
import Moments from "./sections/moments";
import Products from "./sections/products";
import Process from "./sections/process";
import Contact from "./sections/contact";
import Footer from "./sections/footer";

import "./styles/global.css";
import ScrollTop from "./components/scrollTop";

function App() {
  useEffect(() => {
    const reveals = document.querySelectorAll(
      ".reveal, .reveal-left, .reveal-right, .reveal-scale",
    );

    const revealOnScroll = () => {
      const windowHeight = window.innerHeight;

      reveals.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 120) {
          element.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", revealOnScroll);

    revealOnScroll();

    return () => {
      window.removeEventListener("scroll", revealOnScroll);
    };
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Process />
      <Moments />
      <Products />
      <Contact />
      <Footer />
      <ScrollTop />
    </>
  );
}

export default App;

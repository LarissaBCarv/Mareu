import Hero from "./sections/hero";
import Header from "./sections/header";
import About from "./sections/about";
import Process from "./sections/process";
import Products from "./sections/products";
import Moments from "./sections/moments";
import Contact from "./sections/contact";
import Footer from "./sections/footer";
import ScrollTop from "./components/scrollTop";

function App() {
  return (
    <>
      <Header />
      <ScrollTop />
      <Hero />
      <About />
      <Process />
      <Moments />
      <Products />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

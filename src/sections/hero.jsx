import "../styles/hero.css";

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <img src="/backHero.jpg" className="back-hero" alt="Vela Marêu" />

      <div className="hero-content">
        <span className="subtitle">
          Velas aromáticas
          <br className="mobile-break" /> artesanais
        </span>

        <h1>
          Serenidade
          <br />
          em cada chama
        </h1>

        <p className="description">
          Produzidas artesanalmente <br className="mobile-break" />
          para transformar pequenos <br className="mobile-break" />
          momentos em experiências
          <br className="mobile-break" />
          acolhedoras.
        </p>

        <a href="#produtos">Conheça nossas fragrâncias</a>
      </div>
    </section>
  );
}

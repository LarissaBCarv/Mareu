import "../styles/hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <img src="/backHero.png" className="back-hero" alt="Background Hero" />

      <div className="hero-content">
        <p className="subtitle">Velas aromáticas artesanais</p>

        <h1>
          Simplicidade
          <br />
          em cada chama
        </h1>

        <p className="description">
          Produzidas artesanalmente para transformar pequenos momentos em
          experiências acolhedoras.
        </p>

        <a href="#produtos">Conheça nossas fragrâncias</a>
      </div>
    </section>
  );
}

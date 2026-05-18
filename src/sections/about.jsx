import "../styles/about.css";

export default function About() {
  return (
    <section className="about" id="sobre">
      <div className="about-container">
        <div className="about-text">
          <span>Sobre a Marêu</span>
          <h2>Velas criadas para transformar a rotina em pausa.</h2>
          <p>
            A Marêu nasceu do desejo de criar momentos mais leves, acolhedores e
            cheios de presença. Cada vela une aroma, beleza e tranquilidade para
            transformar pequenos instantes em experiências especiais.
          </p>
        </div>

        <div className="about-image">
          <img src="/aboutPic.png" alt="Vela Marêu em ambiente acolhedor" />
        </div>
      </div>
    </section>
  );
}

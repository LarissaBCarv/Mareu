import "../styles/moments.css";

const images = [
  "/banho.png",
  "/livro.png",
  "/cafe.png",
  "/estudo.png",
  "/cama.png",
  "/meditacao.png",
];

export default function Moments() {
  return (
    <section className="moments" id="momentos">
      <div className="moments-container">
        <div className="moments-content">
          <span className="moments-subtitle">Momentos</span>

          <h2>
            Criadas para acompanhar momentos de calma, presença e aconchego.
          </h2>
        </div>

        <div className="moments-carousel">
          <div className="moments-track">
            {[...images, ...images].map((image, index) => (
              <div className="moment-card" key={index}>
                <img src={image} alt="Momento Marêu" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

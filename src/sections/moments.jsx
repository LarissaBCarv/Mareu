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
    <section className="moments reveal" id="momentos">
      <div className="moments-container">
        <div className="moments-content">
          <div className="moments-text">
            <span className="moments-subtitle">Momentos</span>

            <h2>
              Criadas para acompanhar momentos de calma, presença e aconchego.
            </h2>
          </div>

          <div className="moments-spotify-card">
            <span className="spotify-label">Trilha sonora</span>

            <h3>Marêu no Spotify</h3>

            <p>
              Uma seleção leve e calma para acompanhar momentos de respiro,
              presença e aconchego.
            </p>

            <a
              href="https://open.spotify.com/playlist/5ntI5LbdM1CZ6slb7UMWia?si=5e85beeb78514753&pt=a6d151b9ee6a584e549befdcb6685183"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ouvir no Spotify
            </a>
          </div>
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

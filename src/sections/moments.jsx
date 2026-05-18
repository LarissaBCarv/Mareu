import "../styles/moments.css";

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

        <div className="moments-grid">
          <div className="moment-card large">
            <img src="/moment-1.jpg" alt="Momento Marêu" />
          </div>

          <div className="moment-card">
            <img src="/moment-2.jpg" alt="Momento Marêu" />
          </div>

          <div className="moment-card">
            <img src="/moment-3.jpg" alt="Momento Marêu" />
          </div>
        </div>
      </div>
    </section>
  );
}

import "../styles/process.css";

export default function Process() {
  return (
    <section className="process reveal" id="processo">
      <div className="process-container">
        <div className="process-header reveal">
          <span>Processo artesanal</span>

          <h2>Do aroma ao acabamento, tudo é feito com cuidado.</h2>

          <p>
            Cada vela passa por um processo cuidadoso, respeitando o tempo de
            preparo, cura e finalização.
          </p>
        </div>

        <div className="process-steps">
          <div
            className="process-step reveal-scale"
            style={{ transitionDelay: "0.1s" }}
          >
            <img src="/aromas.png" alt="Escolha dos aromas" />

            <div className="process-step-content">
              <h3>Escolha dos aromas</h3>

              <p>
                Fragrâncias selecionadas para criar sensações leves, acolhedoras
                e marcantes.
              </p>
            </div>
          </div>

          <div
            className="process-step reveal-scale"
            style={{ transitionDelay: "0.3s" }}
          >
            <img src="/producao.png" alt="Produção manual" />

            <div className="process-step-content">
              <h3>Produção manual</h3>

              <p>
                A cera é preparada e colocada em cada recipiente com atenção aos
                detalhes.
              </p>
            </div>
          </div>

          <div
            className="process-step reveal-scale"
            style={{ transitionDelay: "0.5s" }}
          >
            <img src="/curadoria.png" alt="Cura da vela" />

            <div className="process-step-content">
              <h3>Cura da vela</h3>

              <p>
                As velas descansam pelo tempo necessário para preservar
                qualidade, textura e aroma.
              </p>
            </div>
          </div>

          <div
            className="process-step reveal-scale"
            style={{ transitionDelay: "0.7s" }}
          >
            <img src="/embalagem.png" alt="Embalagem final" />

            <div className="process-step-content">
              <h3>Embalagem final</h3>

              <p>
                Cada peça é finalizada e embalada com carinho antes de chegar
                até você.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

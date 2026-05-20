import "../styles/products.css";

export default function Products() {
  return (
    <section className="products" id="produtos">
      <div className="products-container">
        <div className="products-content">
          <span className="products-subtitle">Fragrâncias</span>

          <h2>
            Aromas pensados para transformar o ambiente e desacelerar a rotina.
          </h2>
        </div>

        <div className="products-grid">
          <div className="product-card">
            <img src="/brisa.png" alt="Vela Brisa" />

            <div className="product-info">
              <h3>Brisa</h3>

              <p>Aroma leve e delicado, ideal para momentos de calma.</p>

              <span>R$ 69,90</span>

              <button>Adicionar</button>
            </div>
          </div>

          <div className="product-card">
            <img src="/brisa.png" alt="Vela Aurora" />

            <div className="product-info">
              <h3>Aurora</h3>

              <p>Notas acolhedoras com toque amadeirado e sofisticado.</p>

              <span>R$ 69,90</span>

              <button>Adicionar</button>
            </div>
          </div>

          <div className="product-card">
            <img src="/brisa.png" alt="Vela Sereno" />

            <div className="product-info">
              <h3>Sereno</h3>

              <p>Fragrância suave criada para ambientes tranquilos.</p>

              <span>R$ 69,90</span>

              <button>Adicionar</button>
            </div>
          </div>
        </div>

        <div className="products-action">
          <button className="finish-order">Finalizar pedido</button>
        </div>
      </div>
    </section>
  );
}

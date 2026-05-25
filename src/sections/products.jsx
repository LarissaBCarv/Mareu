import { useState } from "react";
import "../styles/products.css";

const products = [
  {
    id: 1,
    name: "Brisa",
    description: "Aroma leve e delicado, ideal para momentos de calma.",
    price: 69.9,
    image: "/brisa.png",
    alt: "Vela Brisa",
  },
  {
    id: 2,
    name: "Aurora",
    description: "Notas acolhedoras com toque amadeirado e sofisticado.",
    price: 69.9,
    image: "/brisa.png",
    alt: "Vela Aurora",
  },
  {
    id: 3,
    name: "Sereno",
    description: "Fragrância suave criada para ambientes tranquilos.",
    price: 69.9,
    image: "/brisa.png",
    alt: "Vela Sereno",
  },
];

export default function Products() {
  const [cart, setCart] = useState([]);

  const whatsappNumber = "5512981115956";

  function formatPrice(value) {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  function addToCart(product) {
    const itemExists = cart.find((item) => item.id === product.id);

    if (itemExists) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );

      return;
    }

    setCart([...cart, { ...product, quantity: 1 }]);
  }

  function decreaseQuantity(productId) {
    setCart(
      cart
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  }

  function removeItem(productId) {
    setCart(cart.filter((item) => item.id !== productId));
  }

  function clearCart() {
    setCart([]);
  }

  function getTotalItems() {
    return cart.reduce((total, item) => total + item.quantity, 0);
  }

  function getTotalPrice() {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  function finishOrder() {
    if (cart.length === 0) {
      alert("Adicione pelo menos uma vela ao carrinho.");
      return;
    }

    const orderItems = cart
      .map(
        (item) =>
          `• ${item.quantity}x Vela ${item.name} - ${formatPrice(
            item.price * item.quantity,
          )}`,
      )
      .join("\n");

    const message = `Olá!
Essas foram as velas que selecionei no site da Marêu:

${orderItems}

Total do pedido: ${formatPrice(getTotalPrice())}

Gostaria de seguir com a encomenda. Obrigada!`;

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  }

  return (
    <section className="products reveal" id="produtos">
      <div className="products-container">
        <div className="products-content reveal">
          <span className="products-subtitle">Fragrâncias</span>

          <h2>
            Aromas pensados para transformar o ambiente e desacelerar a rotina.
          </h2>
        </div>

        <div className="products-grid">
          {products.map((product, index) => (
            <div
              className="product-card reveal-scale"
              style={{ transitionDelay: `${index * 0.2}s` }}
              key={product.id}
            >
              <img src={product.image} alt={product.alt} />

              <div className="product-info">
                <h3>{product.name}</h3>

                <p>{product.description}</p>

                <span>{formatPrice(product.price)}</span>

                <button onClick={() => addToCart(product)}>Adicionar</button>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-box reveal">
          <div className="cart-header">
            <div>
              <span>Carrinho</span>
              <h3>Seu pedido</h3>
            </div>

            {cart.length > 0 && (
              <button className="clear-cart" onClick={clearCart}>
                Limpar
              </button>
            )}
          </div>

          {cart.length === 0 ? (
            <p className="empty-cart">
              Seu carrinho ainda está vazio. Adicione uma fragrância para montar
              sua encomenda.
            </p>
          ) : (
            <>
              <div className="cart-list">
                {cart.map((item) => (
                  <div className="cart-item" key={item.id}>
                    <img src={item.image} alt={item.alt} />

                    <div className="cart-item-info">
                      <h4>{item.name}</h4>
                      <p>{formatPrice(item.price)}</p>

                      <button
                        className="remove-item"
                        onClick={() => removeItem(item.id)}
                      >
                        Remover
                      </button>
                    </div>

                    <div className="quantity-control">
                      <button onClick={() => decreaseQuantity(item.id)}>
                        -
                      </button>

                      <span>{item.quantity}</span>

                      <button onClick={() => addToCart(item)}>+</button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="cart-footer">
                <div>
                  <span>Total de itens</span>
                  <strong>{getTotalItems()}</strong>
                </div>

                <div>
                  <span>Total</span>
                  <strong>{formatPrice(getTotalPrice())}</strong>
                </div>
              </div>
            </>
          )}

          <button className="finish-order" onClick={finishOrder}>
            Finalizar pedido pelo WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}

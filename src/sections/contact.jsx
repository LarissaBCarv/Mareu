import "../styles/contact.css";

export default function Contact() {
  return (
    <section className="contact" id="contato">
      <div className="contact-container">
        <div className="contact-content">
          <span className="contact-subtitle">Contato</span>

          <h2>Entre em contato e acompanhe a Marêu pelas redes sociais.</h2>

          <p>
            Estamos sempre disponíveis para tirar dúvidas, receber pedidos e
            compartilhar novidades.
          </p>
        </div>

        <div className="contact-links">
          <a href="#">Instagram</a>
          <a href="#">WhatsApp</a>
          <a href="#">TikTok</a>
        </div>
      </div>
    </section>
  );
}

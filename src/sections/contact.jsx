import "../styles/contact.css";

export default function Contact() {
  return (
    <section className="contact reveal" id="contato">
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
          <a
            href="https://www.instagram.com/mareu.loja/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/instagram.png" alt="Instagram" />
          </a>
          <a
            href="https://wa.me/5512981115956"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/whatsapp.png" alt="WhatsApp" />
          </a>
        </div>
      </div>
    </section>
  );
}

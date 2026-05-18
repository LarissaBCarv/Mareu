import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <img
            src="/logoLettering.png"
            alt="Logo Marêu"
            className="footer-logo"
          />

          <div className="footer-links">
            <a href="#sobre">Sobre</a>
            <a href="#processo">Processo</a>
            <a href="#produtos">Produtos</a>
            <a href="#contato">Contato</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Marêu. Todos os direitos reservados.</p>

          <span>Desenvolvido por Larissa Borges</span>
        </div>
      </div>
    </footer>
  );
}

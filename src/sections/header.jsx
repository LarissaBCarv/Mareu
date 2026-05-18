import "../styles/header.css";

export default function Header() {
  return (
    <header className="nav-bar">
      <nav>
        <img src="/logoM.png" className="logo-nav" alt="Logo" />
        <div className="links">
          <a href="#sobre">Sobre</a>
          <a href="#processo">Processo Artesanal</a>
          <a href="#momentos">Momentos</a>
          <a href="#produtos">Produtos</a>
          <a href="#contato">Contato</a>
        </div>
      </nav>
    </header>
  );
}

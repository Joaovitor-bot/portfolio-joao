import "./App.css";

function App() {
  return (
    <main className="portfolio">
      <header className="header">
        <a href="#" className="logo">
          joaorodrigues.dev
        </a>

        <nav className="menu">
          <a href="#home">Home</a>
          <a href="#sobre">Sobre</a>
          <a href="#projetos">Projetos</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      <section id="home" className="hero">
        <p className="tag">Desenvolvedor Front-end</p>

        <h1>
          Olá, eu sou <span>João Rodrigues</span>
        </h1>

        <h2>Frontend Developer</h2>

        <p className="description">
          Crio interfaces modernas, responsivas e funcionais, com foco em
          desenvolvimento web, boas práticas e experiência do usuário.
        </p>

        <div className="buttons">
          <a href="#projetos" className="btn primary">
            Ver projetos
          </a>

          <a href="#contato" className="btn secondary">
            Entrar em contato
          </a>
        </div>
      </section>
    </main>
  );
}

export default App;
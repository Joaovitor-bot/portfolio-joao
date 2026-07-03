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

            <section id="sobre" className="about">
        <div className="section-header">
          <p className="section-tag">Sobre mim</p>
          <h2>Conheça um pouco da minha trajetória</h2>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p>
              Sou João Rodrigues, estudante de Análise e Desenvolvimento de
              Sistemas e desenvolvedor front-end em formação. Tenho interesse
              em criar interfaces modernas, responsivas e funcionais,
              transformando ideias em experiências digitais bem construídas.
            </p>

            <p>
              Tenho conhecimentos em HTML, CSS, JavaScript, React, Angular,
              Git, GitHub e design responsivo. Também possuo experiência com
              suporte técnico, instalação de softwares e soluções em TI.
            </p>
          </div>

          <div className="about-card">
            <h3>Atualmente focado em:</h3>

            <ul>
              <li>Desenvolvimento Front-end</li>
              <li>React e Angular</li>
              <li>TypeScript e JavaScript</li>
              <li>Interfaces responsivas</li>
            </ul>
          </div>
        </div>
      </section>
      
    </main>
  );
}

export default App;
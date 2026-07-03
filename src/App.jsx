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
          <a href="#skills">Tecnologias</a>
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

      <section id="skills" className="skills">
        <div className="section-header">
          <p className="section-tag">Skills & Technologies</p>
          <h2>Tecnologias que utilizo nos meus projetos</h2>
        </div>

        <div className="skills-grid">
          <div className="skill-card">
            <h3>HTML5</h3>
            <p>Estruturação semântica de páginas web.</p>
          </div>

          <div className="skill-card">
            <h3>CSS3</h3>
            <p>Estilização, responsividade e layouts modernos.</p>
          </div>

          <div className="skill-card">
            <h3>JavaScript</h3>
            <p>Criação de interações e funcionalidades para interfaces.</p>
          </div>

          <div className="skill-card">
            <h3>TypeScript</h3>
            <p>Desenvolvimento com tipagem para códigos mais seguros.</p>
          </div>

          <div className="skill-card">
            <h3>React</h3>
            <p>Construção de interfaces modernas baseadas em componentes.</p>
          </div>

          <div className="skill-card">
            <h3>Angular</h3>
            <p>Desenvolvimento front-end com estrutura organizada.</p>
          </div>

          <div className="skill-card">
            <h3>Git & GitHub</h3>
            <p>Versionamento de código e publicação de projetos.</p>
          </div>

          <div className="skill-card">
            <h3>Vercel</h3>
            <p>Deploy de aplicações web de forma rápida e profissional.</p>
          </div>
        </div>
      </section>

            <section className="experience">
        <div className="section-header">
          <p className="section-tag">Experiência</p>
          <h2>Minha trajetória profissional</h2>
        </div>

        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-year">2024</div>

            <div className="timeline-card">
              <h3>Suporte Técnico</h3>
              <span>Prefeitura de Jaboatão dos Guararapes</span>
              <p>
                Atuação com suporte técnico, instalação de softwares,
                atendimento a usuários e apoio em soluções de tecnologia da
                informação.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-year">2024 - 2026</div>

            <div className="timeline-card">
              <h3>Auxiliar de Produção</h3>
              <span>Stellantis</span>
              <p>
                Experiência profissional em ambiente corporativo, desenvolvendo
                responsabilidade, organização, trabalho em equipe e disciplina
                na rotina operacional.
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

export default App;
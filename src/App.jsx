import { useEffect } from "react";
import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram, FaHtml5, FaCss3Alt, FaJs, FaReact, FaAngular, FaGitAlt, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiTypescript, SiVercel, SiDocker } from "react-icons/si";
import "./App.css";

function App() {
  useEffect(() => {
  const elements = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  elements.forEach((element) => observer.observe(element));

  return () => {
    elements.forEach((element) => observer.unobserve(element));
  };
}, []);

  return (
    <main className="portfolio ">
      <header className="header">
        <a href="https://github.com/Joaovitor-bot" className="logo">
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

      <section id="home" className="hero reveal">
        <div className="hero-content">
          <div className="hero-text">
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
          </div>

          <div className="hero-photo">
            <img src="/images/foto-joao.jpg" alt="Foto de João Rodrigues" />
          </div>

        </div>

      </section>

             <section id="sobre" className="about reveal">
                <div className="section-header">
                  <p className="section-tag">Sobre mim</p>
                  <h2>Conheça um pouco da minha trajetória</h2>
                </div>

                <div className="about-content">
                  <div className="about-text">
                    <p>
                      Olá! Sou João Rodrigues, estudante de Análise e Desenvolvimento de Sistemas 
                      pelo Embarque Digital e desenvolvedor front-end em formação.
                      Sou apaixonado por tecnologia e por criar interfaces modernas, responsivas e intuitivas.
                    </p>

                    <p>
                      Tenho conhecimentos em HTML, CSS, JavaScript, React, Angular, Git, GitHub, UX/UI e Design Responsivo,
                       além de familiaridade com Inteligência Artificial aplicada ao desenvolvimento.
                    </p>

                    <p>
                      Entre minhas principais habilidades estão comunicação, trabalho em equipe,
                      resolução de problemas, criatividade, organização, adaptabilidade e aprendizado contínuo.
                      Também gosto de participar de hackathons e eventos de tecnologia para evoluir constantemente.
                    </p>

                    <p>
                      Fora da programação, sou apaixonado por filmes e música, que são grandes fontes de inspiração
                      para minha criatividade e para a forma como desenvolvo meus projetos.
                    </p>

                  </div>

                  <div className="about-visual">
                    <img
                      src="/images/orb-video.gif"
                      alt="Animação decorativa"
                      className="orb-gif"
                    />
                  </div>
                </div>
             </section>

      <section id="skills" className="skills reveal">
        <div className="section-header">
          <p className="section-tag">Skills & Technologies</p>
          <h2>Tecnologias que utilizo nos meus projetos</h2>
        </div>

        <div className="skills-grid">
          <div className="skill-card">
            <FaHtml5 className="skill-icon" />
            <h3>HTML5</h3>
            <p>Estruturação semântica de páginas web.</p>
          </div>

          <div className="skill-card">
            <FaCss3Alt className="skill-icon" />
            <h3>CSS3</h3>
            <p>Estilização, responsividade e layouts modernos.</p>
          </div>

          <div className="skill-card">
            <FaJs className="skill-icon" />
            <h3>JavaScript</h3>
            <p>Criação de interações e funcionalidades para interfaces.</p>
          </div>

          <div className="skill-card">
            <SiTypescript className="skill-icon" />
            <h3>TypeScript</h3>
            <p>Desenvolvimento com tipagem para códigos mais seguros.</p>
          </div>

          <div className="skill-card">
            <FaReact className="skill-icon" />
            <h3>React</h3>
            <p>Construção de interfaces modernas baseadas em componentes.</p>
          </div>

          <div className="skill-card">
            <FaAngular className="skill-icon" />
            <h3>Angular</h3>
            <p>Desenvolvimento front-end com estrutura organizada.</p>
          </div>

          <div className="skill-card">
            <FaNodeJs className="skill-icon" />
            <h3>Node.js</h3>
            <p>Criação de aplicações, APIs e lógica no lado do servidor.</p>
          </div>

          <div className="skill-card">
            <FaDatabase className="skill-icon" />
            <h3>SQL</h3>
            <p>Conhecimento em banco de dados, consultas e organização de informações.</p>
          </div>

          <div className="skill-card">
            <SiDocker className="skill-icon" />
            <h3>Docker</h3>
            <p>Uso de containers para organizar e padronizar ambientes.</p>
          </div>

          <div className="skill-card">
            <FaGitAlt className="skill-icon" />
            <h3>Git</h3>
            <p>Versionamento de código e controle de alterações.</p>
          </div>

          <div className="skill-card">
            <FaGithub className="skill-icon" />
            <h3>GitHub</h3>
            <p>Publicação, organização e colaboração em projetos.</p>
          </div>

          <div className="skill-card">
            <SiVercel className="skill-icon" />
            <h3>Vercel</h3>
            <p>Deploy de aplicações web de forma rápida e profissional.</p>
          </div>
        </div>
      </section>

      <section className="experience reveal">
        <div className="section-header">
          <p className="section-tag">Experiência</p>
          <h2>Minha trajetória profissional</h2>
        </div>

        <div className="timeline">      
          <div className="timeline-item">
            <div className="timeline-year">2024 - no momento </div>

            <div className="timeline-card">
              <h3>Residência Onboard - Porto Digital</h3>
              <span>Porto Digital</span>
              <p>
                Atividades extracurricular promovida pelo Porto Digital,
                por meio do programa Embarque Digital, na qual os estudantes desenvolvem propostas de solução
                para desafios reais apresentados por empresas parceiras.
              </p>
            </div>
          </div>
        </div>
      </section>

            <section id="projetos" className="projects reveal">
        <div className="section-header">
          <p className="section-tag">Projetos</p>
          <h2>Alguns projetos que desenvolvi</h2>
        </div>

        <div className="projects-grid">
          <article className="project-card">
              <div className="project-image">
                <span>TD</span>
              </div>

              <div className="project-content">
                <h3>Total Drama RPG Blog</h3>

                <p>
                  Blog desenvolvido para publicação de quadrinhos e conteúdos de uma
                  temporada de Total Drama RPG. O projeto foi integrado ao Sanity CMS para
                  que o cliente pudesse postar sem depender de programação, além de usar
                  Firebase para login com Google, comentários e votação dos usuários.
                </p>

                <div className="project-tags">
                  <span>React</span>
                  <span>Vite</span>
                  <span>Sanity CMS</span>
                  <span>Firebase</span>
                  <span>Google Auth</span>
                </div>

                <div className="project-actions">
                  <a
                    href="https://github.com/Joaovitor-bot/total-drama-rpg-blog.git"
                    className="project-btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ver código
                  </a>
                </div>
              </div>
            </article>

          <article className="project-card">
              <div className="project-image">
                <span>EV</span>
              </div>

              <div className="project-content">
                <h3>Evofit</h3>

                <p>
                  Plataforma de gestão para personal trainers, desenvolvida com
                  Ionic/Angular no front-end e Node.js/Express no back-end. O sistema
                  permite gerenciar alunos, treinos, agendamentos, histórico de
                  treinamentos e dados do personal, utilizando API REST e banco SQLite.
                </p>

                <div className="project-tags">
                  <span>Ionic</span>
                  <span>Angular</span>
                  <span>Node.js</span>
                  <span>Express</span>
                  <span>SQLite</span>
                  <span>API REST</span>
                </div>

                <div className="project-actions">
                  <a
                    href="https://github.com/Joaovitor-bot/evofit.git"
                    className="project-btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ver código
                  </a>

                </div>
              </div>
            </article>

         <article className="project-card">
            <div className="project-image">
              <span>MT</span>
            </div>

            <div className="project-content">
              <h3>MobileTicketsIonic</h3>

              <p>
                Sistema mobile para controle de atendimento em filas de laboratórios
                médicos, desenvolvido com Ionic, Angular, ngModules e Capacitor. A
                aplicação simula emissão de senhas, chamada por prioridade, controle de
                guichê, painel de últimas chamadas e relatórios de atendimento.
              </p>

              <div className="project-tags">
                <span>Ionic</span>
                <span>Angular</span>
                <span>Capacitor</span>
                <span>TypeScript</span>
                <span>SCSS</span>
                <span>Ionicons</span>
              </div>

              <div className="project-actions">
                <a
                  href="https://github.com/Joaovitor-bot/MobileTicketsIonic.git"
                  className="project-btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver código
                </a>

                
              </div>
            </div>
          </article>

          <article className="project-card">
              <div className="project-image">
                <span>HZ</span>
              </div>

              <div className="project-content">
                <h3>Monitoramento de Ecobarreiras</h3>

                <p>
                  Projeto vencedor do 1º lugar no Hackazero, desenvolvido em equipe com foco
                  em sustentabilidade e meio ambiente. A solução propõe o monitoramento de
                  ecobarreiras para melhorar a retenção de resíduos sólidos em rios,
                  incentivando ações de preservação, impacto positivo e engajamento da
                  comunidade.
                </p>

                <div className="project-tags">
                  <span>Hackazero</span>
                  <span>1º Lugar</span>
                  <span>Sustentabilidade</span>
                  <span>Meio Ambiente</span>
                  <span>Inovação</span>
                </div>

                <div className="project-actions">
                  <a
                    href="https://canva.link/y9mdjpe731p5ooe"
                    className="project-btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Slide
                  </a>

                  <a href="https://www.linkedin.com/posts/jo%C3%A3o-rodrigues-631a622b7_hackazero-tecnologia-inovaaexaeto-activity-7268329688471666688-GEno?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEwnHwUBJiR2a0eMpbeGaVPqeexJnTsRJcE" className="project-icon">
                    Publicação
                  </a>
                </div>
              </div>
            </article>
        </div>
      </section>

         <section id="contato" className="contact reveal">
          <div className="section-header">
            <p className="section-tag">Contato</p>
            <h2>Vamos conversar?</h2>
          </div>

          <div className="contact-box">
            <p>
              Estou aberto a oportunidades na área de tecnologia, projetos front-end,
              estágios e conexões profissionais.
            </p>

            <div className="social-links">
              <a
                href="https://github.com/Joaovitor-bot"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/jo%C3%A3o-rodrigues-631a622b7/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://wa.me/5581992872652?text=Ol%C3%A1%20Jo%C3%A3o%2C%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20com%20voc%C3%AA."
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>

              <a
                href="https://www.instagram.com/jaoskyrox/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </section>

        <footer className="footer">
          <p>
            © 2026 João Rodrigues. Todos os direitos reservados.
          </p>

          <span>
            Desenvolvido com React, Vite e muito café.
          </span>
        </footer>

    </main>
  );
}

export default App;
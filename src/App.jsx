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
                      Sou João Rodrigues, estudante de Análise e Desenvolvimento de
                      Sistemas e desenvolvedor front-end em formação. Tenho interesse em
                      criar interfaces modernas, responsivas e funcionais, transformando
                      ideias em experiências digitais bem construídas.
                    </p>

                    <p>
                      Tenho conhecimentos em HTML, CSS, JavaScript, React, Angular, Git,
                      GitHub e design responsivo. Também possuo experiência com suporte
                      técnico, instalação de softwares e soluções em TI.
                    </p>

                    <p>
                      Além da tecnologia, gosto de explorar criatividade, música e novas
                      referências visuais que me ajudam a desenvolver projetos com mais
                      identidade e personalidade.
                    </p>
                  </div>

                  <div className="about-visual">
                    <video autoPlay muted loop playsInline>
                      <source src="/videos/orb-video.mp4" type="video/mp4" />
                    </video>
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

            <section id="projetos" className="projects reveal">
        <div className="section-header">
          <p className="section-tag">Projetos</p>
          <h2>Alguns projetos que desenvolvi</h2>
        </div>

        <div className="projects-grid">
          <article className="project-card">
            <div className="project-image">
              <span>FM</span>
            </div>

            <div className="project-content">
              <h3>FitMangue</h3>
              <p>
                Aplicação criada para incentivar hábitos saudáveis, combater o
                sedentarismo e apoiar pessoas na busca por mais qualidade de vida.
              </p>

              <div className="project-tags">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
              </div>

              <div className="project-actions">
                <a href="#" className="project-btn">Ver detalhes</a>
                <a href="#" className="project-icon">GitHub</a>
              </div>
            </div>
          </article>

          <article className="project-card">
            <div className="project-image">
              <span>PI</span>
            </div>

            <div className="project-content">
              <h3>PET ID</h3>
              <p>
                Projeto voltado para auxiliar tutores no gerenciamento de
                informações importantes dos seus pets, como saúde, alimentação
                e vacinas.
              </p>

              <div className="project-tags">
                <span>HTML</span>
                <span>CSS</span>
                <span>UX/UI</span>
              </div>

              <div className="project-actions">
                <a href="#" className="project-btn">Ver detalhes</a>
                <a href="#" className="project-icon">GitHub</a>
              </div>
            </div>
          </article>

          <article className="project-card">
            <div className="project-image">
              <span>LR</span>
            </div>

            <div className="project-content">
              <h3>LogReverse</h3>
              <p>
                Projeto com foco em sustentabilidade, propondo pontos de coleta
                para resíduos orgânicos e incentivo ao descarte consciente.
              </p>

              <div className="project-tags">
                <span>HTML</span>
                <span>CSS</span>
                <span>Sustentabilidade</span>
              </div>

              <div className="project-actions">
                <a href="#" className="project-btn">Ver detalhes</a>
                <a href="#" className="project-icon">GitHub</a>
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
                href="https://wa.me/5581992872652"
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

    </main>
  );
}

export default App;
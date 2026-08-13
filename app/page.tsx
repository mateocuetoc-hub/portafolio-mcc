const projects = [
  {
    n: "01",
    type: "Web para pyme",
    name: "La Misión",
    short: "MISIÓN",
    copy: "Landing comercial para una pyme de San Felipe, enfocada en precios, reparto y ubicación.",
    tags: ["HTML", "CSS", "JavaScript"],
    url: "https://github.com/mateocuetoc-hub/la-mision-agua",
    art: "water",
  },
  {
    n: "02",
    type: "E-commerce circular",
    name: "BeaGi",
    short: "BeaGi",
    copy: "Tienda responsiva de moda circular con catálogo, experiencia móvil y administración.",
    tags: ["Frontend", "Responsive", "REST API"],
    url: "https://github.com/mateocuetoc-hub/BeaGi-ModaCircular",
    art: "fashion",
  },
  {
    n: "03",
    type: "Tecnología educativa",
    name: "SonicFonoKids",
    short: "FONO KIDS",
    copy: "Experiencia jugable para SRB2 con actividades infantiles de apoyo fonoaudiológico.",
    tags: ["Lua", "SRB2", "Game design"],
    url: "https://github.com/mateocuetoc-hub/SonicFonoKids",
    art: "game",
  },
  {
    n: "04",
    type: "API & arquitectura",
    name: "BeaGi Backend",
    short: "API / 21",
    copy: "API REST para productos, categorías, pedidos, stock e imágenes, con validaciones y pruebas.",
    tags: ["Java 21", "Spring Boot", "PostgreSQL"],
    url: "https://github.com/mateocuetoc-hub/beagi-backend",
    art: "backend",
  },
  {
    n: "05",
    type: "Landing comercial",
    name: "MCC HardwareLab",
    short: "MCC LAB",
    copy: "Sitio de venta, armado y asesoría de computadores para captar clientes locales.",
    tags: ["HTML", "CSS", "Diseño web"],
    url: "https://github.com/mateocuetoc-hub/mcc-hardwarelab",
    art: "hardware",
  },
  {
    n: "06",
    type: "Automatización",
    name: "Reporte de ventas",
    short: "DATA / XLS",
    copy: "Herramienta que procesa información comercial y genera reportes de Excel automáticamente.",
    tags: ["Python", "Pandas", "OpenPyXL"],
    url: "https://github.com/mateocuetoc-hub/reporte-ventas-python",
    art: "report",
  },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 18 18" aria-hidden="true">
      <path d="M5 13 13 5M6 5h7v7" />
    </svg>
  );
}

function ProjectVisual({ project, compact = false }: { project: (typeof projects)[number]; compact?: boolean }) {
  return (
    <div className={`projectVisual art--${project.art}${compact ? " isCompact" : ""}`} aria-hidden="true">
      <span className="visualNumber">{project.n}</span>
      <div className="miniWindow"><i /><i /><i /></div>
      <strong>{project.short}</strong>
      <small>{project.type}</small>
      <span className="visualShape" />
    </div>
  );
}

function MarqueeSet({ items }: { items: typeof projects }) {
  return (
    <div className="marqueeSet">
      {items.map((project) => (
        <div className="reelItem" key={project.name}>
          <ProjectVisual project={project} compact />
        </div>
      ))}
    </div>
  );
}

function HomeIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m4 10 8-6 8 6v9a1 1 0 0 1-1 1h-5v-6h-4v6H5a1 1 0 0 1-1-1z" /></svg>;
}

function GridIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="4" width="6" height="6" rx="1" /><rect x="14" y="4" width="6" height="6" rx="1" /><rect x="4" y="14" width="6" height="6" rx="1" /><rect x="14" y="14" width="6" height="6" rx="1" /></svg>;
}

function PersonIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="4" /><path d="M4.5 20c.8-4 3.3-6 7.5-6s6.7 2 7.5 6" /></svg>;
}

function GithubIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3a9 9 0 0 0-2.85 17.54c.45.08.62-.2.62-.44v-1.72c-2.52.55-3.05-1.07-3.05-1.07-.41-1.05-1-1.33-1-1.33-.82-.56.06-.55.06-.55.91.06 1.39.93 1.39.93.8 1.39 2.12.99 2.64.76.08-.58.31-.99.57-1.21-2.01-.23-4.13-1-4.13-4.45 0-.98.35-1.79.93-2.42-.09-.23-.4-1.15.09-2.39 0 0 .76-.24 2.48.92A8.6 8.6 0 0 1 12 8.27a8.6 8.6 0 0 1 2.26.3c1.72-1.16 2.48-.92 2.48-.92.49 1.24.18 2.16.09 2.39.58.63.93 1.44.93 2.42 0 3.46-2.12 4.22-4.14 4.45.33.28.62.83.62 1.68v2.51c0 .24.17.52.62.44A9 9 0 0 0 12 3Z" /></svg>;
}

export default function Home() {
  const firstRow = projects.slice(0, 4);
  const secondRow = [projects[4], projects[5], projects[0], projects[2]];

  return (
    <main>
      <header className="topbar shell">
        <a className="identity" href="#inicio" aria-label="Inicio del portafolio de Mateo Cueto">
          <span className="avatar">MC</span>
          <span><strong>Mateo Cueto</strong><small>Ingeniería Informática</small></span>
        </a>
        <a className="status" href="https://github.com/mateocuetoc-hub" target="_blank" rel="noreferrer">
          <i /> Disponible para colaborar
        </a>
      </header>

      <section className="hero shell" id="inicio">
        <p className="kicker">Hola, soy Mateo <span aria-hidden="true">✦</span></p>
        <h1>Construyo productos digitales<br />para ideas <em>reales.</em></h1>
        <p className="heroCopy">Estudiante de Ingeniería Informática en San Felipe. Diseño y desarrollo experiencias web, software y automatizaciones con una mirada simple y funcional.</p>
        <div className="heroActions">
          <a className="primaryButton" href="#proyectos">Explorar proyectos <span>↓</span></a>
          <a className="quietLink" href="https://github.com/mateocuetoc-hub" target="_blank" rel="noreferrer">Mi GitHub <ArrowIcon /></a>
        </div>
      </section>

      <section className="projectReel" aria-label="Muestra visual de proyectos">
        <div className="marquee marqueeForward" aria-hidden="true">
          <div className="marqueeTrack"><MarqueeSet items={firstRow} /><MarqueeSet items={firstRow} /></div>
        </div>
        <div className="marquee marqueeReverse" aria-hidden="true">
          <div className="marqueeTrack"><MarqueeSet items={secondRow} /><MarqueeSet items={secondRow} /></div>
        </div>
      </section>

      <section className="work shell" id="proyectos">
        <div className="sectionIntro">
          <div><p className="sectionLabel">Trabajo seleccionado</p><h2>Proyectos que viven<br />más allá del código.</h2></div>
          <p>Una selección de sitios, aplicaciones y experimentos creados para resolver necesidades concretas.</p>
        </div>

        <div className="projectGrid">
          {projects.map((project) => (
            <article className="projectCard" key={project.name}>
              <a href={project.url} target="_blank" rel="noreferrer" aria-label={`Ver ${project.name} en GitHub`}>
                <ProjectVisual project={project} />
                <div className="projectDetails">
                  <div className="projectTitle"><div><p>{project.type}</p><h3>{project.name}</h3></div><span className="arrowButton"><ArrowIcon /></span></div>
                  <p className="projectCopy">{project.copy}</p>
                  <ul>{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
                </div>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="about shell" id="perfil">
        <div className="aboutCard">
          <p className="sectionLabel">Un poco sobre mí</p>
          <div className="aboutGrid">
            <h2>Curioso por naturaleza.<br />Constructor por elección.</h2>
            <div className="aboutCopy">
              <p>Estoy cursando tercer año de Ingeniería Informática en la PUCV. Me interesa convertir problemas cotidianos en productos claros, rápidos y agradables de usar.</p>
              <div className="skills"><span>Desarrollo web</span><span>APIs REST</span><span>Automatización</span><span>Diseño responsivo</span></div>
              <a href="https://github.com/mateocuetoc-hub" target="_blank" rel="noreferrer">Conversemos por GitHub <ArrowIcon /></a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer shell">
        <p>Mateo Cueto · Portafolio 2026</p>
        <p>Hecho con curiosidad desde San Felipe, Chile.</p>
      </footer>

      <nav className="dock" aria-label="Navegación rápida">
        <a href="#inicio"><HomeIcon /><span>Inicio</span></a>
        <a href="#proyectos"><GridIcon /><span>Proyectos</span></a>
        <a href="#perfil"><PersonIcon /><span>Sobre mí</span></a>
        <i className="dockDivider" />
        <a href="https://github.com/mateocuetoc-hub" target="_blank" rel="noreferrer"><GithubIcon /><span>GitHub</span></a>
      </nav>
    </main>
  );
}

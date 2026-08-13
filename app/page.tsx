const featured = [
  {
    n: "01", type: "Web para pyme", name: "La Misión", sub: "Agua purificada",
    copy: "Landing comercial para una pyme de San Felipe, enfocada en presentar sus precios, reparto y ubicación de manera clara.",
    tags: ["HTML", "CSS", "JavaScript"], url: "https://github.com/mateocuetoc-hub/la-mision-agua", art: "water",
  },
  {
    n: "02", type: "E-commerce circular", name: "BeaGi", sub: "Moda Circular",
    copy: "Tienda responsiva de moda circular con catálogo de abrigos, experiencia móvil y panel de administración conectado a una API propia.",
    tags: ["Frontend", "Responsive", "REST API"], url: "https://github.com/mateocuetoc-hub/BeaGi-ModaCircular", art: "fashion",
  },
  {
    n: "03", type: "Tecnología educativa", name: "SonicFonoKids", sub: "Mod experimental",
    copy: "Experiencia jugable para SRB2 con actividades infantiles de apoyo fonoaudiológico, mapas y lógica propia.",
    tags: ["Lua", "SRB2", "Game design"], url: "https://github.com/mateocuetoc-hub/SonicFonoKids", art: "game",
  },
];

const more = [
  {
    n: "04", name: "BeaGi Backend", type: "API & arquitectura",
    copy: "API REST para productos, categorías, pedidos, stock e imágenes, con validaciones y pruebas automatizadas.",
    tags: "Java 21 · Spring Boot · PostgreSQL",
    url: "https://github.com/mateocuetoc-hub/beagi-backend",
  },
  {
    n: "05", name: "MCC HardwareLab", type: "Landing comercial",
    copy: "Sitio de servicios para venta, armado y asesoría de computadores, pensado para captar clientes locales.",
    tags: "HTML · CSS · Diseño web",
    url: "https://github.com/mateocuetoc-hub/mcc-hardwarelab",
  },
  {
    n: "06", name: "Reporte de ventas", type: "Automatización",
    copy: "Herramienta que procesa información de ventas y genera reportes de Excel de forma automática.",
    tags: "Python · Pandas · OpenPyXL",
    url: "https://github.com/mateocuetoc-hub/reporte-ventas-python",
  },
];

function ProjectArt({ kind }: { kind: string }) {
  if (kind === "water") return <div className="waterArt"><small>LA</small><strong>MISIÓN</strong><i /></div>;
  if (kind === "fashion") return <div className="fashionArt"><strong>BeaGi</strong><small>Moda circular</small><b>↻</b></div>;
  return <div className="gameArt"><small>SONIC</small><strong>FONO<br />KIDS</strong><i>●</i><b>✦</b></div>;
}

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="Navegación principal">
        <a className="brand" href="#inicio" aria-label="Portafolio MCC, inicio">MCC<span>®</span></a>
        <div className="navLinks"><a href="#proyectos">Proyectos</a><a href="#perfil">Sobre mí</a><a href="#contacto">Contacto</a></div>
        <a className="textLink" href="https://github.com/mateocuetoc-hub" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
      </nav>

      <header className="hero shell" id="inicio">
        <div className="heroMeta"><p>Mateo Cueto</p><p>Ingeniería Informática</p><p>San Felipe, Chile</p></div>
        <div className="heroMark" aria-hidden="true"><span /><i>MCC / 26</i></div>
        <div className="heroTitle">
          <p className="eyebrow">Portafolio seleccionado · 2026</p>
          <h1>Ideas que se vuelven <span>productos digitales.</span></h1>
        </div>
        <div className="heroBottom">
          <p>Diseño y desarrollo soluciones web para negocios, educación y automatización. Cada proyecto parte de un problema real y termina en algo que se puede usar.</p>
          <a className="roundLink" href="#proyectos"><span>Ver<br />proyectos</span><b aria-hidden="true">↓</b></a>
        </div>
      </header>

      <section className="projectsSection" id="proyectos">
        <div className="shell sectionHeading"><div><p className="eyebrow">Trabajo reciente</p><h2>Proyectos con propósito.</h2></div><p>06 proyectos</p></div>
        <div className="shell featuredGrid">
          {featured.map((project) => (
            <article className="projectCard" key={project.name}>
              <div className={`projectVisual ${project.art}`} aria-hidden="true"><span className="visualNumber">{project.n}</span><ProjectArt kind={project.art} /></div>
              <div className="projectInfo">
                <p className="projectType">{project.type}</p><h3>{project.name}</h3><p className="projectSub">{project.sub}</p><p className="projectCopy">{project.copy}</p>
                <div className="projectFooter"><ul>{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul><a href={project.url} target="_blank" rel="noreferrer" aria-label={`Ver ${project.name} en GitHub`}>Ver <b aria-hidden="true">↗</b></a></div>
              </div>
            </article>
          ))}
        </div>

        <div className="shell moreProjects">
          <p className="eyebrow">Más proyectos</p>
          {more.map((project) => (
            <a className="projectRow" href={project.url} target="_blank" rel="noreferrer" key={project.name} aria-label={`Ver ${project.name} en GitHub`}>
              <span className="rowNumber">{project.n}</span><div><p>{project.type}</p><h3>{project.name}</h3></div><p className="rowCopy">{project.copy}</p><p className="rowTags">{project.tags}</p><b aria-hidden="true">↗</b>
            </a>
          ))}
        </div>
      </section>

      <section className="profile shell" id="perfil">
        <p className="eyebrow">Perfil</p>
        <div className="profileGrid">
          <h2>Construir, probar,<br />aprender y mejorar.</h2>
          <div className="profileCopy"><p>Estudiante de tercer año de Ingeniería Informática en la PUCV, enfocado en crear experiencias web claras y soluciones útiles para personas y pequeños negocios.</p><div className="skills"><span>Desarrollo web</span><span>APIs REST</span><span>Automatización</span><span>Diseño responsivo</span></div></div>
        </div>
      </section>

      <footer id="contacto">
        <div className="shell footerTop"><p className="eyebrow">¿Tienes una idea?</p><h2>Hagámosla<br /><span>real.</span></h2><a className="contactCircle" href="https://github.com/mateocuetoc-hub" target="_blank" rel="noreferrer">Conversemos <b aria-hidden="true">↗</b></a></div>
        <div className="shell footerBottom"><p>Mateo Cueto · Portafolio 2026</p><a href="#inicio">Volver arriba ↑</a></div>
      </footer>
    </main>
  );
}

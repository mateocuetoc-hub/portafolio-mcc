import styles from "./page.module.css";

export default function SonicFonoKidsPage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <nav className={styles.navigation}>
          <a href="../../#proyectos">← Volver al portafolio</a>

          <a
            href="https://github.com/mateocuetoc-hub/SonicFonoKids"
            target="_blank"
            rel="noreferrer"
          >
            Ver código en GitHub ↗
          </a>
        </nav>

        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>Resumen del proyecto</p>

            <h1>
              Sonic
              <br />
              FonoKids
            </h1>

            <p className={styles.lead}>
              Experiencia jugable para SRB2 con actividades infantiles
              relacionadas con la audición, el habla y el lenguaje.
            </p>

            <ul className={styles.tags}>
              <li>Lua</li>
              <li>SRB2</li>
              <li>Game design</li>
            </ul>
          </div>

          <figure className={styles.cover}>
            <img
              src="../../projects/sonic-fonokids-audicion.png"
              alt="Portada del proyecto SonicFonoKids"
            />
          </figure>
        </section>

        <section className={styles.summary}>
          <div className={styles.summaryHeading}>
            <p className={styles.eyebrow}>Sobre SonicFonoKids</p>

            <h2>Aprender y practicar mediante una experiencia interactiva.</h2>

            <p>
              SonicFonoKids explora cómo combinar programación, diseño de juego
              y actividades de apoyo fonoaudiológico dentro del entorno de
              Sonic Robo Blast 2.
            </p>
          </div>

          <div className={styles.informationGrid}>
            <article>
              <span>01</span>
              <h3>Objetivo</h3>
              <p>
                Integrar actividades relacionadas con audición, habla y
                lenguaje dentro de una experiencia lúdica.
              </p>
            </article>

            <article>
              <span>02</span>
              <h3>Desarrollo</h3>
              <p>
                Construido con Lua sobre SRB2, combinando programación,
                interacción y diseño de juego.
              </p>
            </article>

            <article>
              <span>03</span>
              <h3>Enfoque</h3>
              <p>
                Presentar actividades infantiles de una manera visual,
                comprensible y entretenida.
              </p>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
}
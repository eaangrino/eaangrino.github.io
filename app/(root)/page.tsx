import Link from 'next/link';

export default function LanguageLandingPage() {
  return (
    <main className="language-shell">
      <section className="language-card" aria-labelledby="language-title">
        <div className="language-brand">
          <div className="language-brand-mark" aria-hidden="true">
            <svg viewBox="0 0 700 700" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                opacity="0.9"
                d="M319.5 497.5V618L244.5 558V452L319.5 497.5ZM454.75 558L379.75 618V497.5L454.75 452V558ZM215.5 468V558L170 513V437.5L215.5 468ZM529.25 513L483.75 558V468L529.25 437.5V513ZM408.699 81L484.66 218.037L409.25 259.5V333.5L467.75 364L524.758 314.355L573.536 379.214L543.75 409H394.75L349.5 484L304.5 409H155.5L125.714 379.214L174.492 314.355L231.5 364L290 333.5V259.5L154.5 185L111.5 215.5V259.5L142.709 286.678L95.5 349L36 289.5L154.938 81H408.699ZM663.25 289.5L603.75 349L556.541 286.678L587.75 259.5V215.5L544.75 185L524.093 196.356L460.149 81H544.312L663.25 289.5Z"
                fill="currentColor"
              />
            </svg>
          </div>

          <p className="language-eyebrow">Software Engineering Portfolio</p>
          <h1 id="language-title">Edgar Angrino</h1>
          <p className="language-intro">
            <span lang="es">Selecciona el idioma para continuar al portafolio.</span>
            <span lang="en">Choose your language to continue.</span>
          </p>
        </div>

        <nav
          className="language-options"
          aria-label="Select language / Seleccionar idioma"
        >
          <Link className="language-option" href="/es/" hrefLang="es" lang="es">
            <span className="language-flag" aria-hidden="true">
              🇨🇴
            </span>
            <span className="language-copy">
              <span className="language-name">Español</span>
              <span className="language-caption">Ver portafolio en español</span>
            </span>
            <span className="language-code" aria-hidden="true">
              ES
            </span>
          </Link>

          <Link className="language-option" href="/en/" hrefLang="en" lang="en">
            <span className="language-flag" aria-hidden="true">
              🇺🇸
            </span>
            <span className="language-copy">
              <span className="language-name">English</span>
              <span className="language-caption">View portfolio in English</span>
            </span>
            <span className="language-code" aria-hidden="true">
              EN
            </span>
          </Link>
        </nav>

        <p className="language-footer-note">eaangrino.github.io</p>
      </section>
    </main>
  );
}

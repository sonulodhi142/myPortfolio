import { useState } from 'react'
import { portfolio } from './data/portfolio.js'
import './App.css'

const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

function ArrowIcon({ diagonal = false }) {
  return (
    <svg
      aria-hidden="true"
      className="arrow-icon"
      viewBox="0 0 20 20"
      fill="none"
    >
      {diagonal ? (
        <path d="M5 15 15 5M6 5h9v9" />
      ) : (
        <path d="M3.5 10h12m-5-5 5 5-5 5" />
      )}
    </svg>
  )
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const initials = portfolio.name
    .split(' ')
    .filter(Boolean)
    .map((part) => part[0])
    .slice(0, 2)
    .join('')

  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label={`${portfolio.name}, home`}>
        <span className="brand-mark">{initials}</span>
        <span>{portfolio.name}</span>
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span />
        <span />
      </button>

      <nav
        className={`site-nav${menuOpen ? ' is-open' : ''}`}
        id="primary-navigation"
        aria-label="Primary navigation"
      >
        {navigation.map((item) => (
          <a
            href={item.href}
            key={item.label}
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </a>
        ))}
        <a
          className="nav-cta"
          href={portfolio.email ? `mailto:${portfolio.email}` : `tel:${portfolio.phone}`}
          onClick={() => setMenuOpen(false)}
        >
          Let&apos;s talk <ArrowIcon diagonal />
        </a>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero section-shell" id="home">
      <div className="hero-copy">
        <p className="eyebrow">
          <span className="status-dot" />
          {portfolio.role}
        </p>
        <h1>
          Building digital
          <br />
          things with <span className="highlight">purpose.</span>
        </h1>
        <p className="hero-description">{portfolio.intro}</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">
            Explore my work <ArrowIcon />
          </a>
          <a className="text-link" href={`tel:${portfolio.phone}`}>
            Call me <ArrowIcon diagonal />
          </a>
        </div>
        {(portfolio.location || portfolio.availability) && (
          <div className="hero-meta">
            {portfolio.location && <span>{portfolio.location}</span>}
            {portfolio.location && portfolio.availability && <span className="meta-divider" />}
            {portfolio.availability && <span>{portfolio.availability}</span>}
          </div>
        )}
      </div>

      <div className="hero-art" aria-label="Creative workspace illustration">
        <div className="art-orbit orbit-one" />
        <div className="art-orbit orbit-two" />
        <div className="art-sun" />
        <div className="art-window">
          <div className="window-bar">
            <span />
            <span />
            <span />
            <i>studio.jsx</i>
          </div>
          <div className="window-content">
            <span className="code-line muted">&lt;Design /&gt;</span>
            <span className="code-line">
              <i>const</i> idea = <b>&quot;make it matter&quot;</b>
            </span>
            <span className="code-line indent">
              <i>return</i> &lt;SomethingGreat /&gt;
            </span>
            <span className="code-cursor" />
          </div>
        </div>
        <div className="art-label label-top">Curiosity first</div>
        <div className="art-label label-bottom">Crafted with care</div>
        <div className="art-sparkle sparkle-one">✳</div>
        <div className="art-sparkle sparkle-two">✳</div>
      </div>
      <a className="scroll-cue" href="#about">
        <span /> Scroll to explore
      </a>
    </section>
  )
}

function SectionHeading({ eyebrow, title, description, id }) {
  return (
    <div className="section-heading" id={id}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  )
}

function About() {
  return (
    <section className="about section-shell section-space" id="about">
      <div className="about-note">
        <span className="note-number">01</span>
        <span className="note-line" />
        <span className="note-caption">A little about me</span>
      </div>
      <div className="about-content">
        <SectionHeading eyebrow="The person behind the pixels" title={portfolio.aboutTitle} />
        <div className="about-copy">
          <p>{portfolio.about}</p>
          {portfolio.location && (
            <p className="about-location">
              <span aria-hidden="true">⌖</span> Currently based in {portfolio.location}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className={`project-art project-art--${project.theme}`}>
        <div className="project-art-top">
          <span className="project-art-mark">{project.mark}</span>
          <span className="project-art-dots">•••</span>
        </div>
        <div className="project-art-display">
          <span className="display-label">{project.artLabel}</span>
          <strong>{project.artValue}</strong>
          <div className="display-bars" aria-hidden="true">
            {project.bars.map((height, index) => (
              <i key={`${project.id}-bar-${index}`} style={{ height: `${height}%` }} />
            ))}
          </div>
        </div>
        <span className="project-index">{project.number}</span>
      </div>
      <div className="project-info">
        <div className="project-title-row">
          <div>
            <p className="project-category">{project.category}</p>
            <h3>{project.name}</h3>
          </div>
          {project.url ? (
            <a
              className="project-link"
              href={project.url}
              target="_blank"
              rel="noreferrer"
              aria-label={`Visit ${project.name}`}
            >
              <ArrowIcon diagonal />
            </a>
          ) : (
            <span className="project-link project-link-muted" aria-hidden="true">
              <ArrowIcon diagonal />
            </span>
          )}
        </div>
        <p className="project-description">{project.description}</p>
        <ul className="tag-list" aria-label="Project topics">
          {project.technology.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </div>
    </article>
  )
}

function Projects() {
  const categories = ['All', ...new Set(portfolio.projects.map((project) => project.category))]
  const [activeCategory, setActiveCategory] = useState('All')
  const projects = portfolio.projects.filter(
    (project) => activeCategory === 'All' || project.category === activeCategory,
  )

  return (
    <section className="projects section-space" id="projects">
      <div className="section-shell">
        <div className="projects-heading-row">
          <SectionHeading
            eyebrow="Selected work"
            title="A few things I’ve made."
            description="A selection of ideas turned into thoughtful digital experiences."
          />
          <span className="project-count">
            {String(portfolio.projects.length).padStart(2, '0')} projects
          </span>
        </div>
        <div className="project-filters" aria-label="Filter projects by category">
          {categories.map((category) => (
            <button
              className={activeCategory === category ? 'filter-button is-active' : 'filter-button'}
              type="button"
              aria-pressed={activeCategory === category}
              key={category}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="project-grid">
          {projects.map((project) => <ProjectCard key={project.id} project={project} />)}
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section className="skills section-shell section-space" id="skills">
      <div className="skills-intro">
        <SectionHeading
          eyebrow="What I bring"
          title="Good work takes a good mix."
          description="I enjoy moving between the details and the bigger picture—always learning, always building."
        />
      </div>
      <div className="skill-groups">
        {portfolio.skills.map((group, index) => (
          <div className="skill-group" key={group.name}>
            <div className="skill-group-heading">
              <span className="skill-index">0{index + 1}</span>
              <h3>{group.name}</h3>
            </div>
            <ul className="skill-list">
              {group.items.map((skill) => <li key={skill}>{skill}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

function Experience() {
  if (!portfolio.experience.length) return null

  return (
    <section className="experience section-shell section-space" id="experience">
      <div className="experience-heading">
        <SectionHeading
          eyebrow="The path so far"
          title="Experience & learning."
        />
      </div>
      <div className="experience-list">
        {portfolio.experience.map((item) => (
          <article className="experience-item" key={`${item.company}-${item.period}`}>
            <div>
              <h3>{item.role}</h3>
              <p>{item.company}</p>
            </div>
            <p className="experience-description">{item.description}</p>
            <span className="experience-period">{item.period}</span>
          </article>
        ))}
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="contact section-shell section-space" id="contact">
      <div className="contact-card">
        <div className="contact-decoration" aria-hidden="true">✳</div>
        <p className="eyebrow">Have a good one in mind?</p>
        <h2>Let&apos;s make<br />something <span>meaningful.</span></h2>
        <p className="contact-copy">
          Have a project, a question, or just want to say hello? Give me a call.
        </p>
        <a className="button button-light" href={`tel:${portfolio.phone}`}>
          Call {portfolio.phone} <ArrowIcon diagonal />
        </a>
        <div className="social-links">
          {portfolio.socials.map((social) => (
            <a href={social.url} key={social.name} target="_blank" rel="noreferrer">
              {social.name} <ArrowIcon diagonal />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="site-footer section-shell">
      <a className="brand footer-brand" href="#home">
        <span className="brand-mark">{portfolio.name.split(' ').map((part) => part[0]).slice(0, 2).join('')}</span>
        <span>{portfolio.name}</span>
      </a>
      <p>Designed with intention. Built with React.</p>
      <a className="back-to-top" href="#home">Back to top ↑</a>
    </footer>
  )
}

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App

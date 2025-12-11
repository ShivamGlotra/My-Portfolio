export default function Projects() {
  const projects = [
    {
      title: 'Banking E-Commerce App',
      desc: 'A desktop application for managing bank accounts and e-commerce transactions with user authentication and secure payments.',
      tech: ['JavaFX', 'SQL', 'Java'],
      status: 'Completed',
      link: 'https://github.com/ShivamGlotra/My-Projects'
    },
    {
      title: 'AI Meal Finder',
      desc: 'Desktop app that recommends meals based on dietary preferences and ingredients using AI suggestions.',
      tech: ['C#', '.NET', 'AI'],
      status: 'Completed',
      link: 'https://github.com/ShivamGlotra/SpurHacks2025--Feel2Meal'
    },
    {
      title: 'E-Commerce Web App',
      desc: 'Full-stack web application with product catalog, shopping cart, and payment integration.',
      tech: ['Next.js', 'Node.js', 'Express', 'React', 'SQL'],
      status: 'In Progress',
      link: 'https://github.com/ShivamGlotra/E-Commerce'
    },
    {
      title: 'Live Sports App',
      desc: 'Real-time sports updates and live scores app with instant notifications and detailed match analytics and live news.',
      tech: ['Flutter', 'Firebase', 'Node.js', 'Express'],
      status: 'In Progress',
      link: 'https://github.com/ShivamGlotra/flutterApp'
    }
  ]

  return (
    <section className="section projects-section" aria-labelledby="projects-heading">
      <h2 id="projects-heading">Projects</h2>

      <p>
        Here are the projects I have worked on and am currently building. Each represents my growth as a developer and my ability to work with diverse technologies.
      </p>

      <div className="projects-grid" role="list">
        {projects.map((proj, i) => (
          <article key={i} className="project-card" role="listitem" aria-label={proj.title}>
            <div className="project-header">
              <h3>{proj.title}</h3>
              <span className={`status-badge ${proj.status === 'In Progress' ? 'in-progress' : 'completed'}`}>
                {proj.status}
              </span>
            </div>

            <p className="project-desc">{proj.desc}</p>

            <div className="project-tech">
              {proj.tech.map((t, j) => (
                <span key={j} className="tech-tag">{t}</span>
              ))}
            </div>

            <a href={proj.link} className="project-link">View Project</a>
          </article>
        ))}
      </div>
    </section>
  )
}

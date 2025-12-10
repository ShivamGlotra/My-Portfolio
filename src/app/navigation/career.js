export default function Career() {
  const experiences = [
    {
      role: 'Software Engineering Intern',
      company: '[Company Name]',
      period: 'Jun 2024 — Aug 2024',
      points: [
        'Built responsive UI components using React and maintained cross-browser compatibility.',
        'Collaborated on REST APIs and integrated frontend with Node.js backend services.',
        'Improved application performance and accessibility across key flows.'
      ],
      tech: ['React', 'Node.js', 'JavaScript', 'CSS']
    },
    {
      role: 'Open Source Contributor',
      company: 'Personal Projects / OSS',
      period: '2023 — Present',
      points: [
        'Contributed bug fixes and features to community libraries.',
        'Authored clear PRs with tests and documentation updates.'
      ],
      tech: ['Git', 'GitHub', 'TypeScript']
    }
  ]

  return (
    <section className="section career-section" aria-labelledby="career-heading">
      <h2 id="career-heading">Career</h2>

      <p>
        I am a driven and adaptable Computer Science student with practical experience from internships and open-source
        contributions. I focus on building maintainable frontend applications, collaborating with teams, and continuously
        improving code quality.
      </p>

      <div className="timeline" role="list">
        {experiences.map((exp, idx) => (
          <article key={idx} className="timeline-item" role="listitem" aria-label={`${exp.role} at ${exp.company}`}>
            <div className="timeline-marker" aria-hidden="true">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="#00bfa5" strokeWidth="2" fill="#e8f5f2" />
              </svg>
            </div>

            <div className="timeline-content">
              <div className="timeline-header">
                <h3 className="role">{exp.role}</h3>
                <span className="period">{exp.period}</span>
              </div>

              <div className="company">{exp.company}</div>

              <ul className="responsibilities">
                {exp.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>

              {exp.tech && (
                <div className="tech">
                  <strong>Tech:</strong>
                  <span className="tech-list"> {exp.tech.join(', ')}</span>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

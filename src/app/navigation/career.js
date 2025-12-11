export default function Career() {
  const experiences = [
    {
      role: 'Mobile Application Developer Intern',
      company: 'goeasy Ltd.',
      period: 'Sept 2025 — April 2026',
      points: [
        'Built responsive UI components using React and maintained cross-browser compatibility.',
        'Collaborated on REST APIs and integrated frontend with Node.js backend services.',
        'Participated in code reviews and team meetings to ensure high code quality.',
        'Developed and maintained a Flutter mobile app with seamless iOS and Android deployment.',
        'Improved application performance and accessibility across key flows.'
      ],
      tech: ['React', 'Next.js', 'TypeScript', 'Flutter', 'Dart', 'Firebase','bitbucket','Jira', 'Confluence','Contentful']
    },
    {
      role: 'Junior Backend Developer Intern',
      company: 'StuSynch Soudelka',
      period: 'June 2025 — Aug 2025',
      points: [
        'Developed RESTful APIs using Node.js and Express to support mobile app features.',
        'Implemented database schemas and queries with Firebase for efficient data storage and retrieval.',
        'Collaborated with frontend developers to integrate APIs and ensure smooth data flow.',
        'Wrote unit tests to validate API functionality and improve code reliability.',
        'Set up CI/CD pipelines for automated testing and deployment.'
      ],
      tech: [
        'TypeScript','Git', 'GitLab', 'Node.js', 'Express', 'Firebase', 'REST APIs', 'Postman' ]
    }
  ]

  return (
    <section className="section career-section" aria-labelledby="career-heading">
      <h2 id="career-heading">Career</h2>

      <p>
        I am a driven and adaptable Computer Science student with practical experience from internships and personal 
        projects. I focus on building maintainable frontend applications, collaborating with teams, and continuously
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

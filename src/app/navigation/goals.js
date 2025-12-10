export default function Goals() {
  const goals = [
    {
      title: 'Short-term: Become a confident Full-Stack Developer',
      desc: 'Strengthen front-end and back-end skills, ship complete projects, and learn deployment and testing best practices.',
      progress: 65
    },
    {
      title: 'Medium-term: Contribute to impactful products',
      desc: 'Work on production-grade applications, collaborate with teams, and improve design and architecture skills.',
      progress: 40
    },
    {
      title: 'Long-term: Grow into a senior software developer',
      desc: 'Lead projects, mentor others, and keep growing technical depth and soft skills to drive impact.',
      progress: 15
    }
  ]

  return (
    <section className="section goals-section" aria-labelledby="goals-heading">
      <h2 id="goals-heading">Goals</h2>

      <p>
        I love software development and my goal is to become a highly skilled full-stack developer. I enjoy building applications, learning new languages and tools, and becoming more capable so I can take on larger, impactful projects.
      </p>

      <div className="goals-grid">
        {goals.map((g, i) => (
          <div className="goal-card" key={i} role="article" aria-label={g.title}>
            <div className="goal-header">
              <h3>{g.title}</h3>
              <div className="goal-percent">{g.progress}%</div>
            </div>

            <p className="goal-desc">{g.desc}</p>

            <div className="goal-progress" aria-hidden>
              <div className="goal-progress-fill" style={{ width: `${g.progress}%` }} />
            </div>
          </div>
        ))}
      </div>

      <div className="roadmap">
        <h3>Roadmap</h3>
        <ol>
          <li>Finish a full-stack project (frontend + backend + deployment).</li>
          <li>Write unit & integration tests, and add CI to projects.</li>
          <li>Contribute to open-source and collaborate on team projects.</li>
          <li>Improve system design and architecture knowledge.</li>
        </ol>
      </div>
    </section>
  )
}

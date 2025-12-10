export default function Interests() {
  const hobbies = [
    { title: 'Making applications', desc: 'Designing and building useful apps for web and mobile.' },
    { title: 'Learning new programming languages', desc: 'Exploring language paradigms and applying them to small projects.' },
    { title: 'Game development', desc: 'Currently learning to build games — prototypes, gameplay loops, and physics.' }
  ]

  const personal = {
    games: 'I love to play games across genres — action, strategy and indie titles.',
    movies: 'I enjoy watching movies and analyzing storytelling and direction.',
    music: 'Hip hop, pop and Punjabi songs are my favorites.',
    cooking: 'I like to cook and experiment with new dishes from time to time.'
  }

  return (
    <section className="section interest-section" aria-labelledby="interests-heading">
      <h2 id="interests-heading">Interests</h2>

      <p>
        I am passionate about building things and learning continuously. Below are a few focus areas and personal interests.
      </p>

      <div className="interest-grid">
        <div className="focus-column">
          <h3>Focus Areas</h3>
          <div className="focus-list">
            {hobbies.map((h, i) => (
              <article key={i} className="focus-card" aria-label={h.title}>
                <div className="focus-icon" aria-hidden="true">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="18" height="18" rx="4" stroke="#00bfa5" strokeWidth="1.5" fill="#e8f5f2"/></svg>
                </div>
                <div className="focus-body">
                  <strong>{h.title}</strong>
                  <p className="muted">{h.desc}</p>
                 
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="personal-column">
          <h3>Personal</h3>
          <ul className="personal-list">
            <li><strong>Games:</strong> {personal.games}</li>
            <li><strong>Movies:</strong> {personal.movies}</li>
            <li><strong>Music:</strong> {personal.music}</li>
            <li><strong>Cooking:</strong> {personal.cooking}</li>
          </ul>

          <div className="hobby-chips">
            <span className="chip">Action Games</span>
            <span className="chip">Indie</span>
            <span className="chip">Story-driven Films</span>
            <span className="chip">Hip hop</span>
            <span className="chip">Punjabi</span>
                        <span className="chip">Bollywood</span>

            <span className="chip">Experimental Cooking</span>
          </div>
        </div>
      </div>
    </section>
  )
}

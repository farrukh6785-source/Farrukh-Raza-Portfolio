const education = [
  {
    highlight: true,
    years: '2022 – 2026', level: 'BSIT · University',
    institution: 'Bahauddin Zakariya University, Multan',
    courses: 'OOP · DBMS · DSA · OS · Software Engineering',
    score: '3.40', scoreLabel: 'out of 4.00',
  },
  {
    highlight: false,
    years: '2019 – 2021', level: 'F.Sc · Pre-Medical',
    institution: 'KIPS College, Multan',
    courses: null, score: '979', scoreLabel: 'out of 1100',
  },
  {
    highlight: false,
    years: '2017 – 2019', level: 'Matric · Science',
    institution: 'HN Science School, Multan',
    courses: null, score: '1029', scoreLabel: 'out of 1100',
  },
]

export default function Education() {
  return (
    <section id="education" className="section-dark">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-chip">Academic Background</span>
          <h2 className="section-title">My <span className="title-accent">Education</span></h2>
          <p className="section-sub">Built on a strong academic foundation</p>
        </div>
        <div className="edu-grid">
          {education.map(e => (
            <div className={`edu-card${e.highlight ? ' highlight-edu' : ''}`} key={e.institution}>
              <div className="edu-main">
                <div className="edu-year">{e.years}</div>
                <div className="edu-level">{e.level}</div>
                <div className="edu-inst">{e.institution}</div>
                {e.courses && <div className="edu-courses">{e.courses}</div>}
              </div>
              <div className="edu-score-wrap">
                <div className="edu-score">{e.score}</div>
                <div className="edu-score-label">{e.scoreLabel}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

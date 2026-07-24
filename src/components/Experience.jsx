const exps = [
  {
    period: '2025',
    type: 'INTERNSHIP',
    company: '3F Technologies Solutions',
    role: 'Flutter Developer',
    sub: 'Android · iOS · Web · Desktop',
    desc: 'Developed cross-platform mobile and desktop applications using Flutter. Gained hands on experience in production app deployment, UI/UX  implementation and working within a professional software development environment.',
    tags: ['Flutter', 'Dart', 'Android', 'iOS', 'Web', 'Desktop'],
    color: 'teal',
  },
  {
    period: '2026',
    type: 'INTERNSHIP',
    company: 'CodeAlpha (Online)',
    role: 'Flutter Developer — Backend Focus',
    sub: 'Full-Stack Mobile Apps (5+ Projects)',
    desc: 'Completed an intensive online internship building 5+ real world Flutter projects with backend integration. Worked extensively with Supabase, Firebase Console and Cloudinary for media management.',
    tags: ['Flutter', 'Supabase', 'Firebase', 'Cloudinary', 'Backend'],
    color: 'purple',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section-alt">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-chip">Professional Journey</span>
          <h2 className="section-title">Work <span className="title-accent">Experience</span></h2>
          <p className="section-sub">Where I have built real projects for real people</p>
        </div>
        <div className="exp-list">
          {exps.map((e, i) => (
            <div className={`exp-card exp-card--${e.color}`} key={i}>
              <div className="exp-card-left">
                <div className="exp-period">{e.period}</div>
                <div className="exp-type-badge">{e.type}</div>
              </div>
              <div className="exp-card-body">
                <div className="exp-company">{e.company}</div>
                <div className="exp-role">{e.role}</div>
                <div className="exp-sub">{e.sub}</div>
                <p className="exp-desc">{e.desc}</p>
                <div className="exp-tags">
                  {e.tags.map(t => <span className="exp-tag" key={t}>{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

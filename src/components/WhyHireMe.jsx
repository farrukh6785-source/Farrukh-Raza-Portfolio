const reasons = [
  { num: '01', title: 'Full Cross-Platform',    desc: 'One codebase — Android, iOS, Web & Desktop with native performance.' },
  { num: '02', title: 'AI-First Mindset',       desc: 'Build apps with AI at the core — MedGemma, LLMs, and Vision APIs.' },
  { num: '03', title: 'End-to-End Capability',  desc: 'From UI design to backend integration & deployment — full cycle.' },
  { num: '04', title: 'Real-World Projects',    desc: '5+ production apps including a FYP solving healthcare challenges.' },
  { num: '05', title: 'Strong Academics',       desc: '3.4 CGPA in BSIT from BZU Multan — DSA, OOP, DBMS, SE.' },
  { num: '06', title: 'Fast Learner',           desc: 'Quickly picks up new frameworks, APIs, and tools as needed.' },
  { num: '07', title: 'Clean Code',             desc: 'Structured Dart code following best practices — easy to scale.' },
  { num: '08', title: 'Backend Fluency',        desc: 'Comfortable with Firebase & Supabase — picks the right tool.' },
  { num: '09', title: 'Problem-Solver',         desc: 'Builds around user pain points — LifeDrop & DermAssist prove it.' },
  { num: '10', title: 'Communicative',          desc: 'Responsive, deadline-oriented, and quality-committed.' },
]

export default function WhyHireMe() {
  return (
    <section id="why" className="section-alt">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-chip">My Strengths</span>
          <h2 className="section-title">Why Hire <span className="title-accent">Me?</span></h2>
          <p className="section-sub">10 reasons to work together</p>
        </div>
        <div className="why-grid">
          {reasons.map(r => (
            <div className="why-card" key={r.num}>
              <div className="why-num">{r.num}</div>
              <div>
                <div className="why-title">{r.title}</div>
                <div className="why-desc">{r.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

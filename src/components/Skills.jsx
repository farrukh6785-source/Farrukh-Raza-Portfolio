import { useEffect, useRef } from 'react'
import { IconMobile, IconFire, IconAI } from './Icons'

const categories = [
  {
    icon: IconMobile, title: 'Mobile Dev',
    skills: [
      { name: 'Flutter',                        pct: 95 },
      { name: 'Dart',                           pct: 92 },
      { name: 'Android / iOS / Web / Desktop',  pct: 88 },
    ],
  },
  {
    icon: IconFire, title: 'Backend & DB',
    skills: [
      { name: 'Firebase (Auth, Firestore)',      pct: 90 },
      { name: 'Supabase',                       pct: 85 },
      { name: 'Cloudinary',                     pct: 80 },
    ],
  },
  {
    icon: IconAI, title: 'AI & Emerging',
    skills: [
      { name: 'AI Integration (MedGemma)',       pct: 82 },
      { name: 'Computer Vision Pipelines',       pct: 75 },
      { name: 'Real-time Systems (Maps API)',    pct: 80 },
    ],
  },
]

export default function Skills() {
  const ref = useRef(null)

  useEffect(() => {
    const fills = ref.current?.querySelectorAll('.skill-fill')
    if (!fills) return
    const obs = new IntersectionObserver(
      entries => { if (entries[0].isIntersecting) { fills.forEach(f => f.classList.add('animated')); obs.disconnect() } },
      { threshold: 0.15 }
    )
    obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="skills" className="section-dark" ref={ref}>
      <div className="section-inner">
        <div className="section-header">
          <span className="section-chip">Technical Proficiency</span>
          <h2 className="section-title">Skills & <span className="title-accent">Expertise</span></h2>
          <p className="section-sub">Technologies I work with every day</p>
        </div>
        <div className="skills-grid">
          {categories.map(cat => {
            const Icon = cat.icon
            return (
              <div className="skill-card" key={cat.title}>
                <div className="skill-card-head">
                  <span className="skill-card-icon"><Icon /></span>
                  <span className="skill-card-title">{cat.title}</span>
                </div>
              {cat.skills.map(s => (
                <div className="skill-item" key={s.name}>
                  <div className="skill-row">
                    <span className="skill-name">{s.name}</span>
                    <span className="skill-pct">{s.pct}%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-fill" style={{ '--tw': `${s.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          )})}
        </div>
      </div>
    </section>
  )
}

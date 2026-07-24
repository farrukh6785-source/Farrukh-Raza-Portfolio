import { IconMobile, IconAI, IconFire, IconTarget } from './Icons'

const cards = [
  { icon: IconMobile, title: 'Cross-Platform', sub: 'Android · iOS · Web · Desktop with Flutter' },
  { icon: IconAI, title: 'AI Integration', sub: 'MedGemma, AI Triage, Computer Vision APIs' },
  { icon: IconFire, title: 'Backend & DB', sub: 'Firebase, Supabase, Cloudinary' },
  { icon: IconTarget, title: 'Goal', sub: 'Building products that solve real problems at scale' },
]

export default function About() {
  return (
    <section id="about" className="section-alt">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-chip">Who I Am</span>
          <h2 className="section-title">About <span className="title-accent">Me</span></h2>
          <p className="section-sub">Passionate developer · Problem solver · AI enthusiast</p>
        </div>

        <div className="about-grid">
          <div className="about-text">
            <p>
              I am <strong>Farrukh Raza</strong>, a passionate Flutter Developer and Graduate in BSIT
              from Bahauddin Zakariya University, Multan. I specialize in building
              cross-platform mobile applications for Android, iOS, Web and Desktop.
            </p>
            <p>
              My journey has led me to create <span className="hl">AI-powered applications</span> that
              solve real-world problems from a blood donation management system to an AI-driven
              skin disease screening app using MedGemma.
            </p>
            <p>
              I combine technical depth in Flutter & Dart with backend expertise in Firebase and
              Supabase.
            </p>
            <p>
              My goal is to join a forward thinking team or build scalable SaaS products as a{' '}
              <span className="hl">full-stack Flutter developer</span>, leveraging AI to create
              meaningful user experiences.
            </p>

          </div>

          <div className="about-cards">
            {cards.map(card => {
              const Icon = card.icon
              return (
                <div className="about-card" key={card.title}>
                  <div className="about-card-icon"><Icon /></div>
                  <div>
                    <div className="about-card-title">{card.title}</div>
                    <div className="about-card-sub">{card.sub}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

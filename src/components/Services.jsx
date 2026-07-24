import { IconMobile, IconFire, IconDatabase, IconAI, IconPalette, IconLink, IconRocket, IconWrench } from './Icons'

const services = [
  { icon: IconMobile, name: 'Flutter App Dev',      sub: 'Android, iOS, Web & Desktop' },
  { icon: IconFire, name: 'Firebase Integration', sub: 'Auth, Firestore, Realtime DB' },
  { icon: IconDatabase, name: 'Supabase Backend',    sub: 'PostgreSQL, Auth, Storage' },
  { icon: IconAI, name: 'AI-Powered Apps',      sub: 'LLM, Vision, API integration' },
  { icon: IconPalette, name: 'UI/UX Implementation', sub: 'Pixel-perfect Flutter UI' },
  { icon: IconLink, name: 'API Integration',      sub: 'REST APIs, Maps, Payments' },
  { icon: IconRocket, name: 'App Deployment',       sub: 'Play Store & App Store' },
  { icon: IconWrench, name: 'Bug Fixing',          sub: 'Debug, Optimize, Refactor' },
]

export default function Services() {
  return (
    <section id="services" className="section-dark">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-chip">What I Offer</span>
          <h2 className="section-title">My <span className="title-accent">Services</span></h2>
          <p className="section-sub">End-to-end mobile development solutions</p>
        </div>
        <div className="services-grid">
          {services.map(s => {
            const Icon = s.icon
            return (
              <div className="service-card" key={s.name}>
                <div className="service-icon"><Icon /></div>
                <div className="service-name">{s.name}</div>
                <div className="service-sub">{s.sub}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

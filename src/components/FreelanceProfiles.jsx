import { IconBriefcase, IconGlobe, IconLinkedin } from './Icons'

const profiles = [
  {
    platform: 'Fiverr Profile', icon: IconBriefcase, accent: 'teal',
    title: 'Flutter Developer | Mobile App Expert',
    text: 'Flutter Developer | Cross-platform Android, iOS & Web apps | Firebase & Supabase backend | AI integration | Clean UI & on-time delivery. Let\'s build your next mobile app!',
  },
  {
    platform: 'Upwork Overview', icon: IconGlobe, accent: 'purple',
    title: 'Flutter & AI-Powered Mobile App Developer',
    text: "I'm a Flutter Developer with hands-on experience building production-grade cross-platform apps integrating Firebase, Supabase, REST APIs, and AI features. 10+ real-world apps delivered — AI-driven healthcare, e-commerce, and more.",
  },
  {
    platform: 'LinkedIn Summary', icon: IconLinkedin, accent: 'blue',
    title: 'Flutter Developer & Software Engineer',
    text: 'Graduate in BSIT from BZU Multan passionate about building AI-powered mobile solutions. Skilled in Flutter, Dart, Firebase, and Supabase with a strong record of cross-platform apps tackling healthcare, agriculture, and e-commerce.',
  },
]

export default function FreelanceProfiles() {
  return (
    <section id="profiles" className="section-alt">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-chip">Hire Me Online</span>
          <h2 className="section-title">Freelance <span className="title-accent">Profiles</span></h2>
          <p className="section-sub">Available on top freelancing platforms</p>
        </div>
        <div className="profiles-grid">
          {profiles.map(p => {
            const Icon = p.icon
            return (
              <div className={`profile-card profile-card--${p.accent}`} key={p.platform}>
                <div className="profile-top">
                  <span className="profile-emoji"><Icon /></span>
                  <span className="profile-platform">{p.platform}</span>
                </div>
                <div className="profile-title">{p.title}</div>
                <p className="profile-text">{p.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

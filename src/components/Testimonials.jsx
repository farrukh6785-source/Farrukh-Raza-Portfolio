import { IconStar } from './Icons'

const testimonials = [
  { stars: 5, initials: 'AK', name: 'Ahmed Khan',      role: 'Startup Founder, Lahore',       text: 'Farrukh delivered a beautifully designed Flutter app with Firebase backend ahead of schedule. His attention to detail and clean code structure made it easy for our team to maintain. Highly recommend!' },
  { stars: 5, initials: 'SR', name: 'Sara Riaz',       role: 'Product Manager, Karachi',      text: 'The AI integration in our mobile app exceeded expectations. Farrukh understood the requirements quickly and implemented a complex computer vision feature with impressive accuracy.' },
  { stars: 5, initials: 'UF', name: 'Usman Farooq',   role: 'E-commerce Entrepreneur',       text: 'Excellent Flutter developer! Built our e-commerce app with Supabase backend from scratch. Communication was great throughout and he handled revisions professionally.' },
  { stars: 5, initials: 'MA', name: 'Muhammad Ali',   role: 'EdTech Founder',                text: 'Farrukh worked on our real-time notification system and delivered a flawless solution. The app runs smoothly on both Android and iOS. Would definitely hire again.' },
  { stars: 5, initials: 'ZN', name: 'Zara Noor',      role: 'Healthcare App Client',         text: 'Extremely talented developer. Farrukh built a cross-platform Flutter app with Google Maps integration and it worked perfectly. Great value for the quality delivered.' },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-dark">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-chip">Client Feedback</span>
          <h2 className="section-title">What Clients <span className="title-accent">Say</span></h2>
          <p className="section-sub">Trusted by founders, product managers, and entrepreneurs</p>
        </div>
        <div className="testi-grid">
          {testimonials.map(t => (
            <div className="testi-card" key={t.name}>
              <div className="testi-stars" style={{ display: 'flex', gap: '3px' }}>
                {Array.from({ length: t.stars }).map((_, idx) => (
                  <IconStar key={idx} style={{ fontSize: '0.85rem' }} />
                ))}
              </div>
              <p className="testi-text">"{t.text}"</p>
              <div className="testi-author">
                <div className="testi-avatar">{t.initials}</div>
                <div>
                  <div className="testi-name">{t.name}</div>
                  <div className="testi-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

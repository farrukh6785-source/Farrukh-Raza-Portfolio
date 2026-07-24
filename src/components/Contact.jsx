import { IconMail, IconPhone, IconPin, IconLinkedin, IconGithub, IconEnvelope, IconMessageCircle } from './Icons'

const contactItems = [
  { icon: IconMail, label: 'EMAIL', value: 'farrukh6785@gmail.com', href: 'mailto:farrukh6785@gmail.com' },
  { icon: IconPhone, label: 'PHONE', value: '(+92) 3186927009', href: 'tel:+923186927009' },
  { icon: IconPin, label: 'LOCATION', value: 'Multan, Punjab, Pakistan', href: null },
]

const socials = [
  { icon: IconLinkedin, name: 'LinkedIn', sub: 'linkedin.com/in/farrukh-raza-91b64b379', href: 'https://www.linkedin.com/in/farrukh-raza-91b64b379', accent: 'blue' },
  { icon: IconGithub, name: 'GitHub', sub: 'github.com/farrukh6785-source', href: 'https://github.com/farrukh6785-source', accent: 'white' },
  { icon: IconEnvelope, name: 'Email Me', sub: 'farrukh6785@gmail.com', href: 'mailto:farrukh6785@gmail.com', accent: 'teal' },
  { icon: IconMessageCircle, name: 'Call / WhatsApp', sub: '(+92) 3186927009', href: 'tel:+923186927009', accent: 'green' },
]

export default function Contact() {
  return (
    <section id="contact" className="section-alt">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-chip">Let's Connect</span>
          <h2 className="section-title">Get In <span className="title-accent">Touch</span></h2>
          <p className="section-sub">Ready to build something amazing together?</p>
        </div>
        <div className="contact-grid">
          <div className="contact-left">
            <p className="contact-intro">
              Ready to build your next mobile application? I am available for freelance projects,
              full time roles and collaboration opportunities. Let's turn your idea into a product.
            </p>
            <div className="contact-items">
              {contactItems.map(item => {
                const Icon = item.icon
                return (
                  <div className="contact-item" key={item.label}>
                    <div className="contact-icon-wrap"><Icon /></div>
                    <div>
                      <div className="contact-label">{item.label}</div>
                      {item.href
                        ? <a href={item.href} className="contact-value contact-value--link">{item.value}</a>
                        : <div className="contact-value">{item.value}</div>
                      }
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="contact-links">
            {socials.map(s => {
              const Icon = s.icon
              return (
                <a
                  key={s.name}
                  href={s.href}
                  className="contact-link-card"
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span className="contact-icon-wrap" style={{ margin: 0, width: '38px', height: '38px', fontSize: '1rem' }}><Icon /></span>
                    <div>
                      <div className="link-name">{s.name}</div>
                      <div className="link-sub">{s.sub}</div>
                    </div>
                  </div>
                  <span className="link-arrow">→</span>
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

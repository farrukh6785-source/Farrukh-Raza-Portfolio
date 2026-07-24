import { useState, useEffect, useRef } from 'react'
import { IconFlutter, IconAI, IconFirebase, IconSupabase, IconGithub, IconLinkedin, IconGlobe } from './Icons'

const projects = [

  {
    icon: IconAI, accent: 'purple', badge: 'AI Powered', featured: true,
    title: 'DermAssist',
    desc: 'An AI-powered mobile app for preliminary screening of dermatological conditions using computer vision and MedGemma integration to analyze skin lesion photos.',
    description: 'An AI-powered mobile app for preliminary screening of dermatological conditions using computer vision and MedGemma integration to analyze skin lesion photos.',
    stack: ['Flutter', 'Firebase', 'MedGemma', 'Cloudinary'],
    technologies: ['Flutter', 'Firebase', 'MedGemma', 'Cloudinary'],
    githubUrl: 'https://github.com/farrukh6785-source/DermAssist',
    linkedinUrl: 'https://www.linkedin.com/posts/farrukh-raza-91b64b379_flutter-flutterdeveloper-dart-ugcPost-7485206903493431296-huv-/',
    comingSoon: false,
    liveDemoUrl: null,
    image: '/assets/dermassist.jpg'
  },
  {
    icon: IconFlutter, accent: 'teal', badge: 'FYP 2026', featured: true,
    title: 'LifeDrop – Blood Donation App',
    desc: 'A real-time blood request & donation system connecting hospitals, blood banks, and donors instantly. Features an AI-powered triage assistant for donor eligibility screening.',
    description: 'A real-time blood request & donation system connecting hospitals, blood banks, and donors instantly. Features an AI-powered triage assistant for donor eligibility screening.',
    stack: ['Flutter', 'Firebase', 'Google Maps API', 'AI Triage'],
    technologies: ['Flutter', 'Firebase', 'Google Maps API', 'AI Triage'],
    githubUrl: 'https://github.com/farrukh6785-source/Blood_Donation_App',
    linkedinUrl: 'https://www.linkedin.com/posts/farrukh-raza-91b64b379_flutter-flutterdeveloper-dart-ugcPost-7484627775946092544-w0lf/',
    comingSoon: false,
    liveDemoUrl: null,
    image: '/assets/lifedrop.jpg'
  },
  {
    icon: IconAI, accent: 'purple', badge: 'AI Health',
    title: 'Smart Health Analyzer',
    desc: 'An AI-powered personal health companion that analyzes symptoms, tracks vitals, reads medical lab reports using OCR, and provides preventive health recommendations.',
    description: 'An AI-powered personal health companion that analyzes symptoms, tracks vitals, reads medical lab reports using OCR, and provides preventive health recommendations.',
    stack: ['Flutter', 'Gemini AI API', 'Firebase', 'Health Kit'],
    technologies: ['Flutter', 'Gemini AI API', 'Firebase', 'Health Kit'],
    githubUrl: 'https://github.com/farrukh6785-source/Smart-Health-Analyzer',
    linkedinUrl: 'https://www.linkedin.com/posts/farrukh-raza-91b64b379_flutter-flutterdeveloper-dart-ugcPost-7484181499622133760-SkTU/',
    comingSoon: false,
    liveDemoUrl: null,
    image: '/assets/healthanalyzer.jpg'
  },
  {
    icon: IconAI, accent: 'coral', badge: 'AI Vision',
    title: 'Pharma Vision',
    desc: 'An innovative mobile application using OCR and computer vision to read prescriptions, identify pills from photos, and provide medication dosage reminders and interaction alerts.',
    description: 'An innovative mobile application using OCR and computer vision to read prescriptions, identify pills from photos, and provide medication dosage reminders and interaction alerts.',
    stack: ['Flutter', 'Firebase', 'ML Kit OCR', 'Cloudinary'],
    technologies: ['Flutter', 'Firebase', 'ML Kit OCR', 'Cloudinary'],
    githubUrl: 'https://github.com/farrukh6785-source/Pharma-Vision',
    linkedinUrl: 'https://www.linkedin.com/posts/farrukh-raza-91b64b379_flutter-flutterdeveloper-dart-ugcPost-7484544447649595392-3JxE/',
    comingSoon: false,
    liveDemoUrl: null,
    image: '/assets/pharmavision.jpg'
  },

  {
    icon: IconAI, accent: 'coral', badge: 'AI Finance',
    title: 'AI Personal Finance Tracker',
    desc: 'A smart expense tracker and budgeting app that categorizes transactions automatically, analyzes spending habits, and generates AI-driven savings advice.',
    description: 'A smart expense tracker and budgeting app that categorizes transactions automatically, analyzes spending habits, and generates AI-driven savings advice.',
    stack: ['Flutter', 'Firebase', 'Gemini AI API', 'FL Chart'],
    technologies: ['Flutter', 'Firebase', 'Gemini AI API', 'FL Chart'],
    githubUrl: 'https://github.com/farrukh6785-source/A-Smart-AI-Powered-Personal-Finance-Tracker-',
    linkedinUrl: 'https://www.linkedin.com/posts/farrukh-raza-91b64b379_flutter-flutterdeveloper-dart-ugcPost-7483412667064303616-yWz7/',
    comingSoon: false,
    liveDemoUrl: null,
    image: '/assets/financetracker.jpg'
  },
  {
    icon: IconAI, accent: 'purple', badge: 'AI Language',
    title: 'CodeAlpha Language Learning App',
    desc: 'An AI-powered vocabulary and conversation builder with speech-to-text pronunciation analysis and situational interactive roleplay exercises.',
    description: 'An AI-powered vocabulary and conversation builder with speech-to-text pronunciation analysis and situational interactive roleplay exercises.',
    stack: ['Flutter', 'Gemini AI API', 'Firebase Speech', 'TTS'],
    technologies: ['Flutter', 'Gemini AI API', 'Firebase Speech', 'TTS'],
    githubUrl: 'https://github.com/farrukh6785-source/CodeAlpha_LanguageLearning_App-',
    linkedinUrl: 'https://www.linkedin.com/posts/farrukh-raza-91b64b379_flutterdeveloper-mobileappdevelopment-riverpod-activity-7471868095813316608-c92p',
    comingSoon: false,
    liveDemoUrl: null,
    image: '/assets/languagelearning.png'
  },
  {
    icon: IconSupabase, accent: 'teal', badge: 'Fitness',
    title: 'CodeAlpha Fitness Tracker App',
    desc: 'A comprehensive fitness tracking mobile app with interactive workout routines, active calorie calculator, hydration reminders, and monthly progress visualization.',
    description: 'A comprehensive fitness tracking mobile app with interactive workout routines, active calorie calculator, hydration reminders, and monthly progress visualization.',
    stack: ['Flutter', 'Supabase', 'Hive DB', 'FL Chart'],
    technologies: ['Flutter', 'Supabase', 'Hive DB', 'FL Chart'],
    githubUrl: 'https://github.com/farrukh6785-source/CodeAlpha_FitnessTracker_App',
    linkedinUrl: 'https://www.linkedin.com/posts/farrukh-raza-91b64b379_flutter-dart-mobiledevelopment-activity-7471867163298091008--G-Z',
    comingSoon: false,
    liveDemoUrl: null,
    image: '/assets/fitnesstracker.jpg'
  },
  {
    icon: IconFlutter, accent: 'coral', badge: 'Education',
    title: 'CodeAlpha FlashCard Quiz App',
    desc: 'An interactive quiz and flashcard app utilizing spaced repetition to optimize vocabulary retention, formula memorization, and self-assessment for students.',
    description: 'An interactive quiz and flashcard app utilizing spaced repetition to optimize vocabulary retention, formula memorization, and self-assessment for students.',
    stack: ['Flutter', 'SQLite', 'Provider', 'Charts'],
    technologies: ['Flutter', 'SQLite', 'Provider', 'Charts'],
    githubUrl: 'https://github.com/farrukh6785-source/CodeAlpha_FlashCardQuiz_App',
    linkedinUrl: 'https://www.linkedin.com/posts/farrukh-raza-91b64b379_flutterdev-mobileappdevelopment-codealpha-activity-7471866441278038016-j7rd',
    comingSoon: false,
    liveDemoUrl: null,
    image: '/assets/flashcardquiz.jpg'
  },
  {
    icon: IconAI, accent: 'purple', badge: 'AI Powered', featured: true,
    title: 'StockPilot AI',
    desc: 'An AI-powered financial companion app that analyzes real-time market trends, provides stock predictions, and helps users optimize their investment portfolios with personalized insights.',
    description: 'An AI-powered financial companion app that analyzes real-time market trends, provides stock predictions, and helps users optimize their investment portfolios with personalized insights.',
    stack: ['Flutter', 'FastAPI', 'Gemini AI', 'YFinance'],
    technologies: ['Flutter', 'FastAPI', 'Gemini AI', 'YFinance'],
    githubUrl: 'https://github.com/farrukh6785-source/Stockpilot_Ai',
    linkedinUrl: null,
    comingSoon: false,
    liveDemoUrl: null,
    image: '/assets/stockpilot.png'
  }

]

// Helpers for recruiter metadata badges
const getYearBadge = (p) => {
  if (p.badge && p.badge.includes('2026')) return '2026';
  if (p.badge && p.badge.includes('2025')) return '2025';
  if (p.title === 'LifeDrop – Blood Donation App') return '2026';
  if (p.title === 'DermAssist') return '2026';
  if (p.title === 'Pharma Vision') return '2026';
  if (p.title === 'Smart Health Analyzer') return '2026';
  if (p.title === 'AI Personal Finance Tracker') return '2026';
  if (p.title === 'StockPilot AI') return '2026';
  if (p.title === 'Smart Notes App') return '2024';
  if (p.title.includes('CodeAlpha')) return '2025';
  return null;
}

const isAiProject = (p) => {
  return p.technologies.some(t =>
    t.toLowerCase().includes('ai') ||
    t.toLowerCase().includes('gemini') ||
    t.toLowerCase().includes('ocr') ||
    t.toLowerCase().includes('medgemma')
  ) || (p.badge && p.badge.toLowerCase().includes('ai'));
}

const isMobileProject = (p) => {
  return p.title !== 'GitHub Profile / Other Projects';
}

const isWebProject = (p) => {
  return p.title === 'GitHub Profile / Other Projects' || p.technologies.some(t => t.toLowerCase().includes('web'));
}

export default function Projects() {
  const [imageErrors, setImageErrors] = useState({})
  const [isInView, setIsInView] = useState(false)
  const gridRef = useRef(null)

  const handleImageError = (title) => {
    setImageErrors(prev => ({ ...prev, [title]: true }))
  }

  useEffect(() => {
    const currentRef = gridRef.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          if (currentRef) observer.unobserve(currentRef)
        }
      },
      { threshold: 0.08 }
    )
    if (currentRef) {
      observer.observe(currentRef)
    }
    return () => {
      if (currentRef) observer.unobserve(currentRef)
    }
  }, [])

  return (
    <section id="projects" className="section-dark">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-chip">What I have Built</span>
          <h2 className="section-title">Featured <span className="title-accent">Projects</span></h2>
          <p className="section-sub">Real apps solving real problems</p>
        </div>
        <div
          ref={gridRef}
          className={`projects-grid ${isInView ? 'in-view' : ''}`}
        >
          {projects.map((p, index) => {
            const Icon = p.icon
            const hasImage = p.image && !imageErrors[p.title]

            return (
              <div
                className={`project-card card-${p.accent} ${p.featured ? 'featured' : ''}`}
                key={p.title}
                style={{ '--index': index }}
              >
                {/* 1. Large Project Banner Image */}
                <div className="project-image-container">
                  {hasImage ? (
                    <>
                      <img
                        src={p.image}
                        alt={p.title}
                        className="project-image"
                        loading="lazy"
                        onError={() => handleImageError(p.title)}
                      />
                      <div className="project-image-overlay"></div>
                      {p.featured && (
                        <span className={`project-featured-overlay-badge badge-${p.accent}`}>
                          ⭐ Featured
                        </span>
                      )}
                    </>
                  ) : (
                    <div className={`project-image-fallback fallback-${p.accent}`}>
                      <div className="fallback-pattern"></div>
                      <div className="fallback-icon">
                        <Icon />
                      </div>
                    </div>
                  )}
                </div>

                {/* Card Content Wrapper */}
                <div className="project-card-content">
                  {/* 2. Featured Badge (optional, above title) */}
                  {p.badge && (
                    <div className="project-badge-container">
                      <span className={`project-badge-tag badge-${p.accent}`}>{p.badge}</span>
                    </div>
                  )}

                  {/* 3. Project Title */}
                  <h3 className="project-title" title={p.title}>{p.title}</h3>

                  {/* 4. Short Description */}
                  <p className="project-desc" title={p.description}>{p.description}</p>

                  {/* 5. Technology Stack Chips */}
                  <div className="project-stack">
                    {p.technologies.map(tech => (
                      <span className="stack-chip" key={tech}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* 6. Action Buttons */}
                  <div className="project-actions" role="group" aria-label={`Links for ${p.title}`}>
                    {p.liveDemoUrl && (
                      <a
                        href={p.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="action-btn demo-btn"
                        aria-label={`Open live demo of ${p.title}`}
                      >
                        <IconGlobe /> <span>Live Demo</span>
                      </a>
                    )}

                    {p.githubUrl && (
                      <a
                        href={p.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="action-btn github-btn"
                        aria-label={`Open GitHub repository of ${p.title}`}
                      >
                        <IconGithub /> <span>GitHub</span>
                      </a>
                    )}

                    {p.linkedinUrl ? (
                      <a
                        href={p.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="action-btn linkedin-btn"
                        aria-label={`Open LinkedIn demo video of ${p.title}`}
                      >
                        <IconLinkedin /> <span>LinkedIn Demo</span>
                      </a>
                    ) : (
                      <button
                        className="action-btn linkedin-btn disabled"
                        disabled
                        aria-label="LinkedIn demo video coming soon"
                      >
                        <IconLinkedin /> <span>Demo Coming Soon</span>
                      </button>
                    )}
                  </div>

                  {/* 7. Optional Project Stats (Card Footer Badge Row) */}
                  <div className="project-card-footer">
                    {getYearBadge(p) && (
                      <span className="footer-badge badge-year">{getYearBadge(p)}</span>
                    )}
                    {p.technologies.includes('Flutter') && (
                      <span className="footer-badge badge-tech-flutter">Flutter</span>
                    )}
                    {isAiProject(p) && (
                      <span className="footer-badge badge-tech-ai">AI</span>
                    )}
                    {isMobileProject(p) && (
                      <span className="footer-badge badge-platform-mobile">Mobile</span>
                    )}
                    {isWebProject(p) && (
                      <span className="footer-badge badge-platform-web">Web</span>
                    )}
                    {p.githubUrl && (
                      <span className="footer-badge badge-opensource">Open Source</span>
                    )}
                    {p.featured && (
                      <span className="footer-badge badge-featured">Featured</span>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

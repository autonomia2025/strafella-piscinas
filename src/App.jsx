import { useState, useEffect, useRef } from 'react'
import './App.css'

/* ===== SVG ICONS ===== */
const PoolIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 12c1.5-1.5 3.5-1.5 5 0s3.5 1.5 5 0 3.5-1.5 5 0 3.5 1.5 5 0"/>
    <path d="M2 17c1.5-1.5 3.5-1.5 5 0s3.5 1.5 5 0 3.5-1.5 5 0 3.5 1.5 5 0"/>
    <path d="M9 12V6m6 6V4"/>
  </svg>
)

const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="3" y1="6" x2="21" y2="6"/>
    <line x1="3" y1="12" x2="21" y2="12"/>
    <line x1="3" y1="18" x2="21" y2="18"/>
  </svg>
)

const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="18" y1="6" x2="6" y2="18"/>
    <line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
)

const WhatsAppIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

const ArrowRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14m-7-7 7 7-7 7"/>
  </svg>
)

const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
)

const MapPinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
)

const WHATSAPP_LINK = 'https://wa.me/56947976450?text=Hola%2C%20necesito%20servicio%20de%20mantenimiento%20de%20piscina'

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const sectionRefs = useRef([])

  const testimonials = [
    { text: '"Mi piscina estaba completamente verde y la recuperaron en pocos días."', name: 'Cliente', location: 'Viña del Mar', initial: 'V' },
    { text: '"Servicio muy profesional, ahora hacen el mantenimiento de forma periódica."', name: 'Cliente', location: 'Concón', initial: 'C' },
    { text: '"Instalaron la bomba nueva y dejaron todo funcionando perfecto."', name: 'Cliente', location: 'Reñaca', initial: 'R' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    const elements = document.querySelectorAll('.fade-in-up')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (id) => {
    setMobileMenuOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const navLinks = [
    { label: 'Servicios', id: 'servicios' },
    { label: 'Zonas de atención', id: 'zonas' },
    { label: 'Proyectos', id: 'proyectos' },
    { label: 'Testimonios', id: 'testimonios' },
    { label: 'Contacto', id: 'contacto' },
  ]

  return (
    <>
      {/* ===== NAVBAR ===== */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
        <div className="container navbar-inner">
          <a href="#" className="navbar-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img src="/logo-strafella.jpg" alt="Strafella Piscinas" className="navbar-logo-img" />
          </a>

          <div className="navbar-links">
            {navLinks.map((link) => (
              <a key={link.id} href={`#${link.id}`} onClick={(e) => { e.preventDefault(); scrollToSection(link.id) }}>
                {link.label}
              </a>
            ))}
          </div>

          <div className="navbar-cta">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
              <WhatsAppIcon /> Solicitar servicio
            </a>
          </div>

          <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(true)} aria-label="Abrir menú">
            <MenuIcon />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <button className="mobile-menu-close" onClick={() => setMobileMenuOpen(false)} aria-label="Cerrar menú">
          <CloseIcon />
        </button>
        {navLinks.map((link) => (
          <a key={link.id} href={`#${link.id}`} onClick={(e) => { e.preventDefault(); scrollToSection(link.id) }}>
            {link.label}
          </a>
        ))}
        <div style={{ marginTop: '24px' }}>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp" style={{ width: '100%' }}>
            <WhatsAppIcon /> Solicitar servicio por WhatsApp
          </a>
        </div>
      </div>

      {/* ===== HERO ===== */}
      <section className="hero" id="hero">
        <div className="hero-bg">
          <img src="/hero-pool.png" alt="Técnico realizando mantenimiento profesional de piscina" />
        </div>
        <div className="hero-overlay" />
        <div className="hero-content container">
          <div className="hero-inner">
            <div className="hero-badge">
              <span className="pulse-dot" />
              Recuperamos piscinas verdes en 48-72 horas
            </div>

            <h1>
              Mantenimiento y reparación de piscinas en la{' '}
              <span className="highlight">Región de Valparaíso</span>
            </h1>

            <p className="hero-subtitle">
              Recuperamos, limpiamos y mantenemos tu piscina para que siempre esté cristalina, segura y lista para disfrutar.
            </p>

            <div className="hero-trust-badges">
              <div className="badge-item">
                <span className="check-icon">✓</span>
                Atención a empresas y particulares
              </div>
              <div className="badge-item">
                <span className="check-icon">✓</span>
                Servicio en toda la Región de Valparaíso
              </div>
              <div className="badge-item">
                <span className="check-icon">✓</span>
                Técnicos especializados en mantenimiento de piscinas
              </div>
            </div>

            <div className="hero-actions">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-lg">
                <WhatsAppIcon /> Solicitar mantenimiento
              </a>
              <a href="#servicios" className="btn btn-outline btn-lg" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}
                onClick={(e) => { e.preventDefault(); scrollToSection('servicios') }}>
                <PhoneIcon /> Ver servicios
              </a>
            </div>

            <p className="hero-microcopy">
              Respuesta rápida · Diagnóstico profesional
            </p>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="section" id="servicios">
        <div className="container">
          <div className="section-header fade-in-up">
            <span className="section-label">Servicios</span>
            <h2 className="section-title">Nuestros Servicios de Piscinas</h2>
            <p className="section-subtitle">
              Soluciones completas para el mantenimiento, limpieza y reparación de tu piscina.
            </p>
          </div>

          <div className="services-grid">
            {[
              {
                icon: '🧪',
                title: 'Recuperación de aguas verdes o turbias',
                desc: 'Tratamiento químico profesional para devolver claridad al agua.',
              },
              {
                icon: '🏊',
                title: 'Mantenimiento completo de piscinas',
                desc: 'Limpieza, control químico y revisión del sistema.',
              },
              {
                icon: '📅',
                title: 'Mantenimiento programado',
                desc: 'Planes de mantenimiento semanal o periódico.',
              },
              {
                icon: '🎨',
                title: 'Revestimiento en fibra de vidrio',
                desc: 'Revestimiento profesional para piscinas de hormigón.',
              },
              {
                icon: '🔧',
                title: 'Reparaciones hidráulicas',
                desc: 'Reparación de fugas, tuberías y sistemas de filtración.',
              },
              {
                icon: '⚙️',
                title: 'Instalación y cambio de equipos',
                desc: null,
                list: ['Bombas de piscina', 'Cloradores', 'Filtros', 'Cambio de cuarzo'],
              },
            ].map((service, i) => (
              <div className="service-card fade-in-up" key={i} style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                {service.desc && <p>{service.desc}</p>}
                {service.list && (
                  <ul className="service-list">
                    {service.list.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                )}
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="service-link">
                  Ver servicio <ArrowRightIcon />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY US ===== */}
      <section className="section" id="porque" style={{ background: 'var(--gray-50)' }}>
        <div className="container">
          <div className="section-header fade-in-up">
            <span className="section-label">¿Por qué elegirnos?</span>
            <h2 className="section-title">Por qué elegir Strafella Piscinas</h2>
            <p className="section-subtitle">
              Experiencia, profesionalismo y compromiso con la calidad en cada servicio.
            </p>
          </div>

          <div className="why-grid">
            {[
              {
                icon: '🛠️',
                title: 'Experiencia en mantenimiento',
                desc: 'Trabajamos con múltiples sistemas de filtrado y tratamiento de agua.',
              },
              {
                icon: '🤝',
                title: 'Atención personalizada',
                desc: 'Evaluamos cada piscina para aplicar el tratamiento correcto.',
              },
              {
                icon: '🔄',
                title: 'Servicio integral',
                desc: 'Desde limpieza hasta reparación e instalación de equipos.',
              },
              {
                icon: '📍',
                title: 'Cobertura regional',
                desc: 'Atendemos en toda la Región de Valparaíso.',
              },
            ].map((item, i) => (
              <div className="why-card fade-in-up" key={i} style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="why-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BEFORE / AFTER ===== */}
      <section className="section before-after" id="proyectos">
        <div className="container">
          <div className="section-header fade-in-up">
            <span className="section-label">Resultados reales</span>
            <h2 className="section-title">Antes vs Después</h2>
            <p className="section-subtitle">
              Transformamos piscinas en mal estado a espacios cristalinos y seguros.
            </p>
          </div>

          <div className="ba-grid">
            <div className="ba-column before fade-in-up">
              <div style={{ position: 'relative' }}>
                <img src="/pool-before.png" alt="Piscina antes del mantenimiento - agua verde y turbia" className="ba-image" />
                <span className="ba-tag">Antes</span>
              </div>
              <div className="ba-content">
                <h3>Sin mantenimiento</h3>
                <ul className="ba-list">
                  <li><span className="icon">❌</span> Piscina verde</li>
                  <li><span className="icon">❌</span> Agua turbia</li>
                  <li><span className="icon">❌</span> Filtros dañados</li>
                  <li><span className="icon">❌</span> Equipos sin mantenimiento</li>
                </ul>
                <p>Una piscina sin mantenimiento se vuelve peligrosa y difícil de recuperar.</p>
              </div>
            </div>

            <div className="ba-column after fade-in-up" style={{ transitionDelay: '150ms' }}>
              <div style={{ position: 'relative' }}>
                <img src="/pool-after.png" alt="Piscina después del mantenimiento - agua cristalina" className="ba-image" />
                <span className="ba-tag">Después</span>
              </div>
              <div className="ba-content">
                <h3>Con Strafella Piscinas</h3>
                <ul className="ba-list">
                  <li><span className="icon">✅</span> Piscina cristalina</li>
                  <li><span className="icon">✅</span> Sistema funcionando</li>
                  <li><span className="icon">✅</span> Agua equilibrada</li>
                </ul>
                <p>Con nuestro servicio tu piscina vuelve a estar limpia, segura y lista para disfrutar.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TRUST / SECURITY ===== */}
      <section className="section" id="confianza">
        <div className="container">
          <div className="section-header fade-in-up">
            <span className="section-label">Seguridad</span>
            <h2 className="section-title">Seguridad y Confianza</h2>
            <p className="section-subtitle">
              Tu piscina en manos de profesionales con experiencia y responsabilidad.
            </p>
          </div>

          <div className="trust-grid">
            {[
              {
                icon: '⚗️',
                title: 'Tratamiento químico profesional',
                desc: 'Uso correcto de productos para equilibrio del agua.',
              },
              {
                icon: '🔍',
                title: 'Diagnóstico técnico',
                desc: 'Revisamos bombas, filtros y sistema hidráulico.',
              },
              {
                icon: '💧',
                title: 'Experiencia en recuperación',
                desc: 'Especialistas en aguas verdes o turbias.',
              },
              {
                icon: '✅',
                title: 'Servicio confiable',
                desc: 'Atención responsable para empresas y particulares.',
              },
            ].map((item, i) => (
              <div className="trust-card fade-in-up" key={i} style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="trust-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="section how-it-works" id="como-funciona">
        <div className="container">
          <div className="section-header fade-in-up">
            <span className="section-label">Proceso</span>
            <h2 className="section-title">Cómo funciona</h2>
            <p className="section-subtitle">
              En 3 simples pasos tu piscina vuelve a estar perfecta.
            </p>
          </div>

          <div className="steps-container">
            {[
              {
                num: 1,
                title: 'Solicitas el servicio',
                desc: 'Nos contactas por web o WhatsApp.',
              },
              {
                num: 2,
                title: 'Evaluamos tu piscina',
                desc: 'Realizamos diagnóstico y recomendamos el servicio adecuado.',
              },
              {
                num: 3,
                title: 'Realizamos el mantenimiento',
                desc: 'Tu piscina vuelve a estar limpia, equilibrada y funcionando correctamente.',
              },
            ].map((step, i) => (
              <div className="step-card fade-in-up" key={i} style={{ transitionDelay: `${i * 150}ms` }}>
                <div className="step-number">{step.num}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="section" id="testimonios">
        <div className="container">
          <div className="section-header fade-in-up">
            <span className="section-label">Testimonios</span>
            <h2 className="section-title">Lo que dicen nuestros clientes</h2>
            <p className="section-subtitle">
              La confianza de nuestros clientes es nuestra mejor carta de presentación.
            </p>
          </div>

          <div className="testimonial-carousel-container fade-in-up">
            <div className="testimonial-cards-wrapper" style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}>
              {testimonials.map((t, i) => (
                <div className="testimonial-slide" key={i}>
                  <div className="testimonial-card">
                    <div className="testimonial-stars">
                      {'★★★★★'.split('').map((s, j) => <span key={j}>{s}</span>)}
                    </div>
                    <blockquote>{t.text}</blockquote>
                    <div className="testimonial-author">
                      <div className="author-avatar">{t.initial}</div>
                      <div className="author-info">
                        <div className="name">{t.name}</div>
                        <div className="location">{t.location}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="testimonial-dots">
              {testimonials.map((_, i) => (
                <button 
                  key={i} 
                  className={`dot ${i === activeTestimonial ? 'active' : ''}`}
                  onClick={() => setActiveTestimonial(i)}
                  aria-label={`Ver testimonio ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== COVERAGE / ZONES ===== */}
      <section className="section coverage" id="zonas">
        <div className="container">
          <div className="section-header fade-in-up">
            <span className="section-label">Cobertura</span>
            <h2 className="section-title">Zonas de Atención</h2>
            <p className="section-subtitle">
              Trabajamos en toda la Región de Valparaíso para atender tu piscina.
            </p>
          </div>

          <div className="coverage-marquee-container fade-in-up">
            <div className="coverage-marquee">
              {[
                'Viña del Mar', 'Valparaíso', 'Reñaca', 'Concón', 'Mantagua',
                'Quilpué', 'Villa Alemana', 'Peñablanca', 'Casablanca', 'Región de Valparaíso',
                // Copia exacta para lograr el loop continuo:
                'Viña del Mar', 'Valparaíso', 'Reñaca', 'Concón', 'Mantagua',
                'Quilpué', 'Villa Alemana', 'Peñablanca', 'Casablanca', 'Región de Valparaíso'
              ].map((zone, i) => (
                <div className="coverage-item" key={i}>
                  <span className="coverage-icon"><MapPinIcon /></span>
                  {zone}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA FINAL ===== */}
      <section className="section cta-final" id="contacto">
        <div className="container">
          <div className="cta-final-content fade-in-up">
            <h2>¿Necesitas recuperar o mantener tu piscina?</h2>
            <p>
              Solicita una evaluación y deja tu piscina en manos de especialistas.
            </p>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-white">
              <WhatsAppIcon /> Solicitar servicio ahora
            </a>
            <p className="cta-microcopy">
              Respuesta rápida · Atención profesional
            </p>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        <div className="container">
          <div className="footer-inner">
            <div className="footer-logo">
              <img src="/logo-strafella.jpg" alt="Strafella Piscinas" className="footer-logo-img" />
            </div>
            <div className="footer-links">
              {navLinks.map((link) => (
                <a key={link.id} href={`#${link.id}`} onClick={(e) => { e.preventDefault(); scrollToSection(link.id) }}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div className="footer-copyright">
            © {new Date().getFullYear()} Strafella Piscinas — Mantenimiento profesional de piscinas en la Región de Valparaíso.
          </div>
        </div>
      </footer>

    </>
  )
}

export default App

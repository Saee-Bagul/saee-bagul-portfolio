import { useEffect, useRef, useState, useCallback } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { projects, skills } from './data'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Work from './components/Work'
import Why from './components/Why'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
import Trusted from './components/Trusted'
import Experience from './components/Experience'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import ContactModal from './components/ContactModal'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const root = useRef(null)
  const [project, setProject] = useState(0)
  const [card, setCard] = useState(0)
  const [modal, setModal] = useState(false)
  const openModal = useCallback(() => setModal(true), [])
  const closeModal = useCallback(() => setModal(false), [])

  useEffect(() => {
    const html = document.documentElement
    const onScroll = () => html.classList.toggle('is-scrolled', scrollY > 40)
    addEventListener('scroll', onScroll, { passive: true }); onScroll()
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return () => removeEventListener('scroll', onScroll)

    const mm = gsap.matchMedia()
    let onMove
    const ctx = gsap.context(() => {
      // Intro
      gsap.timeline({ defaults: { ease: 'power3.out' } })
        .from('.nav>*', { y: -24, opacity: 0, duration: 0.9, stagger: 0.12 })
        .from('.hero .ln>span', { yPercent: 115, duration: 1.1, stagger: 0.12 }, 0.1)
        .fromTo('.portrait', { opacity: 0, scale: 1.12 }, { opacity: 1, scale: 1.06, duration: 1.8 }, 0)
        .from('.side', { opacity: 0, y: 20, duration: 1, stagger: 0.12 }, 0.8)

      // Robot follows the cursor
      const px = gsap.quickTo('.portrait', 'x', { duration: 1, ease: 'power3.out' })
      const py = gsap.quickTo('.portrait', 'y', { duration: 1, ease: 'power3.out' })
      onMove = e => { px((e.clientX / innerWidth - 0.5) * innerWidth * 0.035); py((e.clientY / innerHeight - 0.5) * innerHeight * 0.035) }
      addEventListener('mousemove', onMove)

      // Hero dims and drifts as the work section slides over
      gsap.to('.dim', { opacity: 0.75, ease: 'none', scrollTrigger: { trigger: '.work', start: 'top bottom', end: 'top top', scrub: true } })
      gsap.to('.hero h1,.side', { yPercent: -12, ease: 'none', scrollTrigger: { trigger: '.work', start: 'top bottom', end: 'top top', scrub: true } })
      gsap.from('.work h2 .ln>span', { yPercent: 115, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: '.work', start: 'top 70%' } })

      // Projects: pinned, scroll switches the active project (all screen sizes)
      const n = projects.length
      ScrollTrigger.create({
        trigger: '.work', start: 'top top', pin: true, invalidateOnRefresh: true,
        end: () => '+=' + Math.round(innerHeight * (innerWidth > 820 ? 5 : 4)),
        onUpdate: s => setProject(Math.min(n - 1, Math.floor(s.progress * n))),
      })

      // Skills: pinned horizontal scroll on desktop only
      mm.add('(min-width: 821px)', () => {
        const track = document.getElementById('track')
        const dist = () => track.scrollWidth - innerWidth
        gsap.to(track, {
          x: () => -dist(), ease: 'none',
          scrollTrigger: {
            trigger: '#hs', start: 'top top', end: () => '+=' + dist(), pin: true, scrub: true, invalidateOnRefresh: true,
            onUpdate: s => setCard(Math.min(skills.length - 1, Math.floor(s.progress * skills.length))),
          },
        })
      })

      // Reveals
      gsap.utils.toArray('.why h2 .ln>span,.why .sub,.cols>div,.spk h2,.spk p,.aw h2,.ai,.te h2,.fq h2').forEach(el => {
        const mask = el.matches('.ln>span')
        gsap.from(el, { opacity: 0, y: mask ? 0 : 40, yPercent: mask ? 115 : 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 88%' } })
      })

      // Trusted: tech names drift in blurred, resolve, drift out
      gsap.utils.toArray('.lg').forEach((l, i) => {
        const d = i % 2 ? 1 : -1
        gsap.timeline({ scrollTrigger: { trigger: '#tr', start: 'top bottom', end: 'bottom top', scrub: true } })
          .fromTo(l, { y: 260 * d, x: 80 * d, opacity: 0, filter: 'blur(16px)' }, { y: 0, x: 0, opacity: 1, filter: 'blur(0px)', ease: 'none', duration: 1 })
          .to(l, { y: -220 * d, x: -60 * d, opacity: 0, filter: 'blur(16px)', ease: 'none', duration: 1 })
      })
      gsap.from('.tr h3', { opacity: 0, scale: 0.94, scrollTrigger: { trigger: '#tr', start: 'top 70%', end: 'top 20%', scrub: true } })
      gsap.from('.fc', { y: 80, opacity: 0.4, ease: 'none', scrollTrigger: { trigger: 'footer', start: 'top bottom', end: 'top 50%', scrub: true } })
    }, root)

    return () => { removeEventListener('scroll', onScroll); removeEventListener('mousemove', onMove); mm.revert(); ctx.revert() }
  }, [])

  return (
    <div ref={root}>
      <Nav onContact={openModal} />
      <main>
        <Hero />
        <Work active={project} setActive={setProject} />
        <Why />
        <Skills activeCard={card} setActiveCard={setCard} />
        <Certifications />
        <Trusted />
        <Experience />
        <FAQ />
      </main>
      <Footer onContact={openModal} />
      <ContactModal open={modal} onClose={closeModal} />
    </div>
  )
}

import { useEffect, useRef } from 'react'
import { skills, summary } from '../data'
export default function Skills({ activeCard, setActiveCard }) {
  const hs = useRef(null)
  // Phones / reduced motion: the strip scrolls natively, so track the nearest card
  useEffect(() => {
    const el = hs.current
    const onScroll = () => {
      const cards = [...el.querySelector('.track').children]
      let k = 0, best = Infinity
      cards.forEach((c, i) => {
        const d = Math.abs(c.offsetLeft - el.scrollLeft - innerWidth * 0.05)
        if (d < best) { best = d; k = i }
      })
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 6) k = cards.length - 1
      setActiveCard(k)
    }
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  }, [setActiveCard])
  return (
    <>
      <section className="sec dark spk" id="skills">
        <h2>Skills &amp; Technologies</h2>
        <p>{summary}</p>
      </section>
      <section className="sec dark hs" id="hs" ref={hs}>
        <div className="track" id="track">
          {skills.map(([t, items], i) => (
            <a key={t} className={`card${i === activeCard ? ' on' : ''}`} href="#contact">
              <span className="ar">↗</span><h3>{t}</h3>
              <ul>{items.map(x => <li key={x}>{x}</li>)}</ul>
            </a>
          ))}
        </div>
      </section>
    </>
  )
}

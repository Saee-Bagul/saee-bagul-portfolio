import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { faqs } from '../data'

function Item({ q, a, open, onToggle }) {
  const ref = useRef(null)
  const first = useRef(true)
  useEffect(() => {
    const el = ref.current
    if (first.current) { first.current = false; el.style.height = open ? 'auto' : '0px'; return }
    if (open) gsap.fromTo(el, { height: 0 }, { height: el.scrollHeight, duration: 0.5, ease: 'power2.out', onComplete: () => { el.style.height = 'auto' } })
    else gsap.to(el, { height: 0, duration: 0.5, ease: 'power2.out' })
    const t = setTimeout(() => ScrollTrigger.refresh(), 600)
    return () => clearTimeout(t)
  }, [open])
  return (
    <div className={`f${open ? ' on' : ''}`}>
      <button className="h" aria-expanded={open} onClick={onToggle}><span>{q}</span><span className="c">{open ? '−' : '+'}</span></button>
      <div className="a" ref={ref}><p>{a}</p></div>
    </div>
  )
}

export default function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <section className="sec dark fq">
      <h2>Frequently Asked Questions</h2>
      <div className="fw">
        {faqs.map(([q, a], i) => <Item key={q} q={q} a={a} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />)}
      </div>
    </section>
  )
}

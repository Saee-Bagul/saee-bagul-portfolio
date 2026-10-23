import { useState } from 'react'
import { experience } from '../data'
export default function Experience() {
  const [i, setI] = useState(0)
  const n = experience.length
  const t = experience[i]
  return (
    <section className="sec dark te" id="experience">
      <h2>Experience &amp; Education</h2>
      <div className="av">
        {experience.map((e, j) => (
          <button key={e.initials} aria-label={e.title} aria-pressed={j === i} style={{ background: `linear-gradient(135deg,${e.color})` }} onClick={() => setI(j)}>{e.initials}</button>
        ))}
      </div>
      <div className="q">
        <b>{t.title}</b><small>{t.sub}</small>
        <p>{t.lines.map((l, k) => <span key={k} style={{ display: 'block', whiteSpace: 'pre-line', marginBottom: k < t.lines.length - 1 ? '1.2em' : 0 }}>{l}</span>)}</p>
      </div>
      <div className="nv">
        <button aria-label="Previous" onClick={() => setI((i - 1 + n) % n)}>←</button>
        <button aria-label="Next" onClick={() => setI((i + 1) % n)}>→</button>
      </div>
    </section>
  )
}

import { projects } from '../data'
export default function Work({ active, setActive }) {
  return (
    <section className="sec work" id="work">
      <h2><span className="ln"><span>Selected Projects</span></span></h2>
      <ul className="wlist" id="wlist">
        {projects.map((p, i) => (
          <li key={p.name} className={i === active ? 'on' : i < active ? 'done' : ''} tabIndex={0}
              onClick={() => setActive(i)} onKeyDown={e => e.key === 'Enter' && setActive(i)}>
            <b>{p.name}</b><small>{p.short}</small>
          </li>
        ))}
      </ul>
      <div className="stage">
        {projects.map((p, i) => (
          <article key={p.title} className={`site pc${i === active ? ' on' : ''}`}>
            <div className="pt">
              <small>Project 0{i + 1}</small>
              <h3>{p.title}</h3>
              <p className="tech">{p.tech}</p>
              <ul>{p.points.map(t => <li key={t}>{t}</li>)}</ul>
            </div>
            <div className="pv" style={{ background: p.bg }} />
          </article>
        ))}
      </div>
    </section>
  )
}

import { certs } from '../data'
export default function Certifications() {
  return (
    <section className="sec dark aw">
      <h2>Certifications</h2>
      {certs.map(([a, b]) => <div className="ai" key={a}><div><h3>{a}</h3><span>{b}</span></div></div>)}
    </section>
  )
}

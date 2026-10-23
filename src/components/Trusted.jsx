import { logos } from '../data'
export default function Trusted() {
  return (
    <section className="sec dark tr" id="tr">
      {logos.map(([t, s]) => <span className="lg" key={t} style={s}>{t}</span>)}
      <h3>Turning Ideas into Working Software.</h3>
    </section>
  )
}

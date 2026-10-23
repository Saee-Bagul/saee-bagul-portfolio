import { why } from '../data'
export default function Why() {
  return (
    <section className="sec dark why">
      <h2><span className="ln"><span>Why Work With Me?</span></span></h2>
      <p className="sub">Full Stack Java Developer</p>
      <div className="cols">{why.map(([h, p]) => <div key={h}><h3>{h}</h3><p>{p}</p></div>)}</div>
    </section>
  )
}

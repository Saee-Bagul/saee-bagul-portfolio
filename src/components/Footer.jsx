import { RESUME, EMAIL, PHONE, LINKEDIN } from '../data'
export default function Footer({ onContact }) {
  return (
    <footer id="contact" className="sec">
      <div className="fc">
        <a className="logo" href="#">SAEE<span>BAGUL</span></a>
        <div className="fr">
          <h2>Let's Work Together</h2>
          <div className="fc-cta">
            <button className="pill" type="button" onClick={onContact}>Get in Touch</button>
            <a className="ghost" href={RESUME} target="_blank" rel="noopener" download="Saee_Bagul_Resume.pdf">Download Resume</a>
          </div>
        </div>
        <div className="rc">
          <small>REACH OUT</small>
          <a href={`tel:${PHONE.replace(/-/g, '')}`}>{PHONE}</a><br />
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a><br />Pune, Maharashtra
        </div>
        <div className="soc">
          <a href={LINKEDIN} target="_blank" rel="noopener" aria-label="LinkedIn">in</a>
          <a href={`mailto:${EMAIL}`} aria-label="Email">@</a>
        </div>
      </div>
      <div className="cp"><span>Copyright © Saee Bagul 2026</span><span>Pune, Maharashtra</span></div>
    </footer>
  )
}

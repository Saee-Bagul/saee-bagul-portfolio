import { RESUME } from '../data'
export default function Nav({ onContact }) {
  return (
    <header className="nav" id="nav">
      <a className="logo" href="#">SAEE<span>BAGUL</span></a>
      <nav className="links" aria-label="Primary">
        <a href="#work">Projects</a><a href="#skills">Skills</a><a href="#experience">Experience</a><a href="#contact">Contact</a>
      </nav>
      <div className="nav-r">
        <a className="ghost" href={RESUME} target="_blank" rel="noopener" download="Saee_Bagul_Resume.pdf">Resume ↓</a>
        <button className="pill" type="button" onClick={onContact}>Get in Touch</button>
      </div>
    </header>
  )
}

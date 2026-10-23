import robot from '../assets/robot.jpg'
export default function Hero() {
  return (
    <section className="hero" id="hero">
      <img className="portrait" alt="Orange robot in a helmet" src={robot} />
      <h1>
        {['Full Stack', 'Software', 'Developer'].map(t => <span className="ln" key={t}><span>{t}</span></span>)}
      </h1>
      <p className="side t">Java • Spring Boot<br />React • SQL</p>
      
      <div className="dim" />
    </section>
  )
}

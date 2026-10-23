import { useEffect, useRef, useState } from 'react'
import { RESUME, EMAIL, PHONE, LINKEDIN } from '../data'

export default function ContactModal({ open, onClose }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [msg, setMsg] = useState('')
  const first = useRef(null)
  const set = k => e => setForm({ ...form, [k]: e.target.value })

  useEffect(() => {
    if (!open) return
    document.documentElement.style.overflow = 'hidden'
    const t = setTimeout(() => first.current?.focus(), 60)
    const onKey = e => e.key === 'Escape' && onClose()
    addEventListener('keydown', onKey)
    return () => { document.documentElement.style.overflow = ''; clearTimeout(t); removeEventListener('keydown', onKey) }
  }, [open, onClose])

  const submit = e => {
    e.preventDefault()
    const { name, email, message } = form
    if (!name.trim() || !/^\S+@\S+\.\S+$/.test(email.trim()) || !message.trim()) { setMsg('Please enter your name, a valid email and a message.'); return }
    const url = `mailto:${EMAIL}?subject=${encodeURIComponent('Portfolio enquiry from ' + name.trim())}&body=${encodeURIComponent(`${message.trim()}\n\n— ${name.trim()} (${email.trim()})`)}`
    const a = document.createElement('a')
    a.href = url; a.target = '_blank'; a.rel = 'noopener'
    document.body.appendChild(a); a.click(); a.remove()
    setMsg('Opening your email app… If nothing opens, tap Copy below and email me directly.')
  }
  const copy = async () => {
    try { await navigator.clipboard.writeText(EMAIL); setMsg('Email address copied: ' + EMAIL) }
    catch { setMsg('Please copy it manually: ' + EMAIL) }
  }

  return (
    <div className={`md${open ? ' open' : ''}`} onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="mb" role="dialog" aria-modal="true" aria-labelledby="mt">
        <button className="x" type="button" aria-label="Close" onClick={onClose}>✕</button>
        <h3 id="mt">Get in Touch</h3>
        <p className="lead">Write your message and it opens in your email app, addressed to me.</p>
        <form onSubmit={submit} noValidate>
          <label htmlFor="cn">Your name</label><input id="cn" ref={first} autoComplete="name" value={form.name} onChange={set('name')} />
          <label htmlFor="ce">Your email</label><input id="ce" type="email" autoComplete="email" value={form.email} onChange={set('email')} />
          <label htmlFor="cm">Message</label><textarea id="cm" value={form.message} onChange={set('message')} />
          <div className="row">
            <button className="go" type="submit">Send Message</button>
            <a className="ghost" href={RESUME} target="_blank" rel="noopener" download="Saee_Bagul_Resume.pdf">Download Resume</a>
          </div>
          <p className="msg" role="status">{msg}</p>
        </form>
        <div className="alt">
          Prefer another way? Email <a href={`mailto:${EMAIL}`}>{EMAIL}</a> <button type="button" onClick={copy}>Copy</button><br />
          Call <a href={`tel:${PHONE.replace(/-/g, '')}`}>{PHONE}</a> · <a href={LINKEDIN} target="_blank" rel="noopener">LinkedIn</a>
        </div>
      </div>
    </div>
  )
}

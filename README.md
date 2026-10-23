# Saee Bagul – Portfolio (React + Vite)

## Run
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in /dist
npm run preview    # preview the build
```

## Structure
- `src/data.js` – all your content (projects, skills, certifications, experience, FAQ, contact). Edit text here.
- `src/components/` – one component per section.
- `src/App.jsx` – GSAP + ScrollTrigger animations (pinned projects, horizontal skills scroll, cursor parallax).
- `src/index.css` – all styles (fully responsive).
- `src/assets/robot.jpg` – hero image. Replace with your own to change it.
- `public/Saee_Bagul_Resume.pdf` – resume used by every "Resume" / "Download Resume" button. Replace the file to update it.

## Notes
- The contact form opens the visitor's email app with the message addressed to you (there is no server). To receive messages directly, connect it to a service such as Formspree or EmailJS in `ContactModal.jsx`.
- Fonts load from Google Fonts (Albert Sans).

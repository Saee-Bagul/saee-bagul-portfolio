export const RESUME = '/Saee_Bagul_Resume.pdf'
export const EMAIL = 'Saeebagul08@gmail.com'
export const PHONE = '+91-9359914522'
export const LINKEDIN = 'https://linkedin.com/in/saee-bagul-0a8442289'

export const projects = [
  { name: 'Clinic Appointment', short: 'Java • Spring Boot • JWT • MySQL', title: 'Clinic Appointment System',
    tech: 'Java 17, Spring Boot, Spring Data JPA, MySQL, JWT, Flyway, Swagger/OpenAPI, JUnit 5, Mockito',
    bg: 'linear-gradient(135deg,#e8650f,#7a1f1f)',
    points: [
      'Developed a RESTful backend using Java 17, Spring Boot, Spring Data JPA, and MySQL, with JWT-based authentication and role-based access control for Admin, Doctor, Receptionist, and Patient users.',
      'Implemented double-booking prevention using row-level locking and database unique constraints, and scheduled jobs for automatic no-show slot release and email appointment reminders.',
      'Managed schema migrations with Flyway, documented APIs with Swagger/OpenAPI, and wrote JUnit 5 and Mockito unit tests.'] },
  { name: 'Smart Meal Planner', short: 'Java • Spring Boot • React.js', title: 'Smart Meal Planner & Grocery Assistant',
    tech: 'Java, Spring Boot, REST APIs, React.js, Thymeleaf, HTML/CSS/Bootstrap',
    bg: 'linear-gradient(135deg,#3fd0b0,#0f3b3a)',
    points: [
      'Designed and developed a full-stack web application using Java and Spring Boot, applying OOP principles, Collections, and exception handling for a maintainable, modular backend with RESTful APIs for ingredient-matching logic.',
      'Built responsive front-end components with React.js and Thymeleaf, and integrated the Hugging Face API for AI-based recipe generation plus a grocery-tracking module for missing ingredients.'] },
  { name: 'School ERP System', short: 'React • Node.js • PostgreSQL', title: 'School ERP System',
    tech: 'React.js, Vite, Tailwind CSS, Node.js, Express.js, PostgreSQL, Prisma ORM, JWT, bcrypt',
    bg: 'linear-gradient(135deg,#8e72d8,#2a1a5a)',
    points: [
      'Developing a web-based School ERP System to streamline school administration through a centralized platform. The system includes student management, fee management, staff attendance and salary management, transport management, and bonafide certificate generation.',
      'Implementing secure JWT-based authentication and role-based access control for Super Admin, Teacher, and Transport Manager.',
      'Using PostgreSQL with Prisma ORM for database management and integrating Excel import/export and PDF generation for efficient record handling.'] },
  { name: 'Carpooling System', short: 'Android • Firebase • Google Maps', title: 'Android-Based Carpooling System',
    tech: 'Android, Google Maps API, Firebase',
    bg: 'linear-gradient(135deg,#2f6bff,#0b1a4a)',
    points: [
      'Built a mobile app enabling users to offer or find rides, featuring real-time tracking, in-app communication, and secure authentication.',
      'Integrated Google Maps API for navigation and Firebase for backend services to reduce traffic congestion via ride-sharing.'] },
  { name: 'Travel Website', short: 'HTML5 • CSS3 • Bootstrap • JS', title: 'Travel Website',
    tech: 'HTML5, CSS3, Bootstrap, JavaScript',
    bg: 'linear-gradient(135deg,#c46a3c,#3a1a10)',
    points: ['Designed a responsive travel booking website using HTML5, CSS3, Bootstrap, and JavaScript, integrating APIs for real-time flight and accommodation data.'] },
]

export const why = [
  ['Backend Foundations', 'Hands-on experience across Java, Spring Boot, REST APIs and Hibernate, built on a strong foundation in OOP.'],
  ['Responsive Front-End', 'Builds responsive, user-facing web modules with HTML5, CSS3, JavaScript, Bootstrap and React, integrating backend logic with SQL databases.'],
  ['Team-Ready', 'A track record of delivering functional features in fast-paced team environments, including leading a college tech fest team to a successful event with over 200 participants.'],
]

export const summary = 'Full Stack Java Developer with hands-on experience across Java, Spring Boot, REST APIs, and front-end technologies (HTML5, CSS3, JavaScript). Internship experience building responsive, user-facing web modules and integrating backend logic with SQL databases. Strong foundation in OOP and Hibernate, with a track record of delivering functional features in fast-paced team environments.'

export const skills = [
  ['Programming Languages', ['Java (OOP)', 'Collection Framework', 'Exception Handling', 'JavaScript']],
  ['Front-End', ['HTML5', 'CSS3', 'Bootstrap', 'React']],
  ['Back-End', ['JDBC, JSP, Servlet', 'REST APIs', 'Spring, Spring Boot', 'Hibernate']],
  ['Database', ['SQL', 'MySQL']],
  ['Tools & Version Control', ['Git', 'GitHub']],
]

export const certs = [['Java Full Stack', 'PROFOUND'], ['Cloud Computing', 'NPTEL'], ['Big Data Computing', 'NPTEL'], ['Angular', 'CERTIFICATION']]

export const logos = [
  ['Java', { left: '16%', top: '30%', color: '#f89820' }],
  ['Spring Boot', { left: '44%', top: '60%', color: '#6db33f' }],
  ['React', { right: '12%', top: '64%', color: '#61dafb' }],
  ['SQL', { left: '10%', top: '68%', color: '#4479a1' }],
  ['Git', { right: '18%', top: '22%', color: '#f05032' }],
  ['Bootstrap', { left: '30%', top: '14%', color: '#9b6bff' }],
]

export const experience = [
  { initials: 'NIS', title: 'Java Developer Intern — Next In Soft, Nashik', sub: 'Feb 2026 – Jul 2026', color: '#c46a3c,#5a2a1c',
    lines: ['• Built backend logic in Java (Spring Boot) for an e-commerce and content-based web application, handling request routing and dynamic page rendering.',
      '• Integrated a MySQL database using JPA/Hibernate, supporting CRUD operations for efficient data storage and retrieval.',
      '• Collaborated with the team to connect backend services with existing front-end templates, ensuring smooth data flow across application features.'] },
  { initials: 'eS', title: 'Web Developer Intern — eSmart Solutions, Nashik', sub: 'Dec 2023 – Jan 2024', color: '#3c6ac4,#1c2a5a',
    lines: ['• Built a responsive company website using HTML5, CSS3, and Bootstrap, applying Flexbox and CSS Grid layouts with animations.',
      '• Optimized images and page assets to improve load times and overall site performance.'] },
  { initials: 'Edu', title: 'Education', sub: 'B.E. in Computer Engineering', color: '#3cc4a0,#1c5a4a',
    lines: ['Bachelor of Engineering in Computer Engineering\nSavitribai Phule Pune University | Dec 2021 – Jun 2025',
      'HSC (12th), Science\nMaharashtra State Board, Pune | Jan 2019 – Feb 2020',
      'SSC (10th)\nMaharashtra State Board, Pune | May 2017 – May 2018'] },
  { initials: 'TL', title: 'Team Leader — College Tech Fest', sub: 'Position of Responsibility', color: '#c43c8a,#5a1c3c',
    lines: ['• Led a team in organizing a college tech fest, overseeing planning, coordination, and execution of events, contributing to its successful completion with over 200 participants.'] },
]

export const faqs = [
  ['Who is Saee Bagul?', 'Full Stack Java Developer with hands-on experience across Java, Spring Boot, REST APIs, and front-end technologies (HTML5, CSS3, JavaScript). Internship experience building responsive, user-facing web modules and integrating backend logic with SQL databases.'],
  ['Which technologies do you work with?', 'Java (OOP, Collection Framework, Exception Handling), JavaScript, HTML5, CSS3, Bootstrap, React, JDBC, JSP, Servlet, REST APIs, Spring, Spring Boot, Hibernate, SQL, Git and GitHub.'],
  ['What internship experience do you have?', 'Java Developer Intern at Next In Soft, Nashik (Feb 2026 – Jul 2026), building Spring Boot backend logic for an e-commerce and content-based web application, and Web Developer Intern at eSmart Solutions, Nashik (Dec 2023 – Jan 2024), building a responsive company website.'],
  ['What is your educational background?', 'Bachelor of Engineering in Computer Engineering from Savitribai Phule Pune University (Dec 2021 – Jun 2025).'],
  ['How can I contact you?', 'Use the Get in Touch button, email Saeebagul08@gmail.com, call +91-9359914522, or connect on LinkedIn. Based in Pune, Maharashtra.'],
]

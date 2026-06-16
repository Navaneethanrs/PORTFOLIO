# 🌌 Navaneethan RS — Personal Portfolio

A premium, interactive personal portfolio website designed to showcase web development expertise, AI solutions, and creative design. Built with **React**, **Vite**, **Tailwind CSS v4**, **GSAP**, and **AOS** for a fluid, highly-animated user experience.

---

## ✨ Key Features

- **📺 Immersive Hero Section**: Features a full-bleed video background with user play/pause control and a dynamic circular text marquee highlighting core skills.
- **📂 Folder-Style "About Me"**: A unique skeuomorphic tabbed folder interface featuring infinite-scrolling marquee tags.
- **⚡ GSAP Animated Timeline**: An interactive vertical timeline for professional experience that dynamically fills and triggers animations as the user scrolls.
- **💼 Interactive Projects Showcase**: Hover-sensitive project cards that expand to reveal tech stacks, descriptions, and categories.
- **⏱️ Minimalist Preloader**: A smooth intro animation that transitions cleanly into the main portfolio view once loaded.
- **✉️ Seamless Contact Hub**: A modern grid contact form styled with clean typography, including interactive quick-connect badges for GitHub, LinkedIn, and Location.

---

## 🛠️ Technology Stack

- **Frontend Core**: [React 19](https://react.dev/) & [Vite](https://vite.dev/) (fast HMR and bundling)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (modern CSS compilation and utility classes)
- **Animations**: 
  - [GSAP (GreenSock Animation Platform)](https://gsap.com/) & ScrollTrigger for timeline scrub animations
  - [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/) for scroll-triggered fades and entries
  - [React Type Animation](https://www.npmjs.com/package/react-type-animation) for the hero title typing effects
- **Icons**: Custom vector SVGs for pixel-perfect performance

---

## 📁 Project Structure

```text
portfolio/
├── public/                 # Static assets (favicons, etc.)
└── src/
    ├── assets/             # Media assets (videos, images, etc.)
    │   ├── about/
    │   └── hero/
    ├── components/         # Reusable react components
    │   ├── About.jsx       # About Section + Infinite tag marquee
    │   ├── Contact.jsx     # Contact Form + Footer + Social cards
    │   ├── Experience.jsx  # GSAP-powered timeline
    │   ├── Hero.jsx        # Video Hero + Rotating badge
    │   ├── Navbar.jsx      # Fluid header navigation
    │   ├── Preloader.jsx   # Initial loading animation
    │   ├── Projects.jsx    # Projects grid list
    │   └── Services.jsx    # Core capabilities / Services list
    ├── App.css             # Main stylesheet overrides
    ├── App.jsx             # Main application orchestrator (AOS Init & Layout)
    ├── index.css           # Tailwind CSS directives & custom keyframes
    └── main.jsx            # React entry point
```

---

## 🚀 Getting Started

To run this project locally, make sure you have [Node.js](https://nodejs.org/) installed, then follow these steps:

### 1. Clone the Repository
```bash
git clone https://github.com/Navaneethanrs/PORTFOLIO.git
cd PORTFOLIO
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
Start the local server with hot module replacement (HMR):
```bash
npm run dev
```
Open `http://localhost:5173` in your browser to view the portfolio.

### 4. Build for Production
Generate a highly optimized production build in the `dist` folder:
```bash
npm run build
```

---

## 📬 Contact & Connect

- **Email**: [navaneethanrs106@gmail.com](mailto:navaneethanrs106@gmail.com)
- **Phone**: +91 93425 12455
- **LinkedIn**: [Navaneethan Sankar](https://www.linkedin.com/in/navaneethan-sankar-743751367/)
- **GitHub**: [@Navaneethanrs](https://github.com/Navaneethanrs)
- **Location**: Salem, Tamilnadu, India
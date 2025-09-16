# Falcon Spaces Frontend Setup Script
# Run in PowerShell as Administrator

$base = "C:\Users\nicej\Falcon"

# -------------------
# Create directories
# -------------------
New-Item -ItemType Directory -Path $base\public\assets -Force
New-Item -ItemType Directory -Path $base\src\components -Force

# -------------------
# Create root files
# -------------------
Set-Content -Path $base\package.json -Value '{
  "name": "falcon-spaces-frontend",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "framer-motion": "^10.12.16",
    "react-icons": "^4.10.1"
  },
  "devDependencies": {
    "autoprefixer": "^10.4.14",
    "postcss": "^8.4.23",
    "tailwindcss": "^3.4.7",
    "vite": "^5.0.0"
  }
}'

Set-Content -Path $base\index.html -Value '<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Falcon Spaces</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&family=Playfair+Display:wght@400;600;700&display=swap" rel="stylesheet">
  </head>
  <body class="bg-charcoal text-ivory">
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>'

Set-Content -Path $base\postcss.config.cjs -Value 'module.exports = { plugins: { tailwindcss: {}, autoprefixer: {}, }, }'

Set-Content -Path $base\tailwind.config.cjs -Value 'module.exports = {
  content: ["./index.html", "./src//*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        charcoal: "#1A1A1A",
        ivory: "#F9F6F1",
        "antique-gold": "#C5A572",
        champagne: "#E5D3B3",
        slate: "#3D3D3D",
        taupe: "#A89F91"
      },
      fontFamily: {
        serif: ["Playfair Display","serif"],
        sans: ["Inter","sans-serif"]
      }
    }
  },
  plugins: []
}'

Set-Content -Path $base\README.md -Value '# Falcon Spaces — Frontend (Vite + React + Tailwind)
## Quick setup (Windows)
1. Place your hero images and videos into public/assets/ using the exact filenames.
2. Open PowerShell / Terminal in C:\Users\nicej\Falcon.
3. Run npm install
4. Run npm run dev
5. Open http://localhost:5173 in browser.'

# -------------------
# Create src files
# -------------------
Set-Content -Path $base\src\index.css -Value '@tailwind base;
@tailwind components;
@tailwind utilities;

:root{
  --charcoal: #1A1A1A;
  --ivory: #F9F6F1;
  --antique-gold: #C5A572;
  --champagne: #E5D3B3;
  --slate: #3D3D3D;
  --taupe: #A89F91;
}

html,body,#root{height:100%;}

.hero-video { object-fit: cover; width: 100%; height: 100%; }
.card-glass{ background: rgba(245,242,238,0.03); border: 1px solid rgba(255,255,255,0.04); }
.h1-hero{font-family: var(--font-serif);}
.text-champagne{ color: var(--champagne); }
.text-antique{ color: var(--antique-gold); }'

Set-Content -Path $base\src\main.jsx -Value 'import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);'

Set-Content -Path $base\src\App.jsx -Value 'import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyChoose from "./components/WhyChoose";
import Process from "./components/Process";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App(){
  return (
    <div className="font-sans bg-charcoal text-ivory min-h-screen">
      <Nav />
      <main className="pt-20">
        <Hero />
        <div className="max-w-7xl mx-auto px-6">
          <Services />
          <WhyChoose />
          <Process />
          <About />
          <Portfolio />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  )
}'

# -------------------
# Create components
# -------------------
$components = @(
    "Nav.jsx","Hero.jsx","Services.jsx","WhyChoose.jsx","Process.jsx","About.jsx","Portfolio.jsx","Contact.jsx","Footer.jsx"
)

# Nav.jsx
Set-Content -Path "$base\src\components\Nav.jsx" -Value 'import React from "react";
import { FiPhone } from "react-icons/fi";

export default function Nav(){
  return (
    <nav className="fixed w-full z-40">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="text-2xl font-serif tracking-wide">FALCON SPACES</div>
          <div className="text-sm text-champagne hidden md:block">Elevating spaces into luxury</div>
        </div>
        <div className="flex items-center gap-6">
          <ul className="hidden md:flex items-center gap-6 text-sm opacity-90">
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <a href="#contact" className="hidden md:inline-block px-5 py-2 rounded-full bg-[#C5A572] text-[#1A1A1A] font-medium hover:opacity-95">Book Free Consultation</a>
          <a href="tel:+919999999999" className="ml-2 p-2 rounded-full bg-slate text-ivory"><FiPhone /></a>
        </div>
      </div>
    </nav>
  )
}'

# Hero.jsx
Set-Content -Path "$base\src\components\Hero.jsx" -Value 'import React from "react";

export default function Hero(){
  return (
    <section className="relative h-screen flex items-center justify-center">
      <video className="hero-video absolute inset-0 w-full h-full object-cover" autoPlay muted loop playsInline poster="/assets/Heroimage1.jpg">
        <source src="/assets/Herovideo1.mp4" type="video/mp4" />
        <source src="/assets/Herovideo2.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
      <div className="relative z-10 text-center px-6">
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl tracking-tight">Elegance in Every Detail</h1>
        <p className="mt-4 text-lg md:text-xl text-champagne">Luxury interiors and furnishings, crafted for timeless living.</p>
        <div className="mt-8">
          <a href="#contact" className="inline-block bg-[#C5A572] text-[#1A1A1A] px-6 py-3 rounded-full font-semibold shadow">Book Free Consultation</a>
        </div>
      </div>
    </section>
  )
}'

# (Similarly add Services.jsx, WhyChoose.jsx, Process.jsx, About.jsx, Portfolio.jsx, Contact.jsx, Footer.jsx)
# Due to length, these can be copy-pasted from your content above in the same format

# -------------------
# Create empty media placeholders
# -------------------
New-Item -ItemType File -Path $base\public\assets\Heroimage1.jpg -Force
New-Item -ItemType File -Path $base\public\assets\Heroimage2.jpg -Force
New-Item -ItemType File -Path $base\public\assets\Heroimage3.jpg -Force
New-Item -ItemType File -Path $base\public\assets\Herovideo1.mp4 -Force
New-Item -ItemType File -Path $base\public\assets\Herovideo2.mp4 -Force
New-Item -ItemType File -Path $base\public\assets\Herovideo3.mp4 -Force

Write-Host "Falcon Spaces scaffold created at $base. Add your media files and run npm install & npm run dev."

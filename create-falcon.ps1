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
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
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
# Add the individual component files like Nav.jsx, Hero.jsx, etc.
# Create empty media placeholders
New-Item -ItemType File -Path $base\public\assets\Heroimage1.jpg -Force
New-Item -ItemType File -Path $base\public\assets\Heroimage2.jpg -Force
New-Item -ItemType File -Path $base\public\assets\Heroimage3.jpg -Force
New-Item -ItemType File -Path $base\public\assets\Herovideo1.mp4 -Force
New-Item -ItemType File -Path $base\public\assets\Herovideo2.mp4 -Force
New-Item -ItemType File -Path $base\public\assets\Herovideo3.mp4 -Force

Write-Host "Falcon Spaces scaffold created at $base. Add your media files and run npm install & npm run dev."

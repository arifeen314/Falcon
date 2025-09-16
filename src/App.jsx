import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Services from './components/Services'
import WhyChoose from './components/WhyChoose'
import Process from './components/Process'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App(){
  return (
    <div className="min-h-screen bg-charcoal text-ivory font-sans">
      <Nav />
      <main className="pt-20">
        <Hero />
        <div className="container">
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
}

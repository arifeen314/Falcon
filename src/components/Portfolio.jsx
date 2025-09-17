import React from 'react'

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-16">
      <h2 className="text-3xl font-serif text-center mb-8">Portfolio</h2>

      <div className="rounded-2xl p-12 card-glass text-center">
        <h3 className="text-xl mb-3">Portfolio Coming Soon</h3>
        <p className="muted mb-6">
          We're compiling our luxury case-studies — 3D renders, before & after galleries, and project details. 
          Meanwhile, you can request a design consultation.
        </p>
        <a href="#contact" className="btn-gold rounded-full px-6 py-3 font-semibold">
          Request Consultation
        </a>
      </div>

      {/* Placeholder gallery for visual balance */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        <div 
          className="h-56 bg-cover bg-center rounded-2xl" 
          style={{ backgroundImage: 'url(/assets/Heroimage1.jpg)' }} 
        />
        <div 
          className="h-56 bg-cover bg-center rounded-2xl" 
          style={{ backgroundImage: 'url(/assets/Heroimage2.jpg)' }} 
        />
        <div 
          className="h-56 bg-cover bg-center rounded-2xl" 
          style={{ backgroundImage: 'url(/assets/Heroimage3.jpg)' }} 
        />
      </div>
    </section>
  )
}

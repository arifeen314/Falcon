import React from 'react'
import { GiSofa, GiCookingPot, GiOfficeChair, GiHammerNails, GiHomeGarage } from 'react-icons/gi'

const services = [
  { icon: <GiHomeGarage size={28} />, title: 'Full Home Interiors', desc: 'End-to-end design & execution for your dream home.' },
  { icon: <GiCookingPot size={28} />, title: 'Modular Kitchens & Wardrobes', desc: 'Smart, stylish, highly functional systems.' },
  { icon: <GiSofa size={28} />, title: 'Furniture & Furnishings', desc: 'Curated collections — sofas, beds, lighting & décor.' },
  { icon: <GiOfficeChair size={28} />, title: 'Office Interiors', desc: 'Premium workspaces designed for productivity & prestige.' },
  { icon: <GiHammerNails size={28} />, title: 'Renovation & Remodeling', desc: 'Reimagine and upgrade your existing spaces.' }
]

export default function Services(){
  return (
    <section id="services" className="py-16">
      <h2 className="text-3xl font-serif text-center mb-10">Services</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {services.map((s, i) => (
          <div key={s.title} className="card-glass p-6 rounded-2xl hover:scale-101 transform transition">
            <div className="flex items-start gap-4">
              <div className="text-antique-gold">{s.icon}</div>
              <div>
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="mt-1 muted text-sm">{s.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

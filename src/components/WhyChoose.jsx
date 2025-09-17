import React from 'react'
import { FiCheckCircle } from 'react-icons/fi'

const items = [
  { title: 'Luxury Design, Smart Pricing', text: 'Premium design with direct-from-manufacturer pricing.' },
  { title: 'Complete Solution Under One Roof', text: 'Design, furniture, execution — handled end-to-end.' },
  { title: '3D Visualization', text: 'See photoreal 3D renders before construction.' },
  { title: 'Dedicated Project Manager', text: 'Single point of contact to ensure flawless delivery.' }
]

export default function WhyChoose() {
  return (
    <section id="why" className="py-16">
      <h2 className="text-3xl font-serif text-center mb-8">Why Choose Falcon Spaces?</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item) => (
          <div key={item.title} className="p-6 rounded-2xl card-glass flex gap-4 items-start">
            <div className="text-antique-gold mt-1">
              <FiCheckCircle size={22} />
            </div>
            <div>
              <h4 className="font-semibold">{item.title}</h4>
              <p className="muted text-sm mt-1">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

import React from 'react'

export default function About(){
  return (
    <section id="about" className="py-16">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-serif mb-4">About Falcon Spaces</h2>
          <p className="mb-4 muted">To redefine luxury interiors by blending world-class design with smart, accessible solutions.</p>

          <p className="mb-4">Falcon Spaces was founded to elevate interiors across Hyderabad and beyond. We offer a team of designers, craftsmen and project managers to deliver luxurious spaces — from concept to final handover.</p>

          <ul className="list-disc pl-5 muted">
            <li>Design Experts — 3D conceptualization & moodboards</li>
            <li>Execution Team — skilled craftsmen & finishing</li>
            <li>Project Managers — single point of contact</li>
            <li>Manufacturer Network — premium materials, better pricing</li>
          </ul>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-soft-lg">
          <img src="/assets/Heroimage2.jpg" alt="Studio" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  )
}

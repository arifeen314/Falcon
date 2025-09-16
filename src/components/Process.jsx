import React from 'react'

const steps = [
  'Book a Free Consultation',
  'Get 3D Design',
  'Receive Cost Estimate',
  'Execution & Quality Control',
  'Final Handover'
]

export default function Process(){
  return (
    <section id="process" className="py-16">
      <h2 className="text-3xl font-serif text-center mb-8">Our Process</h2>

      <div className="flex flex-col md:flex-row items-center gap-6">
        {steps.map((s, i) => (
          <div key={s} className="flex-1 text-center p-4">
            <div className="mx-auto w-14 h-14 rounded-full bg-ivory text-charcoal flex items-center justify-center font-semibold text-lg">{i+1}</div>
            <p className="mt-3 font-medium">{s}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

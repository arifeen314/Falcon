import React, { useState } from 'react'
import { FiPhone, FiMail } from 'react-icons/fi'

export default function Contact(){
  const [sent, setSent] = useState(false)

  return (
    <section id="contact" className="py-16">
      <h2 className="text-3xl font-serif text-center mb-8">Contact</h2>

      <div className="grid md:grid-cols-2 gap-8">
        <form className="p-6 rounded-2xl card-glass" onSubmit={(e)=>{ e.preventDefault(); setSent(true) }}>
          <div className="grid gap-4">
            <input required name="name" className="p-3 rounded bg-transparent border border-white/6" placeholder="Name" />
            <input required name="email" className="p-3 rounded bg-transparent border border-white/6" placeholder="Email" />
            <input name="phone" className="p-3 rounded bg-transparent border border-white/6" placeholder="Phone" />
            <select name="type" className="p-3 rounded bg-transparent border border-white/6">
              <option>Project Type</option>
              <option>Home</option>
              <option>Office</option>
              <option>Modular Kitchen</option>
              <option>Renovation</option>
            </select>
            <textarea name="message" rows="4" className="p-3 rounded bg-transparent border border-white/6" placeholder="Message"></textarea>
            <button className="btn-gold rounded-full px-5 py-2 font-semibold">Send Inquiry</button>

            {sent && <div className="mt-2 text-champagne">Thanks — your inquiry has been captured (demo frontend).</div>}
          </div>
        </form>

        <div className="p-6 rounded-2xl card-glass">
          <h3 className="mb-4">Reach Us</h3>
          <p className="flex items-center gap-2 muted"><FiPhone /> +91 XXXXX XXXXX</p>
          <p className="flex items-center gap-2 muted"><FiMail /> info@falconspaces.com</p>
          <p className="mt-4 muted">Hyderabad, Telangana</p>

          <div className="mt-6">
            <a className="inline-block px-4 py-2 rounded-full btn-outline" href="https://wa.me/919999999999">Chat on WhatsApp</a>
          </div>
        </div>
      </div>
    </section>
  )
}

import React, { useState } from 'react'
import { FiPhone, FiMail } from 'react-icons/fi'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    type: "Project Type",
    message: ""
  })
  const [status, setStatus] = useState("")

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus("Sending...")

    try {
      const res = await fetch("https://falcon-backend-ca8t.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      })

      if (res.ok) {
        setStatus("✅ Inquiry sent successfully!")
        setFormData({ name: "", email: "", phone: "", type: "Project Type", message: "" })
      } else {
        setStatus("❌ Failed to send inquiry")
      }
    } catch (error) {
      setStatus("⚠️ Error connecting to server")
    }
  }

  return (
    <section id="contact" className="py-16">
      <h2 className="text-3xl font-serif text-center mb-8">Contact</h2>

      <div className="grid md:grid-cols-2 gap-8">
        <form className="p-6 rounded-2xl card-glass" onSubmit={handleSubmit}>
          <div className="grid gap-4">
            <input required name="name" value={formData.name} onChange={handleChange}
              className="p-3 rounded bg-transparent border border-white/6" placeholder="Name" />
            <input required type="email" name="email" value={formData.email} onChange={handleChange}
              className="p-3 rounded bg-transparent border border-white/6" placeholder="Email" />
            <input name="phone" value={formData.phone} onChange={handleChange}
              className="p-3 rounded bg-transparent border border-white/6" placeholder="Phone" />
            <select name="type" value={formData.type} onChange={handleChange}
              className="p-3 rounded bg-transparent border border-white/6">
              <option>Project Type</option>
              <option>Home</option>
              <option>Office</option>
              <option>Modular Kitchen</option>
              <option>Renovation</option>
            </select>
            <textarea name="message" rows="4" value={formData.message} onChange={handleChange}
              className="p-3 rounded bg-transparent border border-white/6" placeholder="Message"></textarea>
            <button className="btn-gold rounded-full px-5 py-2 font-semibold">Send Inquiry</button>

            {status && <div className="mt-2 text-champagne">{status}</div>}
          </div>
        </form>

        <div className="p-6 rounded-2xl card-glass">
          <h3 className="mb-4">Reach Us</h3>
          <p className="flex items-center gap-2 muted"><FiPhone /> +91 XXXXX XXXXX</p>
          <p className="flex items-center gap-2 muted"><FiMail /> info@falconspaces.com</p>
          <p className="mt-4 muted">Hyderabad, Telangana</p>

          <div className="mt-6">
            <a className="inline-block px-4 py-2 rounded-full btn-outline" href="https://wa.me/919392985626">Chat on WhatsApp</a>
          </div>
        </div>
      </div>
    </section>
  )
}

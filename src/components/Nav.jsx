import React from 'react'
import { FiPhone, FiMenu } from 'react-icons/fi'

export default function Nav(){
  return (
    <header className="fixed w-full z-50">
      <div className="container flex items-center justify-between py-4">
        <div className="flex items-center gap-4">
          <div className="text-2xl font-serif tracking-widest">FALCON SPACES</div>
          <div className="text-sm muted hidden md:block">Elevating spaces into luxury</div>
        </div>

        <nav className="flex items-center gap-4">
          <ul className="hidden md:flex items-center gap-6 text-sm">
            <li><a href="#services" className="hover:underline">Services</a></li>
            <li><a href="#portfolio" className="hover:underline">Portfolio</a></li>
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>

          <a href="#contact" className="hidden md:inline-block btn-gold rounded-full px-5 py-2 font-medium hover:opacity-95">Book Consultation</a>

          <a href="tel:+91XXXXXXXXXX" aria-label="Call us" className="ml-2 p-2 rounded-full bg-slate text-ivory">
            <FiPhone />
          </a>

          <button className="md:hidden p-2 rounded bg-white/3">
            <FiMenu />
          </button>
        </nav>
      </div>
    </header>
  )
}

import React from 'react'

export default function Footer(){
  return (
    <footer className="mt-12 border-t border-white/6 py-8">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm muted">© {new Date().getFullYear()} Falcon Spaces</div>
        <div className="text-sm muted">Designed with premium craftsmanship</div>
      </div>
    </footer>
  )
}

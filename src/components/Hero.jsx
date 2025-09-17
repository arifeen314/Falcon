import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  const [useVideo, setUseVideo] = useState(true)

  useEffect(() => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      setUseVideo(false)
    }
  }, [])

  return (
    <section className="relative h-[90vh] md:h-screen overflow-hidden">
      {/* Background video or image */}
      {useVideo ? (
        <video
          className="hero-video absolute inset-0 w-full h-full"
          autoPlay
          muted
          loop
          playsInline
          poster="/assets/Heroimage1.jpg"
        >
          <source src="/assets/Herovideo1.mp4" type="video/mp4" />
          <source src="/assets/Herovideo2.mp4" type="video/mp4" />
        </video>
      ) : (
        <img
          src="/assets/Heroimage1.jpg"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      <div className="absolute inset-0 hero-overlay"></div>

      <div className="relative z-20 h-full flex items-center">
        <div className="container">
          <motion.div
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="max-w-3xl"
          >
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-tight">
              Elegance in Every Detail
            </h1>
            <p className="mt-4 text-lg muted">
              Luxury interiors and furnishings, crafted for timeless living.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="#contact"
                className="btn-gold rounded-full px-6 py-3 font-semibold shadow-soft-lg"
              >
                Book Free Consultation
              </a>
              <a
                href="#portfolio"
                className="btn-outline rounded-full px-6 py-3 font-medium"
              >
                View Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* subtle bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>
    </section>
  )
}

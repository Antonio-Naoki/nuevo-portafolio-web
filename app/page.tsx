"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Particles, { initParticlesEngine } from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim"
import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import ThemeToggle from "@/components/theme-toggle"
import CustomCursor from "@/components/custom-cursor"
import ParallaxWrapper from "@/components/parallax-wrapper"

export default function Home() {
  const [init, setInit] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-100 to-white dark:from-black dark:to-gray-900 text-gray-900 dark:text-white transition-colors duration-300 overflow-hidden">
      <CustomCursor />
      {init && (
        <Particles
          id="tsparticles"
          className="absolute inset-0 -z-10"
          options={{
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 100,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: ["#3b82f6", "#8b5cf6", "#06b6d4"],
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.2,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.3,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 3 },
              },
            },
            detectRetina: true,
          }}
        />
      )}

      <ThemeToggle />

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        {/* Elementos de parallax decorativos */}
        <ParallaxWrapper
          speed={0.2}
          direction="left"
          className="absolute top-[15%] left-[5%] w-24 h-24 opacity-20 hidden md:block"
        >
          <div className="w-full h-full rounded-full bg-blue-500 blur-xl"></div>
        </ParallaxWrapper>

        <ParallaxWrapper
          speed={0.3}
          direction="right"
          className="absolute top-[40%] right-[8%] w-32 h-32 opacity-20 hidden md:block"
        >
          <div className="w-full h-full rounded-full bg-purple-500 blur-xl"></div>
        </ParallaxWrapper>

        <ParallaxWrapper
          speed={0.15}
          direction="up"
          className="absolute bottom-[20%] left-[15%] w-40 h-40 opacity-20 hidden md:block"
        >
          <div className="w-full h-full rounded-full bg-cyan-500 blur-xl"></div>
        </ParallaxWrapper>

        <Hero />

        <div className="relative">
          <ParallaxWrapper speed={0.1} direction="up" className="w-full">
            <About />
          </ParallaxWrapper>
        </div>

        <div className="relative">
          <ParallaxWrapper speed={0.05} direction="up" className="w-full">
            <Projects />
          </ParallaxWrapper>
        </div>

        <div className="relative">
          <ParallaxWrapper speed={0.08} direction="up" className="w-full">
            <Skills />
          </ParallaxWrapper>
        </div>

        <div className="relative">
          <ParallaxWrapper speed={0.12} direction="up" className="w-full">
            <Contact />
          </ParallaxWrapper>
        </div>

        <Footer />
      </motion.div>
    </main>
  )
}

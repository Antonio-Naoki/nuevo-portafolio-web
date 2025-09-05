"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import ParallaxWrapper from "./parallax-wrapper"

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])
  const y = useTransform(scrollYProgress, [0, 0.5], [100, 0])

  return (
    <section
      id="about"
      ref={ref}
      className="min-h-screen flex flex-col justify-center items-center py-12 xs:py-14 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 relative overflow-hidden subtle-texture"
    >
      {/* Elementos de luz */}
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] animate-pulse-slow"></div>
      <div
        className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-[100px] animate-pulse-slow"
        style={{ animationDelay: "2s" }}
      ></div>

      {/* Elementos de parallax decorativos */}
      <ParallaxWrapper
        speed={0.2}
        direction="right"
        className="absolute top-[20%] left-[5%] w-24 h-24 opacity-20 hidden md:block"
      >
        <div className="w-full h-full rounded-full bg-blue-500 blur-xl"></div>
      </ParallaxWrapper>

      <ParallaxWrapper
        speed={0.3}
        direction="left"
        className="absolute bottom-[15%] right-[10%] w-32 h-32 opacity-20 hidden md:block"
      >
        <div className="w-full h-full rounded-full bg-purple-500 blur-xl"></div>
      </ParallaxWrapper>

      <motion.div
        style={{ opacity, y }}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 xs:gap-7 sm:gap-8 md:gap-10 lg:gap-12 items-center"
      >
        <div className="perspective-1000 mx-auto md:mx-0 w-full max-w-[250px] xs:max-w-[280px] sm:max-w-sm md:max-w-none">
          <ParallaxWrapper speed={0.15} direction="up">
            <motion.div
              className="relative w-full h-[250px] xs:h-[280px] sm:h-[300px] md:h-[350px] lg:h-[400px] rounded-xl overflow-hidden transform-3d transition-transform duration-500 hover:rotate-y-10 hover:rotate-x-10 shadow-2xl glow"
              whileHover={{
                rotateY: 15,
                rotateX: 5,
                transition: { duration: 0.5 },
              }}
            >
              <Image
                src="https://i.postimg.cc/gjBWX0fV/mejorada-con-ia.png"
                alt="Antonio Morales"
                fill
                className="object-cover object-center"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end p-4 xs:p-5 sm:p-6">
                <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-white text-shadow">Antonio Morales</h3>
              </div>

              {/* Efecto de brillo en los bordes */}
              <div className="absolute inset-0 border border-white/20 rounded-xl"></div>
              <div className="absolute inset-0 border-2 border-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          </ParallaxWrapper>
        </div>

        <div className="mt-6 md:mt-0">
          <ParallaxWrapper speed={0.25} direction="up">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold mb-3 xs:mb-4 sm:mb-5 md:mb-6 gradient-text text-shadow text-center md:text-left"
            >
              Sobre mí
            </motion.h2>
          </ParallaxWrapper>

          <div className="space-y-2 xs:space-y-3 sm:space-y-4">
            {[
              "Soy Antonio Morales, un desarrollador de software y programador de aplicaciones apasionado por crear experiencias digitales excepcionales.",
              "Como programador freelancer con más de 4 años de experiencia, ofrezco servicios de desarrollo de páginas web y soluciones móviles.",
              "Me especializo en tecnologías modernas y me considero un experto en IA, aplicando inteligencia artificial para construir aplicaciones rápidas, accesibles y visualmente atractivas.",
              "Cuando no estoy codificando, me gusta explorar nuevas tecnologías, contribuir a proyectos open source y compartir mis conocimientos con la comunidad de desarrolladores.",
            ].map((paragraph, index) => (
              <ParallaxWrapper key={index} speed={0.1 + index * 0.05} direction="up">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-effect p-3 rounded-lg"
                >
                  <motion.p className="text-gray-300 text-xs xs:text-sm sm:text-base">{paragraph}</motion.p>
                </motion.div>
              </ParallaxWrapper>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

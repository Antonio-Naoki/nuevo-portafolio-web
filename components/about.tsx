"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

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
      className="min-h-screen flex flex-col justify-center items-center py-16 sm:py-20 px-4 sm:px-6 md:px-8"
    >
      <motion.div
        style={{ opacity, y }}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
      >
        <div className="perspective-1000 mx-auto md:mx-0 w-full max-w-sm md:max-w-none">
          <motion.div
            className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] rounded-xl overflow-hidden transform-3d transition-transform duration-500 hover:rotate-y-10 hover:rotate-x-10 shadow-2xl"
            whileHover={{
              rotateY: 15,
              rotateX: 5,
              transition: { duration: 0.5 },
            }}
          >
            <Image
              src="https://i.postimg.cc/W3csXsyy/imag-2.jpg"
              alt="Antonio Morales"
              fill
              className="object-cover object-center"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
              <h3 className="text-xl sm:text-2xl font-bold text-white">Antonio Morales</h3>
            </div>
          </motion.div>
        </div>

        <div className="mt-8 md:mt-0">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent text-center md:text-left"
          >
            Sobre mí
          </motion.h2>

          <div className="space-y-3 sm:space-y-4">
            {[
              "Soy un desarrollador mobile apasionado por crear experiencias digitales excepcionales.",
              "Con más de 4 años de experiencia en el desarrollo de software, me especializo en tecnologías modernas como Flutter, Python y AI.",
              "Mi enfoque se centra en construir aplicaciones rápidas, accesibles y visualmente atractivas que resuelvan problemas reales.",
              "Cuando no estoy codificando, me gusta explorar nuevas tecnologías, contribuir a proyectos open source y compartir conocimientos con la comunidad de desarrolladores.",
            ].map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-gray-300 text-sm sm:text-base"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

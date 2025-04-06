"use client"

import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="relative py-12 px-4 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-20"
          style={{
            background:
              "linear-gradient(90deg, rgba(59,130,246,0.3) 0%, rgba(139,92,246,0.3) 50%, rgba(6,182,212,0.3) 100%)",
          }}
          animate={{
            y: [0, -15, 0],
            scaleX: [1, 1.1, 1],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-12"
          style={{
            background:
              "linear-gradient(90deg, rgba(59,130,246,0.4) 0%, rgba(139,92,246,0.4) 50%, rgba(6,182,212,0.4) 100%)",
          }}
          animate={{
            y: [0, -10, 0],
            scaleX: [1, 1.05, 1],
          }}
          transition={{
            duration: 4,
            delay: 0.5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-6"
          style={{
            background:
              "linear-gradient(90deg, rgba(59,130,246,0.5) 0%, rgba(139,92,246,0.5) 50%, rgba(6,182,212,0.5) 100%)",
          }}
          animate={{
            y: [0, -5, 0],
            scaleX: [1, 1.03, 1],
          }}
          transition={{
            duration: 3,
            delay: 1,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4 text-white">Antonio Morales</h3>
            <p className="text-gray-400 mb-4">
              Desarrollador de Software especializado en crear experiencias digitales excepcionales.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Enlaces rápidos</h4>
            <ul className="space-y-2">
              {["Inicio", "Sobre mí", "Proyectos", "Habilidades", "Contacto"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Servicios</h4>
            <ul className="space-y-2">
              {["Desarrollo Web", "Aplicaciones Móviles", "UI/UX Design", "Consultoría"].map((item) => (
                <li key={item}>
                  <a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>© {new Date().getFullYear()} Antonio Morales. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}


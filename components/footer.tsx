"use client"

import { motion } from "framer-motion"

export default function Footer() {
  // Función para manejar la navegación suave a las secciones
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="relative py-6 xs:py-7 sm:py-8 md:py-10 lg:py-12 px-4 sm:px-6 overflow-hidden bg-gray-100 dark:bg-transparent">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-10 xs:h-12 sm:h-14 md:h-16 lg:h-20"
          style={{
            background:
              "linear-gradient(90deg, rgba(59,130,246,0.3) 0%, rgba(139,92,246,0.3) 50%, rgba(6,182,212,0.3) 100%)",
          }}
          animate={{
            y: [0, -10, -15, 0],
            scaleX: [1, 1.05, 1.1, 1],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-6 xs:h-7 sm:h-8 md:h-10 lg:h-12"
          style={{
            background:
              "linear-gradient(90deg, rgba(59,130,246,0.4) 0%, rgba(139,92,246,0.4) 50%, rgba(6,182,212,0.4) 100%)",
          }}
          animate={{
            y: [0, -5, -10, 0],
            scaleX: [1, 1.03, 1.05, 1],
          }}
          transition={{
            duration: 4,
            delay: 0.5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-3 xs:h-3.5 sm:h-4 md:h-5 lg:h-6"
          style={{
            background:
              "linear-gradient(90deg, rgba(59,130,246,0.5) 0%, rgba(139,92,246,0.5) 50%, rgba(6,182,212,0.5) 100%)",
          }}
          animate={{
            y: [0, -3, -5, 0],
            scaleX: [1, 1.01, 1.03, 1],
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 xs:gap-5 sm:gap-6 md:gap-8">
          <div className="md:col-span-2">
            <h3 className="text-base xs:text-lg sm:text-xl font-bold mb-2 xs:mb-2.5 sm:mb-3 md:mb-4 text-gray-900 dark:text-white">
              Antonio Morales
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-3 xs:mb-4 text-[10px] xs:text-xs sm:text-sm">
              Desarrollador de Software especializado en crear experiencias digitales excepcionales.
            </p>
          </div>

          <div>
            <h4 className="text-sm xs:text-base sm:text-lg font-semibold mb-2 xs:mb-2.5 sm:mb-3 md:mb-4 text-gray-900 dark:text-white">
              Enlaces rápidos
            </h4>
            <ul className="space-y-1 xs:space-y-1.5 sm:space-y-2">
              {[
                { name: "Inicio", id: "hero" },
                { name: "Sobre mí", id: "about" },
                { name: "Proyectos", id: "projects" },
                { name: "Habilidades", id: "skills" },
                { name: "Contacto", id: "contact" },
              ].map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-[10px] xs:text-xs sm:text-sm text-left"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm xs:text-base sm:text-lg font-semibold mb-2 xs:mb-2.5 sm:mb-3 md:mb-4 text-gray-900 dark:text-white">
              Servicios
            </h4>
            <ul className="space-y-1 xs:space-y-1.5 sm:space-y-2">
              {["Desarrollo Web", "Aplicaciones Móviles", "UI/UX Design", "Consultoría"].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-[10px] xs:text-xs sm:text-sm text-left"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 xs:mt-7 sm:mt-8 md:mt-10 lg:mt-12 pt-4 xs:pt-5 sm:pt-6 md:pt-8 border-t border-gray-300 dark:border-gray-800 text-center text-gray-500 dark:text-gray-500">
          <p className="text-[10px] xs:text-xs sm:text-sm">
            © {new Date().getFullYear()} Antonio Morales. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

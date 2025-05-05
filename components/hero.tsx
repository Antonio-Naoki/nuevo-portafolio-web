"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import Image from "next/image"
import { useMediaQuery } from "@/hooks/use-media-query"

export default function Hero() {
  const [text, setText] = useState("")
  const fullText = "Antonio Morales"
  const [index, setIndex] = useState(0)
  const [activeIcon, setActiveIcon] = useState<string | null>(null)
  const isMobile = useMediaQuery("(max-width: 640px)")
  const isTablet = useMediaQuery("(max-width: 768px)")

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index])
        setIndex((prev) => prev + 1)
      }, 150)
      return () => clearTimeout(timeout)
    }
  }, [index])

  // Tecnologías para mostrar en el hero
  const technologies = [
    {
      name: "Flutter",
      icon: "https://imgs.search.brave.com/1ack4jU3uBX-FOTsAiyidYh_M3wxaXqJeevt9W5IxFw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9taXJv/Lm1lZGl1bS5jb20v/djIvMSo1LWFvSzhJ/Qm1YdmU1d2hCUU05/MEdBLnBuZw",
      color: "#027DFD",
    },
    {
      name: "Python",
      icon: "https://imgs.search.brave.com/QlI3VhMNt8Zz9vPnBVV5FeBBvMC6Af5jOgRFEfz3_jw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy1kb3dubG9hZC5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MTYvMTAvUHl0aG9u/X2xvZ29faWNvbi03/MDB4Njk3LnBuZw",
      color: "#FFD43B",
    },
    {
      name: "Firebase",
      icon: "https://imgs.search.brave.com/h8NLxguPIroQtmJ80y4WibxR8nfrsYIG_ZIJyG0676A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9taXJv/Lm1lZGl1bS5jb20v/djIvMSpEb2VKMFZM/dEowVFg5eVpkd19G/RmZnLnBuZw",
      color: "#FFCA28",
    },
    {
      name: "Android",
      icon: "https://imgs.search.brave.com/EuZUZ5Y0ZTr-hanJUbdTgr-QzPNyrDD_JL1LU5V9YTQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9j/L2MxL0FuZHJvaWRf/U3R1ZGlvX2ljb25f/KDIwMjMpLnN2Zw",
      color: "#3DDC84",
    },
    {
      name: "Git",
      icon: "https://imgs.search.brave.com/hHpm-bAKw7C2sZzlUCJrr6GUrl-fnWUWZjKMaJXV_o4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODQ3Zjk4MWNlZjEw/MTRjMGI1ZTQ4YmUu/cG5n",
      color: "#F05032",
    },
    // Nuevas tecnologías
    {
      name: "PostgreSQL",
      icon: "https://imgs.search.brave.com/qfSJQ0lZCWEWv9sY7i9iOYfFQ6Sf0N3XQjqJ2kB23Bk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8y/LzI5L1Bvc3RncmVz/cWxfZWxlcGhhbnQu/c3Zn",
      color: "#0078D4",
    },
    {
      name: "Docker",
      icon: "https://imgs.search.brave.com/G8i_afQAUJrPfFD6fKm5AQSmWNRN76ZRTPkR_V8uujo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG40/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvbG9nb3MtYW5k/LWJyYW5kcy81MTIv/OTdfRG9ja2VyX2xv/Z29fbG9nb3MtNTEy/LnBuZw",
      color: "#2496ED",
    },
    {
      name: "JavaScript",
      icon: "https://imgs.search.brave.com/hal1PgQLBcgo3zcQQYtiz_ydmTsNkJXQp0CWmPklOc4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMtMDAuaWNvbmR1/Y2suY29tL2Fzc2V0/cy4wMC9qYXZhc2Ny/aXB0LWpzLWljb24t/NTEyeDUxMi1xM2ln/d2xuNi5wbmc",
      color: "#F7DF1E",
    },
  ]

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center relative px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center w-full max-w-3xl mx-auto"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-2 sm:mb-4 px-2 break-words">
          {text}
          <span className="animate-pulse">|</span>
        </h1>
        <h2 className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Desarrollador de Software
        </h2>

        {/* Contenedor principal con padding para los tooltips */}
        <div className="px-2 py-4 mb-4 sm:mb-6 relative">
          {/* Iconos de tecnologías con efectos interactivos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex items-center justify-center gap-3 sm:gap-4 mx-auto"
          >
            {technologies.map((tech) => (
              <motion.div
                key={tech.name}
                className="relative w-7 h-7 xs:w-8 xs:h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 flex-shrink-0 cursor-pointer"
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.3 },
                }}
                whileTap={{
                  scale: 0.9,
                  transition: { duration: 0.3 },
                }}
                onClick={() => setActiveIcon(activeIcon === tech.name ? null : tech.name)}
              >
                <Image
                  src={tech.icon || "/placeholder.svg"}
                  alt={tech.name}
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                  unoptimized
                />

                {/* Efecto de pulso al hacer clic */}
                <AnimatePresence>
                  {activeIcon === tech.name && (
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0.8 }}
                      animate={{
                        scale: [1, 1.3, 1.5],
                        opacity: [0.7, 0.5, 0],
                      }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.6 }}
                      style={{ backgroundColor: tech.color }}
                      className="absolute inset-0 rounded-full z-[-1]"
                    />
                  )}
                </AnimatePresence>

                {/* Tooltip con el nombre de la tecnología */}
                <AnimatePresence>
                  {activeIcon === tech.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 5 }}
                      transition={{ duration: 0.2 }}
                      className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-[10px] xs:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded whitespace-nowrap z-10"
                    >
                      {tech.name}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}>
          <Button
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 xs:px-5 sm:px-6 md:px-8 py-3 xs:py-4 sm:py-5 md:py-6 rounded-full text-sm xs:text-base sm:text-lg"
            onClick={() => {
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            Ver proyectos
          </Button>
        </motion.div>
      </motion.div>
      <motion.div
        className="absolute bottom-4 xs:bottom-5 sm:bottom-6 md:bottom-8 lg:bottom-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
      >
        <ChevronDown
          size={isMobile ? 20 : isTablet ? 24 : 28}
          className="text-blue-400 cursor-pointer"
          onClick={() => {
            document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
          }}
        />
      </motion.div>
    </section>
  )
}

"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export default function Hero() {
  const [text, setText] = useState("")
  const fullText = "Antonio Morales"
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index])
        setIndex((prev) => prev + 1)
      }, 150)
      return () => clearTimeout(timeout)
    }
  }, [index])

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center relative px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center w-full max-w-3xl mx-auto"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-2 sm:mb-4 px-2">
          {text}
          <span className="animate-pulse">|</span>
        </h1>
        <h2 className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Desarrollador de Software
        </h2>
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}>
          <Button
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 sm:px-8 py-5 sm:py-6 rounded-full text-base sm:text-lg"
            onClick={() => {
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            Ver proyectos
          </Button>
        </motion.div>
      </motion.div>
      <motion.div
        className="absolute bottom-6 sm:bottom-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
      >
        <ChevronDown
          size={28}
          className="text-blue-400 cursor-pointer"
          onClick={() => {
            document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
          }}
        />
      </motion.div>
    </section>
  )
}

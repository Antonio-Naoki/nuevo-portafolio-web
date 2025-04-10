"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { Sun, Moon } from "lucide-react"

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-50 p-2 sm:p-3 rounded-full bg-gray-800/80 dark:bg-gray-700/80 text-yellow-500 dark:text-blue-400 backdrop-blur-sm border border-gray-700/50 dark:border-gray-600/50 shadow-lg"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label={`Cambiar a modo ${resolvedTheme === "dark" ? "claro" : "oscuro"}`}
      initial={false}
    >
      <motion.div
        initial={false}
        animate={{
          rotate: resolvedTheme === "dark" ? 0 : 180,
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 0.5 }}
      >
        {resolvedTheme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
      </motion.div>
    </motion.button>
  )
}

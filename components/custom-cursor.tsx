"use client"

import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const [clicked, setClicked] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [cursorColor, setCursorColor] = useState("rgba(255, 255, 255, 0.3)")
  const [cursorSize, setCursorSize] = useState(8) // Tamaño normal por defecto
  const cursorRef = useRef<HTMLDivElement>(null)
  const clickAnimationRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })

      // Detectar si el cursor está sobre un logo flotante
      const element = document.elementFromPoint(e.clientX, e.clientY)
      const logoElement = element?.closest("[data-logo-id]")

      if (logoElement) {
        const logoColor = logoElement.getAttribute("data-logo-color")
        if (logoColor) {
          setCursorColor(logoColor + "80") // Añadir transparencia (50%)
          setCursorSize(12) // Aumentar tamaño sobre logos
        }
      } else {
        setCursorColor("rgba(255, 255, 255, 0.3)")
        setCursorSize(8) // Tamaño normal
      }
    }

    const handleMouseDown = () => {
      setClicked(true)
      setTimeout(() => setClicked(false), 300)
    }

    const handleMouseLeave = () => {
      setHidden(true)
    }

    const handleMouseEnter = () => {
      setHidden(false)
    }

    // Detectar dispositivos táctiles
    const isTouchDevice = () => {
      return "ontouchstart" in window || navigator.maxTouchPoints > 0
    }

    // Solo aplicar en dispositivos no táctiles
    if (!isTouchDevice()) {
      document.addEventListener("mousemove", updatePosition)
      document.addEventListener("mousedown", handleMouseDown)
      document.addEventListener("mouseleave", handleMouseLeave)
      document.addEventListener("mouseenter", handleMouseEnter)
    } else {
      setHidden(true) // Ocultar en dispositivos táctiles
    }

    return () => {
      document.removeEventListener("mousemove", updatePosition)
      document.removeEventListener("mousedown", handleMouseDown)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mouseenter", handleMouseEnter)
    }
  }, [])

  if (hidden) return null

  return (
    <>
      <motion.div
        ref={cursorRef}
        className="fixed rounded-full pointer-events-none z-50 mix-blend-difference custom-cursor"
        style={{
          left: position.x,
          top: position.y,
          backgroundColor: cursorColor,
          transform: "translate(-50%, -50%)",
          width: `${cursorSize}px`,
          height: `${cursorSize}px`,
        }}
        animate={{
          scale: clicked ? 0.8 : 1,
          width: `${cursorSize}px`,
          height: `${cursorSize}px`,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      />
      <AnimatePresence>
        {clicked && (
          <motion.div
            ref={clickAnimationRef}
            className="fixed rounded-full pointer-events-none z-40 custom-cursor"
            style={{
              left: position.x,
              top: position.y,
              backgroundColor: cursorColor,
              transform: "translate(-50%, -50%)",
            }}
            initial={{ scale: 0, opacity: 0.5, width: `${cursorSize}px`, height: `${cursorSize}px` }}
            animate={{ scale: 4, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        )}
      </AnimatePresence>
    </>
  )
}

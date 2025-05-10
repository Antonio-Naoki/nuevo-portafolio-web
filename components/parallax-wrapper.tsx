"use client"

import { type ReactNode, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface ParallaxProps {
  children: ReactNode
  speed?: number // Velocidad del efecto parallax (negativo = más lento, positivo = más rápido)
  className?: string
  direction?: "up" | "down" | "left" | "right"
  offset?: [number, number] // Rango de offset para el scroll
  outputRange?: [number, number] // Rango de salida para la transformación
}

export default function ParallaxWrapper({
  children,
  speed = 0.5,
  className = "",
  direction = "up",
  offset = ["start end", "end start"],
  outputRange = [-100, 100],
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset,
  })

  const defaultTransform = useTransform(scrollYProgress, [0, 1], [outputRange[1] * speed, outputRange[0] * speed])
  const defaultTransformInverse = useTransform(
    scrollYProgress,
    [0, 1],
    [outputRange[0] * speed, outputRange[1] * speed],
  )

  // Determinar qué propiedad transformar basado en la dirección
  let transform
  switch (direction) {
    case "up":
      transform = defaultTransform
      break
    case "down":
      transform = defaultTransformInverse
      break
    case "left":
      transform = defaultTransform
      break
    case "right":
      transform = defaultTransformInverse
      break
    default:
      transform = defaultTransform
  }

  // Aplicar la transformación adecuada
  const style = {
    y: direction === "up" || direction === "down" ? transform : 0,
    x: direction === "left" || direction === "right" ? transform : 0,
  }

  return (
    <motion.div ref={ref} style={style} className={className}>
      {children}
    </motion.div>
  )
}

"use client"

import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

type Logo = {
  id: string
  src: string
  alt: string
  color: string
  size: { width: number; height: number }
  position: { x: number; y: number }
  rotation: number
  opacity: number
  velocity: { x: number; y: number }
  rotationSpeed: number
  isClicked: boolean
}

export default function FloatingLogos() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [logos, setLogos] = useState<Logo[]>([])
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 })
  const animationRef = useRef<number>()

  // Inicializar logos
  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const rect = container.getBoundingClientRect()
    setContainerSize({ width: rect.width, height: rect.height })

    const initialLogos: Logo[] = [
      {
        id: "flutter",
        src: "https://imgs.search.brave.com/1ack4jU3uBX-FOTsAiyidYh_M3wxaXqJeevt9W5IxFw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9taXJv/Lm1lZGl1bS5jb20v/djIvMSo1LWFvSzhJ/Qm1YdmU1d2hCUU05/MEdBLnBuZw",
        alt: "Flutter Logo",
        color: "#027DFD",
        size: { width: 60, height: 60 },
        position: { x: Math.random() * rect.width * 0.8, y: Math.random() * rect.height * 0.8 },
        rotation: Math.random() * 360,
        opacity: 0.8 + Math.random() * 0.2,
        velocity: {
          x: (Math.random() - 0.5) * 0.5,
          y: (Math.random() - 0.5) * 0.5,
        },
        rotationSpeed: (Math.random() - 0.5) * 0.2,
        isClicked: false,
      },
      {
        id: "python",
        src: "https://imgs.search.brave.com/QlI3VhMNt8Zz9vPnBVV5FeBBvMC6Af5jOgRFEfz3_jw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy1kb3dubG9hZC5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MTYvMTAvUHl0aG9u/X2xvZ29faWNvbi03/MDB4Njk3LnBuZw",
        alt: "Python Logo",
        color: "#FFD43B",
        size: { width: 60, height: 60 },
        position: { x: Math.random() * rect.width * 0.8, y: Math.random() * rect.height * 0.8 },
        rotation: Math.random() * 360,
        opacity: 0.8 + Math.random() * 0.2,
        velocity: {
          x: (Math.random() - 0.5) * 0.5,
          y: (Math.random() - 0.5) * 0.5,
        },
        rotationSpeed: (Math.random() - 0.5) * 0.2,
        isClicked: false,
      },
      {
        id: "firebase",
        src: "https://imgs.search.brave.com/h8NLxguPIroQtmJ80y4WibxR8nfrsYIG_ZIJyG0676A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9taXJv/Lm1lZGl1bS5jb20v/djIvMSpEb2VKMFZM/dEowVFg5eVpkd19G/RmZnLnBuZw",
        alt: "Firebase Logo",
        color: "#FFCA28",
        size: { width: 60, height: 60 },
        position: { x: Math.random() * rect.width * 0.8, y: Math.random() * rect.height * 0.8 },
        rotation: Math.random() * 360,
        opacity: 0.8 + Math.random() * 0.2,
        velocity: {
          x: (Math.random() - 0.5) * 0.5,
          y: (Math.random() - 0.5) * 0.5,
        },
        rotationSpeed: (Math.random() - 0.5) * 0.2,
        isClicked: false,
      },
      // Nuevo logo de Android
      {
        id: "android",
        src: "https://imgs.search.brave.com/EuZUZ5Y0ZTr-hanJUbdTgr-QzPNyrDD_JL1LU5V9YTQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9j/L2MxL0FuZHJvaWRf/U3R1ZGlvX2ljb25f/KDIwMjMpLnN2Zw",
        alt: "Android Logo",
        color: "#3DDC84",
        size: { width: 60, height: 60 },
        position: { x: Math.random() * rect.width * 0.8, y: Math.random() * rect.height * 0.8 },
        rotation: Math.random() * 360,
        opacity: 0.8 + Math.random() * 0.2,
        velocity: {
          x: (Math.random() - 0.5) * 0.5,
          y: (Math.random() - 0.5) * 0.5,
        },
        rotationSpeed: (Math.random() - 0.5) * 0.2,
        isClicked: false,
      },
      // Nuevo logo de Git
      {
        id: "git",
        src: "https://imgs.search.brave.com/hHpm-bAKw7C2sZzlUCJrr6GUrl-fnWUWZjKMaJXV_o4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODQ3Zjk4MWNlZjEw/MTRjMGI1ZTQ4YmUu/cG5n",
        alt: "Git Logo",
        color: "#F05032",
        size: { width: 60, height: 60 },
        position: { x: Math.random() * rect.width * 0.8, y: Math.random() * rect.height * 0.8 },
        rotation: Math.random() * 360,
        opacity: 0.8 + Math.random() * 0.2,
        velocity: {
          x: (Math.random() - 0.5) * 0.5,
          y: (Math.random() - 0.5) * 0.5,
        },
        rotationSpeed: (Math.random() - 0.5) * 0.2,
        isClicked: false,
      },
    ]

    setLogos(initialLogos)

    // Ajustar tamaño del contenedor en resize
    const handleResize = () => {
      if (!containerRef.current) return
      const newRect = containerRef.current.getBoundingClientRect()
      setContainerSize({ width: newRect.width, height: newRect.height })
    }

    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  // Función para manejar el clic en un logo
  const handleLogoClick = (logoId: string) => {
    setLogos((prevLogos) =>
      prevLogos.map((logo) => {
        if (logo.id === logoId) {
          // Cambiar dirección y velocidad aleatoriamente
          const speedMultiplier = 1.5 + Math.random() * 0.5 // Velocidad entre 1.5x y 2x
          return {
            ...logo,
            velocity: {
              x: (Math.random() - 0.5) * speedMultiplier,
              y: (Math.random() - 0.5) * speedMultiplier,
            },
            rotationSpeed: (Math.random() - 0.5) * 0.4, // Rotación más rápida
            isClicked: true, // Marcar como clickeado para la animación
          }
        }
        return logo
      }),
    )

    // Resetear el estado de "clickeado" después de la animación
    setTimeout(() => {
      setLogos((prevLogos) =>
        prevLogos.map((logo) => {
          if (logo.id === logoId) {
            return {
              ...logo,
              isClicked: false,
            }
          }
          return logo
        }),
      )
    }, 500)
  }

  // Animar logos
  useEffect(() => {
    if (logos.length === 0 || containerSize.width === 0) return

    const animate = () => {
      setLogos((prevLogos) =>
        prevLogos.map((logo) => {
          // Calcular nueva posición
          let newX = logo.position.x + logo.velocity.x
          let newY = logo.position.y + logo.velocity.y
          let newVelocityX = logo.velocity.x
          let newVelocityY = logo.velocity.y

          // Rebotar en los bordes
          const padding = 20
          if (newX <= padding || newX >= containerSize.width - logo.size.width - padding) {
            newVelocityX = -newVelocityX
            newX = newX <= padding ? padding : containerSize.width - logo.size.width - padding
          }
          if (newY <= padding || newY >= containerSize.height - logo.size.height - padding) {
            newVelocityY = -newVelocityY
            newY = newY <= padding ? padding : containerSize.height - logo.size.height - padding
          }

          // Actualizar rotación
          const newRotation = (logo.rotation + logo.rotationSpeed) % 360

          // Fluctuar opacidad suavemente
          const newOpacity = 0.7 + Math.sin(Date.now() * 0.001) * 0.2

          return {
            ...logo,
            position: { x: newX, y: newY },
            velocity: { x: newVelocityX, y: newVelocityY },
            rotation: newRotation,
            opacity: newOpacity,
          }
        }),
      )

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [logos, containerSize])

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none z-10" aria-hidden="true">
      {logos.map((logo) => (
        <motion.div
          key={logo.id}
          className="absolute pointer-events-auto floating-logo cursor-pointer"
          style={{
            left: logo.position.x,
            top: logo.position.y,
            opacity: logo.opacity,
            rotate: logo.rotation,
            width: logo.size.width,
            height: logo.size.height,
          }}
          data-logo-id={logo.id}
          data-logo-color={logo.color}
          onClick={() => handleLogoClick(logo.id)}
          animate={{
            scale: logo.isClicked ? [1, 1.2, 1] : 1,
            filter: logo.isClicked ? ["brightness(1)", "brightness(1.5)", "brightness(1)"] : "brightness(1)",
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
        >
          <Image
            src={logo.src || "/placeholder.svg"}
            alt={logo.alt}
            width={logo.size.width}
            height={logo.size.height}
            className="w-full h-full object-contain"
            unoptimized
            draggable={false}
          />
        </motion.div>
      ))}
    </div>
  )
}

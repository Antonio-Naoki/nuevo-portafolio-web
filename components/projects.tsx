"use client"

import { useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Github } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "DigiMedApp",
    description: "Sistema de gestión de consultas médicas con integración de IA para diagnóstico predictivo.",
    image: "https://i.postimg.cc/gcMmCWJC/img-2.jpg",
    technologies: ["Flutter", "Firebase", "GraphQL", "IA"],
    github: "https://github.com/Antonio-Naoki/digimedapp",
    live: "#",
    type: "Aplicación móvil (Flutter)",
    featured: true,
  },
  {
    id: 2,
    title: "Nuevo Portafolio Web",
    description: "Versión actualizada de mi portafolio personal con diseño moderno y tecnologías de vanguardia.",
    image: "https://i.postimg.cc/wv5grS8j/mg-3.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/Antonio-Naoki/nuevo-portafolio-web",
    live: "#",
    type: "Aplicación web (Next.js)",
    featured: false,
  },
  {
    id: 3,
    title: "Priver Movie App",
    description: "Catálogo de películas con datos consumidos de una API externa.",
    image:
      "https://s3-figma-hubfile-images-production.figma.com/hub/file/carousel/img/000d6547b05342ab3f85af7810d0c11cb3b3cc72",
    technologies: ["Flutter", "REST API"],
    github: "https://github.com/Antonio-Naoki/priver_movie_app",
    live: "#",
    type: "Aplicación móvil (Flutter)",
  },
  {
    id: 4,
    title: "Cerdo App",
    description: "Calcula el peso de cerdos sin balanza usando algoritmos basados en medidas corporales.",
    image:
      "https://imgs.search.brave.com/ARGAfmPr8nh9B7792t2Cbd0r5GzZm58Z1uFthZ5zSUw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzMxLzM3/L2JiLzMxMzdiYjIx/NzRmMWU4ZjQ1ZDIz/ZWQwNWU1ODk2MWEw/LmpwZw",
    technologies: ["Flutter", "Firebase"],
    github: "https://github.com/Antonio-Naoki/cerdo_app",
    live: "#",
    type: "Aplicación móvil (Flutter)",
  },
  {
    id: 5,
    title: "Dolar Estado VE",
    description: "Extrae y muestra tasas de cambio del dólar (BCV y paralelo) en tiempo real.",
    image:
      "https://imgs.search.brave.com/jgxufkBD-A3mGcqRzKNOb8G0VREazbQEtVEqhd169Q0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTUy/MjI0MDE4MS9waG90/by91cy0xLWRvbGxh/ci1iaWxsLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1BTXZQ/S1I0MmNHN1RWWS14/VTBpOTk1TFpxUmN0/UjZRTG1OcUM3VHdj/RERFPQ",
    technologies: ["Python", "BeautifulSoup", "Requests"],
    github: "https://github.com/Antonio-Naoki/dolar_estado_ve",
    live: "#",
    type: "Web scraping (Python)",
  },
  {
    id: 6,
    title: "Filter Emails",
    description: "Limpia y formatea archivos Excel (.xlsx) para gestión de correos masivos.",
    image:
      "https://imgs.search.brave.com/L0uDTnOBUPxkY5Voip1y-SfZ_4LDBziiQN1vPQL4B98/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTYw/OTQ4NzMxL3Bob3Rv/L2tleWJvYXJkLW1l/c3NhZ2UtbWFpbC5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/REhubzNNX2NQSUd4/cjhRdHA4M0tSVmVB/VXIxRjFPSDRaa0xV/TFhqWGtWWT0",
    technologies: ["Flask", "Firebase", "Pandas"],
    github: "https://github.com/Antonio-Naoki/filter-emails",
    live: "#",
    type: "Aplicación web (Python)",
  },
]

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1])
  const y = useTransform(scrollYProgress, [0, 0.2], [100, 0])

  return (
    <section
      id="projects"
      ref={ref}
      className="min-h-screen py-16 sm:py-20 px-4 sm:px-6 md:px-8 bg-white dark:bg-transparent"
    >
      <motion.div style={{ opacity, y }} className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
        >
          Proyectos
        </motion.h2>

        {/* Featured Project */}
        {projects
          .filter((p) => p.featured)
          .map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-10 sm:mb-16"
            >
              <div className="bg-gray-100/80 dark:bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-300 dark:border-gray-800 hover:border-blue-500/50 transition-all duration-300 shadow-md">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div className="relative h-56 sm:h-64 md:h-auto order-1">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-blue-600 text-white">Destacado</Badge>
                    </div>
                  </div>
                  <div className="p-4 sm:p-6 flex flex-col justify-center order-2">
                    <div className="mb-2">
                      <Badge variant="outline" className="bg-purple-900/20 text-purple-400 border-purple-500/30">
                        {project.type}
                      </Badge>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">{project.title}</h3>
                    <p className="text-gray-400 mb-4 text-sm sm:text-base">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="bg-blue-900/20 text-blue-400 border-blue-500/30">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex space-x-4">
                      <a
                        href={project.github}
                        className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub Repository"
                      >
                        <Github size={18} className="sm:w-5 sm:h-5" />
                        <span className="text-sm sm:text-base">Ver código</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

        {/* Other Projects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {projects
            .filter((p) => !p.featured)
            .map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
        </div>
      </motion.div>
    </section>
  )
}

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-blue-500/50 transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -10 }}
    >
      <div className="relative h-40 sm:h-48 overflow-hidden">
        <motion.div
          style={{
            y: isHovered ? -10 : 0,
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0"
        >
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover"
            unoptimized
          />
        </motion.div>
        <div className="absolute top-4 left-4">
          <Badge variant="outline" className="bg-purple-900/20 text-purple-400 border-purple-500/30 text-xs sm:text-sm">
            {project.type}
          </Badge>
        </div>
      </div>

      <div className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-bold mb-2 text-white">{project.title}</h3>
        <p className="text-gray-400 mb-4 text-xs sm:text-sm">{project.description}</p>

        <div className="flex flex-wrap gap-1 sm:gap-2 mb-4">
          {project.technologies.map((tech) => (
            <Badge
              key={tech}
              variant="outline"
              className="bg-blue-900/20 text-blue-400 border-blue-500/30 text-xs sm:text-sm"
            >
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex space-x-4">
          <a
            href={project.github}
            className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Repository"
          >
            <Github size={16} className="sm:w-5 sm:h-5" />
            <span className="text-xs sm:text-sm">Ver código</span>
          </a>
        </div>
      </div>
    </motion.div>
  )
}

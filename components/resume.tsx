"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Download, FileText, BookOpen, Briefcase, Globe, Code } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Resume() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1])
  const y = useTransform(scrollYProgress, [0, 0.2], [100, 0])

  const resumeItems = [
    {
      category: "Experiencia",
      icon: <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" />,
      items: [
        {
          title: "Desarrollador de Software",
          place: "CERATER (Torre Movistar), La Viña, Valencia, Venezuela",
          date: "2025 - Actualidad",
          description:
            "Configuración y mantenimiento de Active Directory, Windows Server. Creación de aplicaciones Web y Mobile. Administración de Odoo.sh.",
        },
        {
          title: "Desarrollador Python Freelance",
          place: "Grupo Magia Digital TV, Valencia, Venezuela",
          date: "2024 - 2025",
          description:
            "Automatización de procesos, scripting y desarrollo de herramientas para optimizar flujos de trabajo. Web scraping. Manejo y configuración de Odoo.sh.",
        },
        {
          title: "Programador de Aplicaciones",
          place: "Voluntariado San José, Tocuyito, Venezuela",
          date: "2023 - 2024",
          description:
            "Desarrollo de un Sistema de Inscripción a Talleres. Uso de Tecnologías como ASP.NET, Razor, C#, SQL Server. Diseño de la Interfaz Gráfica.",
        },
        {
          title: "Desarrollador Mobile | Flutter",
          place: "Grupo Priver, Valencia, Naguanagua, Venezuela",
          date: "2015 - 2017",
          description:
            "Desarrollo de una App médica para el control de pacientes. Uso de tecnologías como Dart, Flutter, GraphQL, Freezed y Firebase. Despliegue en Play Store.",
        },
      ],
    },
    {
      category: "Educación",
      icon: <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-purple-500" />,
      items: [
        {
          title: "Estudios TSU en Informática",
          place: "Universidad IUTEPAL",
          date: "2021 - 2024",
          description: "Culminado",
        },
        {
          title: "Hacking Ético: Offensive and Defensive",
          place: "ExorciseThat Global Cibersecurity",
          date: "2024",
          description: "Culminado",
        },
      ],
    },
    {
      category: "Habilidades",
      icon: <Code className="w-5 h-5 sm:w-6 sm:h-6 text-green-500" />,
      items: [
        {
          title: "Desarrollo Mobile",
          place: "",
          date: "",
          description: "Flutter, Firebase, GraphQL, Clean Architecture",
        },
        {
          title: "Desarrollo Web",
          place: "",
          date: "",
          description: "HTML, CSS, JavaScript, SQL, Python",
        },
        {
          title: "Seguridad",
          place: "",
          date: "",
          description: "Ciberseguridad, Testing",
        },
      ],
    },
    {
      category: "Idiomas",
      icon: <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500" />,
      items: [
        {
          title: "Español",
          place: "",
          date: "",
          description: "Nativo",
        },
        {
          title: "Inglés",
          place: "",
          date: "",
          description: "Intermedio",
        },
      ],
    },
  ]

  return (
    <section
      id="resume"
      ref={ref}
      className="min-h-screen py-16 sm:py-20 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-black"
    >
      <motion.div style={{ opacity, y }} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Mi Curriculum
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            Un resumen de mi experiencia profesional, educación y habilidades. Descarga mi CV completo para más
            detalles.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 h-[500px] sm:h-[600px] relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-center">
                <FileText className="w-16 h-16 sm:w-20 sm:h-20 text-white mx-auto mb-4 opacity-80" />
                <h3 className="text-white text-xl sm:text-2xl font-bold mb-4">CV Antonio Morales</h3>
                <Button
                  asChild
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-full"
                >
                  <a
                    href="/cv-antonio-morales.pdf"
                    download="CV-Antonio-Morales.pdf"
                    className="inline-flex items-center gap-2"
                  >
                    <Download className="w-5 h-5" />
                    Descargar CV
                  </a>
                </Button>
              </div>
              <div className="w-full h-full bg-gray-100 dark:bg-gray-900 opacity-30">
                <div className="w-full h-full flex items-center justify-center">
                  <FileText className="w-32 h-32 text-gray-400 dark:text-gray-600 opacity-20" />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8"
          >
            {resumeItems.map((section, sectionIndex) => (
              <div key={section.category}>
                <div className="flex items-center gap-2 mb-4">
                  {section.icon}
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">{section.category}</h3>
                </div>
                <div className="space-y-4">
                  {section.items.map((item, itemIndex) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 * itemIndex + 0.5 }}
                      viewport={{ once: true }}
                      className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm p-4 sm:p-5 rounded-lg border border-gray-200 dark:border-gray-700"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                          {item.title}
                        </h4>
                        {item.date && (
                          <span className="text-xs sm:text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 py-1 px-2 rounded">
                            {item.date}
                          </span>
                        )}
                      </div>
                      {item.place && (
                        <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm mb-1">{item.place}</p>
                      )}
                      <p className="text-gray-500 dark:text-gray-500 text-xs sm:text-sm">{item.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm sm:text-base">
            ¿Interesado en mi experiencia completa y habilidades detalladas?
          </p>
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 rounded-full"
          >
            <a
              href="/cv-antonio-morales.pdf"
              download="CV-Antonio-Morales.pdf"
              className="inline-flex items-center gap-2 text-base sm:text-lg"
            >
              <Download className="w-5 h-5 sm:w-6 sm:h-6" />
              Descargar CV Completo
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}

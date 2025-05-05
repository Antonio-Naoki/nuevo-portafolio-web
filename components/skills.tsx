"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const skills = [
  {
    category: "Desarrollo Móvil",
    items: [
      { name: "Flutter", level: 90 },
      { name: "Dart", level: 85 },
      { name: "Android Studio", level: 80 },
    ],
  },
  {
    category: "Desarrollo Web & Backend",
    items: [
      { name: "Python", level: 85 },
      { name: "Flask", level: 80 },
      { name: "Django", level: 60 },
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "GraphQL", level: 80 },
      { name: "REST API", level: 85 },
    ],
  },
  {
    category: "Database & DevOps",
    items: [
      { name: "Firebase", level: 80 },
      { name: "PostgreSQL", level: 85 },
      { name: "Git/GitHub", level: 90 },
      { name: "Docker", level: 75 },
    ],
  },
]

const iconMap: Record<string, string> = {
  Flutter: "devicon-flutter-plain",
  Dart: "devicon-dart-plain",
  "Android Studio": "devicon-android-plain",
  Python: "devicon-python-plain",
  Flask: "devicon-flask-original",
  Django: "devicon-django-plain",
  HTML: "devicon-html5-plain",
  CSS: "devicon-css3-plain",
  GraphQL: "devicon-graphql-plain",
  "REST API": "devicon-nodejs-plain",
  Firebase: "devicon-firebase-plain",
  PostgreSQL: "devicon-postgresql-plain",
  "Git/GitHub": "devicon-github-original",
  Docker: "devicon-docker-plain",
}

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1])
  const y = useTransform(scrollYProgress, [0, 0.2], [100, 0])

  return (
    <section
      id="skills"
      ref={ref}
      className="min-h-screen py-12 xs:py-14 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-black"
    >
      <motion.div style={{ opacity, y }} className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold mb-6 xs:mb-7 sm:mb-8 md:mb-10 lg:mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
        >
          Habilidades
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-5 sm:gap-6 md:gap-8">
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/80 dark:bg-gray-900/50 backdrop-blur-sm rounded-xl p-3 xs:p-4 sm:p-5 md:p-6 border border-gray-300 dark:border-gray-800 shadow-md"
            >
              <h3 className="text-base xs:text-lg sm:text-xl font-bold mb-3 xs:mb-4 sm:mb-5 md:mb-6 text-center text-blue-600 dark:text-blue-400">
                {skillGroup.category}
              </h3>

              <div className="space-y-3 xs:space-y-4 sm:space-y-5 md:space-y-6">
                {skillGroup.items.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1.5 xs:mb-2">
                      <div className="flex items-center">
                        <motion.i
                          className={`${iconMap[skill.name] || "devicon-javascript-plain"} text-base xs:text-lg sm:text-xl md:text-2xl mr-1.5 xs:mr-2 text-blue-600 dark:text-blue-500`}
                          animate={{
                            y: [0, -5, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            delay: index * 0.2,
                          }}
                        ></motion.i>
                        <span className="text-xs xs:text-sm sm:text-base text-gray-800 dark:text-gray-200">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-[10px] xs:text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <motion.div
                      className="h-1 xs:h-1.5 sm:h-2 bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden"
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-600"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                        viewport={{ once: true }}
                      ></motion.div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

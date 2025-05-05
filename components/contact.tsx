"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  MapPin,
  Phone,
  MessageSquare,
  Loader2,
  CheckCircle,
  XCircle,
} from "lucide-react"
import emailjs from "@emailjs/browser"

// Tipo para la configuración de EmailJS
type EmailJSConfig = {
  publicKey: string
  serviceId: string
  templateId: string
}

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLFormElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1])
  const y = useTransform(scrollYProgress, [0, 0.2], [100, 0])

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  })

  const [errors, setErrors] = useState({
    user_name: "",
    user_email: "",
    message: "",
  })

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")
  const [emailJSConfig, setEmailJSConfig] = useState<EmailJSConfig | null>(null)
  const [configLoaded, setConfigLoaded] = useState(false)

  // Cargar la configuración de EmailJS de forma segura
  useEffect(() => {
    async function loadEmailJSConfig() {
      try {
        const response = await fetch("/api/emailjs-config")
        const data = await response.json()
        setEmailJSConfig(data)

        // Inicializar EmailJS con la clave pública
        if (data.publicKey) {
          emailjs.init(data.publicKey)
        }
      } catch (error) {
        console.error("Error al cargar la configuración de EmailJS:", error)
      } finally {
        setConfigLoaded(true)
      }
    }

    loadEmailJSConfig()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Real-time validation
    validateField(name, value)
  }

  const validateField = (name: string, value: string) => {
    let error = ""

    switch (name) {
      case "user_name":
        if (!value.trim()) error = "El nombre es requerido"
        break
      case "user_email":
        if (!value.trim()) {
          error = "El email es requerido"
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          error = "Email inválido"
        }
        break
      case "message":
        if (!value.trim()) error = "El mensaje es requerido"
        break
      default:
        break
    }

    setErrors((prev) => ({ ...prev, [name]: error }))
    return !error
  }

  const validateForm = () => {
    const nameValid = validateField("user_name", formData.user_name)
    const emailValid = validateField("user_email", formData.user_email)
    const messageValid = validateField("message", formData.message)

    return nameValid && emailValid && messageValid
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    try {
      setStatus("loading")
      setErrorMessage("")

      // Verificar si las credenciales están configuradas
      if (!emailJSConfig?.publicKey || !emailJSConfig?.serviceId || !emailJSConfig?.templateId) {
        throw new Error(
          "Las credenciales de EmailJS no están configuradas correctamente. Por favor, configura las variables de entorno.",
        )
      }

      // Enviar el email usando EmailJS directamente desde el cliente
      const result = await emailjs.sendForm(emailJSConfig.serviceId, emailJSConfig.templateId, formRef.current!)

      console.log("Email enviado:", result.text)
      setStatus("success")

      // Reset form
      setFormData({
        user_name: "",
        user_email: "",
        message: "",
      })

      // Volver al estado inicial después de 5 segundos
      setTimeout(() => {
        setStatus("idle")
      }, 5000)
    } catch (error) {
      console.error("Error al enviar email:", error)
      setStatus("error")

      // Mostrar mensaje de error más descriptivo
      if (error instanceof Error) {
        setErrorMessage(error.message)
      } else {
        setErrorMessage("Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.")
      }

      // Volver al estado inicial después de 5 segundos
      setTimeout(() => {
        setStatus("idle")
        setErrorMessage("")
      }, 5000)
    }
  }

  return (
    <section
      id="contact"
      ref={ref}
      className="min-h-screen py-12 xs:py-14 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-white dark:bg-transparent"
    >
      <motion.div style={{ opacity, y }} className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold mb-6 xs:mb-7 sm:mb-8 md:mb-10 lg:mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
        >
          Contacto
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xs:gap-7 sm:gap-8 md:gap-10 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg xs:text-xl sm:text-2xl font-bold mb-3 xs:mb-4 sm:mb-5 md:mb-6 text-blue-600 dark:text-blue-400">
              Ponte en contacto
            </h3>

            <div className="space-y-3 xs:space-y-4 sm:space-y-5 md:space-y-6">
              <div className="flex items-center space-x-3 xs:space-x-4">
                <div className="bg-blue-100 dark:bg-blue-500/20 p-1.5 xs:p-2 sm:p-2.5 md:p-3 rounded-full flex-shrink-0">
                  <Mail className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-medium text-xs xs:text-sm sm:text-base text-gray-900 dark:text-white">Email</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-[10px] xs:text-xs sm:text-sm">
                    antoniomorale111@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3 xs:space-x-4">
                <div className="bg-blue-100 dark:bg-blue-500/20 p-1.5 xs:p-2 sm:p-2.5 md:p-3 rounded-full flex-shrink-0">
                  <Phone className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-medium text-xs xs:text-sm sm:text-base text-gray-900 dark:text-white">
                    Teléfono
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-[10px] xs:text-xs sm:text-sm">+58 414-4026495</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 xs:space-x-4">
                <div className="bg-blue-100 dark:bg-blue-500/20 p-1.5 xs:p-2 sm:p-2.5 md:p-3 rounded-full flex-shrink-0">
                  <MapPin className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-medium text-xs xs:text-sm sm:text-base text-gray-900 dark:text-white">
                    Ubicación
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-[10px] xs:text-xs sm:text-sm">
                    Valencia, Venezuela
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 xs:mt-5 sm:mt-6 md:mt-8">
              <h4 className="text-base xs:text-lg sm:text-xl font-bold mb-2 xs:mb-2.5 sm:mb-3 md:mb-4 text-gray-900 dark:text-white">
                Sígueme
              </h4>
              <div className="flex flex-wrap gap-2 xs:gap-2.5 sm:gap-3 md:gap-4">
                {[
                  {
                    icon: <Github size={14} className="xs:w-4 xs:h-4 sm:w-5 sm:h-5" />,
                    url: "https://github.com/Antonio-Naoki",
                    label: "GitHub",
                  },
                  {
                    icon: <Linkedin size={14} className="xs:w-4 xs:h-4 sm:w-5 sm:h-5" />,
                    url: "https://www.linkedin.com/in/antonio-morales-23b781266",
                    label: "LinkedIn",
                  },
                  {
                    icon: <Instagram size={14} className="xs:w-4 xs:h-4 sm:w-5 sm:h-5" />,
                    url: "https://www.instagram.com/antoniomorales2129?igsh=YzljYTk1ODg3Zg==",
                    label: "Instagram",
                  },
                  {
                    icon: <MessageSquare size={14} className="xs:w-4 xs:h-4 sm:w-5 sm:h-5" />,
                    url: "https://wa.me/584144026495",
                    label: "WhatsApp",
                  },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    className="bg-gray-200 dark:bg-gray-800 p-1.5 xs:p-2 sm:p-2.5 md:p-3 rounded-full text-gray-700 dark:text-gray-400 hover:text-white hover:bg-blue-600 transition-colors duration-300"
                    whileHover={{ y: -5 }}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="mt-4 xs:mt-5 sm:mt-6 md:mt-8 h-36 xs:h-40 sm:h-48 md:h-64 rounded-xl overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d251637.95196238213!2d-68.14138595!3d10.1579729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e8067c3f0c2c8f3%3A0xc215e1d4d5bdc835!2sValencia%2C%20Carabobo%2C%20Venezuela!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps"
              ></iframe>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white/80 dark:bg-gray-900/50 backdrop-blur-sm rounded-xl p-3 xs:p-4 sm:p-5 md:p-6 lg:p-8 border border-gray-300 dark:border-gray-800 shadow-md"
          >
            <h3 className="text-lg xs:text-xl sm:text-2xl font-bold mb-3 xs:mb-4 sm:mb-5 md:mb-6 text-blue-600 dark:text-blue-400">
              Envíame un mensaje
            </h3>

            {!configLoaded ? (
              <div className="flex justify-center items-center py-6 xs:py-7 sm:py-8">
                <Loader2 className="h-6 w-6 xs:h-7 xs:w-7 sm:h-8 sm:w-8 animate-spin text-blue-500" />
              </div>
            ) : !emailJSConfig?.publicKey ? (
              <div className="mb-4 xs:mb-5 sm:mb-6 p-3 xs:p-4 bg-yellow-100 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-md text-yellow-800 dark:text-yellow-400">
                <p className="font-medium mb-1 xs:mb-2 text-xs xs:text-sm">⚠️ Configuración pendiente</p>
                <p className="text-[10px] xs:text-xs sm:text-sm">
                  Para activar el formulario de contacto, necesitas configurar las variables de entorno de EmailJS.
                </p>
              </div>
            ) : (
              <>
                {status === "success" && (
                  <div className="mb-4 xs:mb-5 sm:mb-6 p-3 xs:p-4 bg-green-100 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-md flex items-center gap-1.5 xs:gap-2 text-green-800 dark:text-green-400 text-xs xs:text-sm">
                    <CheckCircle size={16} className="xs:w-5 xs:h-5" />
                    <p>¡Mensaje enviado con éxito! Gracias por contactarme.</p>
                  </div>
                )}

                {status === "error" && (
                  <div className="mb-4 xs:mb-5 sm:mb-6 p-3 xs:p-4 bg-red-100 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md flex items-center gap-1.5 xs:gap-2 text-red-800 dark:text-red-400 text-xs xs:text-sm">
                    <XCircle size={16} className="xs:w-5 xs:h-5" />
                    <p>{errorMessage || "Hubo un error al enviar el mensaje. Por favor, intenta nuevamente."}</p>
                  </div>
                )}

                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="space-y-3 xs:space-y-4 sm:space-y-5 md:space-y-6"
                >
                  <div>
                    <label
                      htmlFor="user_name"
                      className="block mb-1 xs:mb-1.5 sm:mb-2 text-[10px] xs:text-xs sm:text-sm text-gray-700 dark:text-gray-300"
                    >
                      Nombre
                    </label>
                    <Input
                      id="user_name"
                      name="user_name"
                      value={formData.user_name}
                      onChange={handleChange}
                      className={`bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-700 focus:border-blue-500 text-xs xs:text-sm text-gray-900 dark:text-white ${
                        errors.user_name ? "border-red-500" : ""
                      }`}
                      disabled={status === "loading"}
                    />
                    {errors.user_name && (
                      <p className="mt-1 text-[10px] xs:text-xs sm:text-sm text-red-500">{errors.user_name}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="user_email"
                      className="block mb-1 xs:mb-1.5 sm:mb-2 text-[10px] xs:text-xs sm:text-sm text-gray-700 dark:text-gray-300"
                    >
                      Email
                    </label>
                    <Input
                      id="user_email"
                      name="user_email"
                      type="email"
                      value={formData.user_email}
                      onChange={handleChange}
                      className={`bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-700 focus:border-blue-500 text-xs xs:text-sm text-gray-900 dark:text-white ${
                        errors.user_email ? "border-red-500" : ""
                      }`}
                      disabled={status === "loading"}
                    />
                    {errors.user_email && (
                      <p className="mt-1 text-[10px] xs:text-xs sm:text-sm text-red-500">{errors.user_email}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block mb-1 xs:mb-1.5 sm:mb-2 text-[10px] xs:text-xs sm:text-sm text-gray-700 dark:text-gray-300"
                    >
                      Mensaje
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className={`bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-700 focus:border-blue-500 text-xs xs:text-sm text-gray-900 dark:text-white ${
                        errors.message ? "border-red-500" : ""
                      }`}
                      disabled={status === "loading"}
                    />
                    {errors.message && (
                      <p className="mt-1 text-[10px] xs:text-xs sm:text-sm text-red-500">{errors.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-2 xs:py-3 sm:py-4 md:py-5 lg:py-6 text-xs xs:text-sm sm:text-base"
                    disabled={status === "loading"}
                  >
                    {status === "loading" ? (
                      <span className="flex items-center gap-1.5 xs:gap-2">
                        <Loader2 className="h-3 w-3 xs:h-4 xs:w-4 animate-spin" />
                        Enviando...
                      </span>
                    ) : (
                      "Enviar mensaje"
                    )}
                  </Button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

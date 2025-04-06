"use client"

import type React from "react"

import { useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Instagram, Mail, MapPin, Phone, MessageSquare } from "lucide-react"

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1])
  const y = useTransform(scrollYProgress, [0, 0.2], [100, 0])

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Real-time validation
    validateField(name, value)
  }

  const validateField = (name: string, value: string) => {
    let error = ""

    switch (name) {
      case "name":
        if (!value.trim()) error = "El nombre es requerido"
        break
      case "email":
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
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Validate all fields
    validateField("name", formData.name)
    validateField("email", formData.email)
    validateField("message", formData.message)

    // Check if there are any errors
    if (!errors.name && !errors.email && !errors.message) {
      // Submit form logic would go here
      console.log("Form submitted:", formData)
      alert("¡Mensaje enviado con éxito!")

      // Reset form
      setFormData({
        name: "",
        email: "",
        message: "",
      })
    }
  }

  return (
    <section id="contact" ref={ref} className="min-h-screen py-20 px-4 md:px-8">
      <motion.div style={{ opacity, y }} className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
        >
          Contacto
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-blue-400">Ponte en contacto</h3>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-500/20 p-3 rounded-full">
                  <Mail className="text-blue-400" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-gray-400">antoniomorale111@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-blue-500/20 p-3 rounded-full">
                  <Phone className="text-blue-400" />
                </div>
                <div>
                  <h4 className="font-medium">Teléfono</h4>
                  <p className="text-gray-400">+58 414-4026495</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-blue-500/20 p-3 rounded-full">
                  <MapPin className="text-blue-400" />
                </div>
                <div>
                  <h4 className="font-medium">Ubicación</h4>
                  <p className="text-gray-400">Valencia, Venezuela</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-xl font-bold mb-4">Sígueme</h4>
              <div className="flex space-x-4">
                {[
                  { icon: <Github size={20} />, url: "https://github.com/Antonio-Naoki", label: "GitHub" },
                  {
                    icon: <Linkedin size={20} />,
                    url: "https://www.linkedin.com/in/antonio-morales-23b781266",
                    label: "LinkedIn",
                  },
                  {
                    icon: <Instagram size={20} />,
                    url: "https://www.instagram.com/antoniomorales2129?igsh=YzljYTk1ODg3Zg==",
                    label: "Instagram",
                  },
                  { icon: <MessageSquare size={20} />, url: "https://wa.me/584144026495", label: "WhatsApp" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    className="bg-gray-800 p-3 rounded-full text-gray-400 hover:text-white hover:bg-blue-600 transition-colors duration-300"
                    whileHover={{ y: -5 }}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="mt-8 h-64 rounded-xl overflow-hidden">
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
            className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800"
          >
            <h3 className="text-2xl font-bold mb-6 text-blue-400">Envíame un mensaje</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm">
                  Nombre
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`bg-gray-800 border-gray-700 focus:border-blue-500 ${errors.name ? "border-red-500" : ""}`}
                />
                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`bg-gray-800 border-gray-700 focus:border-blue-500 ${
                    errors.email ? "border-red-500" : ""
                  }`}
                />
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-sm">
                  Mensaje
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`bg-gray-800 border-gray-700 focus:border-blue-500 ${
                    errors.message ? "border-red-500" : ""
                  }`}
                />
                {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-6"
              >
                Enviar mensaje
              </Button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}



# Dev Portfolio Prime

Portfolio web personal diseñado para mostrar proyectos de desarrollo y habilidades de manera elegante e interactiva. Construido con Next.js y diseñado con TailwindCSS, incluye animaciones y efectos visuales modernos para una experiencia de usuario excepcional.

## 🚀 Características Principales

- **Animaciones interactivas**: Partículas de fondo reactivas con tsParticles
- **Efecto de escritura animada**: Presentación dinámica del nombre en el hero
- **Secciones completas**: Sobre mí, Proyectos, Habilidades y Contacto
- **Tecnologías interactivas**: Iconos con efectos hover y animaciones
- **Temas claro/oscuro**: Cambio dinámico de tema con next-themes
- **Efectos de parallax**: Elementos decorativos con movimiento
- **Cursor personalizado**: Experiencia de usuario mejorada
- **Responsive design**: Optimizado para todos los dispositivos
- **Formulario de contacto**: Integración con EmailJS

## 🛠️ Tecnologías Utilizadas

### Frontend
- **Next.js 15** - Framework React para producción
- **TypeScript** - Tipado estático
- **TailwindCSS** - Framework de CSS utilitario
- **Framer Motion** - Librería de animaciones
- **Shadcn/ui** - Componentes UI accesibles
- **Radix UI** - Componentes primitivos

### Efectos y Animaciones
- **@tsparticles/react** - Sistema de partículas interactivas
- **Lucide React** - Iconos modernos
- **React Hook Form** - Manejo de formularios
- **Zod** - Validación de esquemas

### Servicios
- **EmailJS** - Envío de emails desde el frontend

## 🚀 Instalación y Configuración

1. **Clonar el repositorio:**
   ```bash
   git clone <url-del-repositorio>
   cd dev-portfolio-prime
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno:**
   Crear un archivo `.env.local` en la raíz del proyecto:
   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=tu_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=tu_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=tu_public_key
   ```

4. **Ejecutar en modo desarrollo:**
   ```bash
   npm run dev
   ```

5. **Acceder a la aplicación:**
   - Desarrollo: http://localhost:3000

## 🏗️ Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm start` - Inicia el servidor de producción
- `npm run lint` - Ejecuta ESLint para verificar el código

## 📁 Estructura del Proyecto

```
├── app/                    # Directorio principal de Next.js
│   ├── api/               # Rutas API
│   ├── globals.css        # Estilos globales
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página principal
├── components/            # Componentes reutilizables
│   ├── ui/               # Componentes UI base
│   ├── about.tsx         # Sección Sobre mí
│   ├── contact.tsx       # Sección Contacto
│   ├── hero.tsx          # Sección Hero
│   ├── projects.tsx      # Sección Proyectos
│   ├── skills.tsx        # Sección Habilidades
│   └── ...               # Otros componentes
├── hooks/                # Hooks personalizados
├── lib/                  # Utilidades y configuraciones
├── public/               # Archivos estáticos
└── styles/               # Archivos de estilos
```

## 🎨 Personalización

### Información Personal
Edita el archivo `components/hero.tsx` para cambiar:
- Nombre principal
- Título profesional
- Tecnologías mostradas

### Proyectos
Modifica `components/projects.tsx` para agregar tus proyectos.

### Habilidades
Actualiza `components/skills.tsx` con tus tecnologías.

### Contacto
Configura `components/contact.tsx` con tu información de contacto.

## 🚀 Despliegue

### Vercel (Recomendado)
1. Conecta tu repositorio a Vercel
2. Configura las variables de entorno
3. Despliega automáticamente

### Netlify
1. Conecta tu repositorio a Netlify
2. Configura el build command: `npm run build`
3. Configura las variables de entorno

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una branch para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la branch (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT - mira el archivo [LICENSE](LICENSE) para más detalles.

## 📞 Contacto

**Antonio Morales** - Desarrollador de Software

---

⭐ ¡No olvides dar una estrella al proyecto si te ha sido útil!


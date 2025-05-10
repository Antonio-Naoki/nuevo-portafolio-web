
# Sistema de Gestión de Tickets Técnicos

Sistema web para la gestión de tickets de soporte técnico desarrollado con React, Express y PostgreSQL.

## Requisitos Previos

- Node.js v20 o superior
- PostgreSQL v16
- npm (incluido con Node.js)

## Configuración Local

1. Clonar el proyecto:
```bash
git clone <url-del-repositorio>
cd <nombre-directorio>
``` 

2. Instalar dependencias:
```bash
npm install
```

3. Configurar base de datos PostgreSQL:

```sql
CREATE DATABASE tickets_db;
```

4. Restaurar el backup de la base de datos:
```bash
psql tickets_db < backup.sql
```

5. Configurar variables de entorno:
Crear un archivo `.env` en la raíz del proyecto con:
```
DATABASE_URL=postgresql://neondb_owner:tu_contraseña@localhost:5432/tickets_db
SESSION_SECRET=mi_clave_secreta_123
```

## Ejecución del Proyecto

1. Iniciar en modo desarrollo:
```bash
npm run dev
```

2. Acceder a la aplicación:
- Frontend: http://localhost:5000
- API: http://localhost:5000/api

## Usuarios Predeterminados

1. Técnico:
- Usuario: alex_support
- Contraseña: password123

2. Empleado:
- Usuario: sarah_kim
- Contraseña: password123

## Funcionalidades Principales

- Gestión de tickets (crear, asignar, actualizar, cerrar)
- Sistema de comentarios en tickets
- Panel de control con estadísticas
- Gestión de usuarios y roles
- Notificaciones en tiempo real
- Filtros y búsqueda avanzada

## Estructura del Proyecto

```
├── client/          # Frontend React
├── server/          # Backend Express
├── shared/          # Tipos y esquemas compartidos
└── db/              # Configuración de base de datos
```

## Tecnologías Principales

- Frontend: React, TailwindCSS, Shadcn/ui
- Backend: Express, Drizzle ORM
- Base de datos: PostgreSQL
- Autenticación: Passport.js
- API: REST


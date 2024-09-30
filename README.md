# React Dashboard - Gestión de Usuarios

Este proyecto es un dashboard de gestión de usuarios desarrollado con **React**, **TypeScript**, **Vite**, **React Query**, **React Bootstrap**, **Sass** y **React Data Table**. El proyecto sigue una estructura modular en la que cada módulo contiene sus propios componentes, hooks, servicios, constantes y utilidades, lo que hace que la aplicación sea altamente escalable y fácil de mantener.

## Tecnologías Utilizadas
- **React**: Para construir la interfaz de usuario.
- **TypeScript**: Para garantizar la seguridad en el tipado a lo largo del proyecto.
- **Vite**: Para un desarrollo y compilación rápidos.
- **React Query**: Para la gestión eficiente de la obtención de datos y el estado global.
- **React Bootstrap**: Para componentes de UI responsivos.
- **Sass**: Para el uso de características avanzadas de CSS.
- **React Data Table**: Para mostrar datos tabulares con paginación y selección.
- **SweetAlert2**: Para diálogos modales como la confirmación de eliminación.

## Configuración del Proyecto

### Requisitos Previos
- **Node.js**: Necesitas tener **Node.js** instalado. El proyecto ha sido probado con **Node versión 18.18.2**.

### Instalación
1. Clona el repositorio:
   ```bash
   git clone https://github.com/waltervivar1133/react-dashboard-crud
   cd react-dashboard-crud

2. Instala las dependencias utilizando Yarn:
   ```bash
   yarn install

3. Para iniciar el servidor de desarrollo, ejecuta el siguiente comando:
   ```bash
   yarn dev


### Estructura de Carpetas
3. Para iniciar el servidor de desarrollo, ejecuta el siguiente comando:
   ```bash
   src/
    ├── assets/                 # Recursos estáticos (imágenes, fuentes, etc.)
    ├── module/                 # Módulos por funcionalidad
    │   ├── UserManagement/      # Módulo de Gestión de Usuarios
    │   │   ├── components/      # Componentes de UI
    │   │   ├── hooks/           # Hooks personalizados
    │   │   ├── services/        # Servicios API
    │   │   ├── constants/       # Constantes para el módulo
    │   │   └── utils/           # Funciones de utilidad
    │   ├── shared/              # Componentes y hooks compartidos
    ├── styles/                  # Estilos globales (archivos Sass)
    ├── App.tsx                  # Componente principal de la app
    ├── main.tsx                 # Punto de entrada
    ├── tsconfig.json            # Configuración de TypeScript
    ├── vite.config.ts           # Configuración de Vite

### URL de Despliegue de la web

- **Link**: https://prueba-tecnica-upch.netlify.app/
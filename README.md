# TRX Web Project

![TRX Logo](https://img.shields.io/badge/TRX-Cyberpunk%20Web-red)
![React](https://img.shields.io/badge/React-18.0.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.0-38B2AC)
![Vite](https://img.shields.io/badge/Vite-7.1.3-646CFF)

Una web personal con estética cyberpunk para el proyecto TRX, construida con React, Tailwind CSS y efectos CRT retro.

## ✨ Características

- **🎨 Estética Cyberpunk**: Diseño minimalista con colores negro, rojo (#ff1200) y blanco
- **📱 Responsive Design**: Optimizado para móvil y desktop
- **🔧 Sidebar Colapsable**: Navegación intuitiva con secciones expandibles
- **📺 Efectos CRT**: Flicker, scanlines, vignette y glow fosfórico
- **⚡ Preloader Animado**: ASCII art de "TRX" con animación línea por línea
- **🎭 Modal Dinámico**: Contenido que se adapta según la selección
- **📱 Sin Scroll en Móvil**: Experiencia de app nativa

## 🚀 Tecnologías

- **Frontend**: React 18 + Vite
- **Styling**: Tailwind CSS 3.4.0
- **Fuentes**: IBM Plex Mono (Google Fonts)
- **Build Tool**: Vite 7.1.3
- **PostCSS**: Autoprefixer

## 📁 Estructura del Proyecto

```
trx-web/
├── src/
│   ├── components/
│   │   ├── Layout.jsx      # Layout principal
│   │   ├── Sidebar.jsx     # Navegación colapsable
│   │   ├── Modal.jsx       # Contenido dinámico
│   │   ├── Preloader.jsx   # Pantalla de carga
│   │   └── RightInfo.jsx   # Panel de información vertical
│   ├── data/
│   │   └── projectData.js  # Datos del proyecto
│   ├── index.css           # Estilos globales y efectos CRT
│   └── main.jsx            # Punto de entrada
├── public/                 # Assets estáticos
├── index.html             # HTML principal
└── package.json           # Dependencias y scripts
```

## 🎯 Funcionalidades

### Sidebar
- **THE PROJECT**: Información general del proyecto
- **TRX_001**: Archivos del primer prototipo
- **TRX_002**: Archivos del segundo prototipo  
- **CONTACT**: Información de contacto

### Modal
- **PDFs**: Texto largo con formato cyberpunk
- **Imágenes**: Visualización de archivos de imagen
- **Videos**: Placeholder para archivos de video
- **ASCII Art**: Logo TRX siempre visible

### Efectos Visuales
- **CRT Flicker**: Tintineo sutil de pantalla
- **Scanlines**: Líneas horizontales de barrido
- **Vignette**: Oscurecimiento en los bordes
- **Glow**: Efectos de resplandor rojo

## 🛠️ Instalación

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/TU_USUARIO/trx-web.git
   cd trx-web
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Ejecutar en desarrollo:**
   ```bash
   npm run dev
   ```

4. **Build para producción:**
   ```bash
   npm run build
   ```

## 📱 Responsive Design

- **Móvil (< 640px)**: Layout vertical, sidebar arriba, modal abajo
- **Desktop (≥ 640px)**: Layout horizontal, sidebar izquierda, modal derecha
- **Adaptativo**: Se ajusta automáticamente al tamaño de pantalla

## �� Paleta de Colores

- **Primario**: #ff1200 (TRX Red)
- **Fondo**: #210d06 (Dark Brown)
- **Texto**: #ffffff (White)
- **Acentos**: #000000 (Black)

## 🔧 Scripts Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Build de producción
- `npm run preview` - Preview del build
- `npm run lint` - Linting del código

## 📸 Capturas de Pantalla

*[Aquí puedes añadir capturas de pantalla de tu web]*

## 🌐 Demo en Vivo

*[Aquí puedes añadir el link a tu deploy en Vercel/Netlify]*

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

**Xose Rodríguez**
- Email: hola@xosema.com
- Teléfono: +34 648 700 293
- Web: https://xose.info

## 🙏 Agradecimientos

- **IBM Plex Mono** - Fuente tipográfica
- **Tailwind CSS** - Framework de utilidades
- **Vite** - Build tool moderno
- **React** - Biblioteca de interfaz de usuario

---

⭐ Si te gusta este proyecto, ¡dale una estrella en GitHub!

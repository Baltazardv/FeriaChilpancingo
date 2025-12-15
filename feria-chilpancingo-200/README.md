# Feria de Chilpancingo - 200 Años 🎉

Sitio web conmemorativo de la Edición Bicentenaria de la Feria de Chilpancingo (1825-2025).

## 🎨 Características

- ✨ Diseño moderno y responsive
- 🎭 Sección de elementos culturales interactivos
- 🎪 Animaciones fluidas con Framer Motion
- 📱 Totalmente responsive (mobile-first)
- 🎨 Paleta de colores basada en los pósters oficiales
- ♿ Accesible y optimizado

## 🚀 Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build

# Previsualizar build de producción
npm run preview
```

## 📁 Estructura de Carpetas para Imágenes

Debes crear la siguiente estructura en la carpeta `public`:

```
public/
├── POSTER_DE_LA_FERIA_PROP_2_Mesa_de_trabajo_1.jpg
├── logos/
│   ├── tecnologico.png
│   ├── feria.png
│   ├── renace.png
│   ├── gobierno-chilpancingo.png
│   ├── consejo-consultivo.png
│   └── unidos-renace.png
└── elementos/
    ├── personaje-historico.png
    ├── iglesias.png
    ├── iglesias-left.png
    ├── iglesias-right.png
    ├── jaguar.png
    ├── mascaras.png
    ├── escudo.png
    ├── nina-vestido.png
    ├── nochebuenas.png
    ├── puente-rojo.png
    ├── pinatas.png
    ├── cempasuchil.png
    ├── 200-anios.png
    ├── tlacololeros.png
    └── mascara-roja.png
```

## 🎯 Guía de Imágenes

### Logos (carpeta `/logos`)
- `tecnologico.png` - Logo Tecnológico de Chilpancingo
- `feria.png` - Logo oficial de la Feria
- `renace.png` - Unidos Chilpancingo Renace
- `gobierno-chilpancingo.png` - Gobierno Municipal
- `consejo-consultivo.png` - Consejo Consultivo
- `unidos-renace.png` - Unidos Renace (footer)

### Elementos Culturales (carpeta `/elementos`)
Estos son los elementos interactivos clickeables:

1. `personaje-historico.png` - Personajes de la historia
2. `iglesias.png` - Arquitectura colonial
3. `jaguar.png` - Tecuani/Jaguar de la danza
4. `mascaras.png` - Máscaras tradicionales
5. `escudo.png` - Escudo de Chilpancingo
6. `nina-vestido.png` - Vestimenta tradicional
7. `nochebuenas.png` - Flores de nochebuena
8. `puente-rojo.png` - Puente Campamocha
9. `pinatas.png` - Piñatas artesanales
10. `cempasuchil.png` - Flor de cempasúchil
11. `200-anios.png` - Logo del bicentenario
12. `tlacololeros.png` - Danza de Tlacololeros

### Decoración
- `iglesias-left.png` - Iglesias lado izquierdo
- `iglesias-right.png` - Iglesias lado derecho
- `mascara-roja.png` - Máscara adicional

## 🌐 Despliegue en GitHub Pages

1. **Configura `vite.config.js`:**
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/tu-repositorio/',
})
```

2. **Construye el proyecto:**
```bash
npm run build
```

3. **Sube a GitHub:**
```bash
git add .
git commit -m "Deploy to GitHub Pages"
git push
```

4. **Activa GitHub Pages:**
   - Ve a Settings → Pages
   - Selecciona la rama y carpeta `/dist`
   - Guarda y espera el deploy

## 🎨 Personalización

### Colores
Edita `src/index.css` para cambiar la paleta de colores.

### Contenido
- Hero: `src/components/Hero.jsx`
- Poster: `src/components/PosterSection.jsx`
- Elementos: `src/components/ElementsGrid.jsx` (array `culturalElements`)
- Footer: `src/components/Footer.jsx`

## 📱 Tecnologías

- React 18 + Vite
- Framer Motion (animaciones)
- Lucide React (iconos)
- CSS Variables (theming)

---

**¡200 Años de Historia y Tradición! 🎉**

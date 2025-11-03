# SecureReach Digital Solutions

A modern, responsive website for SecureReach Digital Solutions - a company providing both Digital Marketing and Cyber Security services.

## 🚀 Features

### 🎨 Professional Design
- Fully responsive design (Mobile, Tablet, Desktop)
- Modern UI with TailwindCSS
- Smooth animations and transitions
- Scroll-triggered animations using AOS (Animate On Scroll)

### 🧭 Responsive Navbar
- **Sticky navigation** with glassmorphic effect on scroll
- **Mega-menu dropdown** for Services (Digital Marketing & Cyber Security)
- **Language toggle** (EN/HI)
- **Dark/Light theme switch**
- **Floating WhatsApp chat icon** (bottom-right)
- **Scroll progress bar** at the top
- **Mobile hamburger menu** with smooth slide-in

### 🏠 Home Page Sections

1. **Hero Section**
   - Full-width animated gradient grid background
   - Split visual design with business growth and cyber security imagery
   - Animated statistics (100+ clients, 98% retention, 24/7 support)
   - Dual CTAs: "Explore Our Services" and "Get a Free Audit"
   - Slow-moving network lines and shield-glow effects

2. **Core Services**
   - Parallax background image
   - 2-column grid layout
   - Digital Marketing services card (Orange theme)
   - Cyber Security services card (Blue theme)
   - Hover effects: cards lift + icon glows

3. **Why Choose SecureReach**
   - 4-column feature layout
   - Tech-blue gradient background
   - Feature cards: Certified Experts, ROI-Focused, 24/7 Protection, Client-Centric

4. **Testimonials & Client Logos**
   - Auto-scrolling testimonial slider
   - Client logo carousel
   - Multiple testimonials with photos and positions

5. **Call-to-Action Banner**
   - Gradient background (blue to turquoise)
   - Glowing border animation on button
   - "Book a Free Strategy Call" CTA

### 📞 Contact Page
- Contact form with validation (Name, Email, Phone, Message)
- Contact information cards
- Google Maps integration
- Business hours and address

### 🦶 Footer
- 4-column professional layout
- Company, Services, Resources, Contact sections
- Social media icons (LinkedIn, Instagram, Twitter)
- Copyright information
- Tech grid background texture

## 🛠️ Tech Stack

- **React 18.3.1** - Modern UI library
- **Vite 5.4.7** - Fast build tool and dev server
- **TailwindCSS 3.4.16** - Utility-first CSS framework
- **React Router DOM 6.26.0** - Client-side routing
- **AOS 3.0.0** - Animate On Scroll library

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🗄️ Database Setup (MySQL)

Yeh project **MySQL** database use karta hai. Vercel directly MySQL provide nahi karta, lekin aap external MySQL services use kar sakte hain.

### Recommended MySQL Services:
- **PlanetScale** (Recommended) - MySQL compatible, free tier available
- **Railway** - Easy setup, MySQL support
- **Aiven** - Managed MySQL service

### Quick Setup:
1. PlanetScale (ya koi bhi MySQL service) account banayein
2. Database create karein
3. **Vercel Dashboard** → Settings → Environment Variables mein set karein:
   - `DB_HOST` - Database host
   - `DB_PORT` - 3306 (MySQL default)
   - `DB_USER` - Database username
   - `DB_PASSWORD` - Database password
   - `DB_NAME` - Database name
   - `DB_SSL` - true (PlanetScale ke liye)

**Detailed instructions**: See `VERCEL_MYSQL_SETUP.md`

### Database Tables
- `form` - Contact form submissions (auto-created)
- `request_callback` - Callback request submissions (auto-created)

**Note**: Tables automatically create ho jayengi pehli API call par!

## 🌐 Usage

After running `npm run dev`, open your browser and navigate to:
```
http://localhost:5173
```

### Quick Start

1. Clone or download the project
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`
4. Open http://localhost:5173 in your browser
5. Build for production: `npm run build`

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎨 Customization

### Colors
Primary colors are defined in `tailwind.config.js`:
- Blue: `#00bcd4`
- Dark: `#0097a7`
- Light: `#80deea`

### Animations
Custom animations are defined in `src/index.css`:
- Fade-in
- Slide-up
- Glow
- Pulse
- Float

## 📄 Project Structure

```
src/
├── components/
│   ├── Contact/
│   │   ├── ContactForm.jsx
│   │   └── ContactInfo.jsx
│   ├── Home/
│   │   ├── Hero.jsx
│   │   ├── CoreServices.jsx
│   │   ├── WhyChoose.jsx
│   │   ├── Testimonials.jsx
│   │   └── CTABanner.jsx
│   ├── Navbar.jsx
│   └── Footer.jsx
├── pages/
│   ├── Home.jsx
│   └── Contact.jsx
├── assets/
│   ├── 1.png
│   ├── 2.png
│   └── 3.png
├── App.jsx
├── main.jsx
└── index.css
```

## 🔧 Features Implemented

✅ Responsive Navbar with mega-menu  
✅ Mobile hamburger menu  
✅ Language toggle (EN/HI)  
✅ Dark/Light theme switch  
✅ Floating WhatsApp icon  
✅ Scroll progress bar  
✅ Hero section with animations  
✅ Core Services with parallax  
✅ Why Choose section  
✅ Testimonials slider  
✅ CTA Banner  
✅ Contact page with form  
✅ Professional Footer  
✅ Smooth scroll animations  
✅ Hover effects  
✅ Loading states  

## 📝 Notes

- Images are placed in `src/assets/` directory
- All sections are fully responsive
- Animations use AOS library for scroll-triggered effects
- TailwindCSS utility classes for styling
- React Router for navigation

## 🎯 Future Enhancements

- Add blog section
- Implement case studies page
- Add whitepapers resources
- Integrate real API for contact form
- Add more interactive animations
- Implement dark mode functionality
- Add more language support

---

Made with ❤️ for SecureReach Digital Solutions


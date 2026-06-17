# ☕ Cozy Cafe - Responsive Web Application

A modern, elegant, and fully responsive single-page web application built for a local café business (**Cozy Café**, based in Balapur, Telangana). This project bridges front-end design with real-world business utility by integrating fully functional cloud-powered forms for live table reservations and customer inquiries.

## 🎯 Project Overview
This project was built as part of **Task 3: Local Business Website & Live Pitch Project**. The objective was to design a professional digital presence for a real brick-and-mortar local business to help them grow their customer engagement, digitize their services, and convert online traffic into physical foot traffic.

### ✨ Key Features
- **Responsive Navigation Bar:** Smooth-scrolling anchor links (`Home`, `Menu`, `Gallery`, `Hours & Location`, `Reservations`, `Contact Us`) with a prominent, custom-scaled branding layout.
- **Digital Interactive Menu:** Features 20 meticulously curated items divided equally into two distinct categories (*Coffee & Drinks* and *Bakes & Bites*), completely optimized for reading on mobile viewports without requiring clumsy PDF downloads.
- **Editorial Asymmetrical Gallery Grid:** A modern CSS grid showcasing imagery of the café interior, latte art, and baking workflow complete with elegant, transparent hover states.
- **AJAX-Powered Cloud Backend Forms:** Seamlessly integrated with **Formspree API** handling two independent pipelines:
  - **Table Bookings Form:** Captures guest count, date, time slot, and dietary notes.
  - **Contact Us Form:** For general inquiries, feedback, and event catering requests.
- **Zero-Refresh Inline Notifications:** Integrated asynchronously with JavaScript's Fetch API to suppress native browser redirects, showing instant, visually polished success confirmations on-page.

---

## 🛠️ Built With

- **HTML5:** Semantic architecture (`<header>`, `<section>`, `<nav>`, `<form>`) optimized for clean SEO indexing.
- **CSS3:** Custom layout styling, sticky navigation positioning, fluid hover animations, transition transforms, and a warm coffee-toned color palette (`#3E2723`, `#6D4C41`, `#FAF6F0`).
- **JavaScript (ES6):** Async/Await API implementation using the Fetch window module to process multi-form background communication silently.
- **Formspree Endpoint API:** Serverless backend cloud processing to direct pipeline data straight into client email folders.

---

## 🌐 Live Deployment
The project is continuously integrated and deployed live on the web! 
👉 **[View My Live Cafe Site Here](https://cozycafe-two.vercel.app/)**

## 📂 File Architecture
```bash
├── index.html       # Structural markup containing layout grids and API forms
├── style.css        # Responsive stylesheets, fluid typography, and alert styles
└── script.js        # Event listeners and asynchronous Formspree fetch handlers

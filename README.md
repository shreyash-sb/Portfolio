# ⚡ Shreyash Bobalade — Developer Portfolio

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-Backend-339933?logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

A modern developer portfolio for **Shreyash Bobalade** (B.Tech IT, Walchand College of Engineering, Sangli), featuring a **dynamic blue glassmorphic aesthetic**, **continuous scroll navigation with active scrollspy**, **12 defined projects with qualification modals**, and a **client-side Developer CMS**.

---

## ✨ Key Highlights

- **🎨 Dynamic Blue Glassmorphism:** Obsidian canvas (`#090D16`), cyan neon accents (`#00F0FF`), glowing blur panels, and ambient grid.
- **📜 Seamless Continuous Scroll:** All sections flow naturally with a top glass navbar tracking active sections via Scrollspy.
- **📄 Interactive Resume & CV:** Prominent sidebar CTA opening your original PDF resume viewer with instant download and new-tab view.
- **⚡ Instant Project Search:** Real-time search bar filtering 12+ projects by keywords, tech stack (React, OpenCV, IoT), and categories with instant match counts.
- **🌐 Open Graph & Social Preview:** Fully tagged for LinkedIn, WhatsApp, and Twitter card sharing with custom 1200x630 banner.
- **💼 12 Detailed Projects:** MERN platforms, real-time OpenCV computer vision, Android apps, and AI assistants.
- **🔍 Project Qualification Modals:** Complete architectural overviews, technical qualification checklists, tech pills, and source links.
- **🧠 Unified Technical Skills:** 7 categories mapped directly to your verified resume without split cards or arbitrary bars.
- **📬 Validated Contact Form:** Working form with instant submission feedback.

---

## 🛠️ Tech Stack

- **Frontend:** React 19, Vite
- **Styling:** Vanilla CSS (Tailored Design System & CSS Variables)
- **Icons:** Lucide React & Custom SVG Graphics
- **Backend:** Node.js (Static serving & `/api/contact` route)

---

## 📁 Project Structure

```
Portfolio/
├── data/                    # JSON data stores (messages.json, portfolio.json)
├── dist/                    # Optimized production bundle
├── public/                  # Photo (shreyash.jpg), PDF resume, and social preview banner
├── src/
│   ├── components/
│   │   ├── layout/          # Sidebar, Navbar, Footer
│   │   ├── sections/        # About, Experience, Skills, Projects, Education, etc.
│   │   ├── modals/          # ResumeModal, ProjectModal
│   │   └── ui/              # Icons, ProjectThumbnails, Toast
│   │   └── ui/              # Icons, ProjectThumbnails, Toast
│   ├── data/                # portfolioData.js (Shreyash's data & 12 projects)
│   ├── App.jsx              # Root orchestrator
│   ├── main.jsx             # React entry point
│   └── styles.css           # Glassmorphic stylesheet
├── index.html               # HTML template
├── server.js                # Node.js server
└── package.json
```

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev
# ➜ Open http://localhost:5173/

# 3. Build & run production
npm run build
npm start
# ➜ Running on http://localhost:3000/
```

---

## 🌐 Deployment (Vercel vs. Netlify)

Both platforms deploy this Vite app in seconds with zero extra configuration:

- **Recommended: Vercel** — Fastest edge delivery for modern React/Vite SPAs. Connect your GitHub repository, choose **Vite** preset, and click Deploy.
- **Alternative: Netlify** — Excellent static hosting with form detection. Build command: `npm run build`, Publish directory: `dist`.

---

## 👨‍💻 Connect with Shreyash

- **GitHub:** [@shreyash-bobalade](https://github.com/shreyash-bobalade)
- **LinkedIn:** [shreyash-bobalade](https://www.linkedin.com/in/shreyash-bobalade)
- **LeetCode:** [shreyash_codes](https://leetcode.com/shreyash_codes)
- **Email:** [shreyashbobalade2006@gmail.com](mailto:shreyashbobalade2006@gmail.com)

---

_• © Shreyash Bobalade • Walchand College of Engineering, Sangli_

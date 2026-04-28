# Shreyash Portfolio

A complete full-stack portfolio website built from scratch using modern web technologies.
This project showcases personal projects, skills, and experience with a clean UI and a functional backend.

---

## 🚀 Features

* Dark modern portfolio UI
* Fully responsive (mobile + desktop)
* Dynamic portfolio content via backend API
* Working contact form with validation
* Local message storage system
* Clean project architecture
* Separate development and production workflows

---

## 🛠️ Tech Stack

* **Frontend:** React, Vite
* **Backend:** Node.js
* **Styling:** Vanilla CSS
* **Data Storage:** JSON

---

## 📁 Project Structure

```
Portfolio/
├── data/
│   ├── messages.json
│   └── portfolio.json
├── dist/
├── node_modules/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── server.js
├── vite.config.js
└── README.md
```

---

## 📌 Important Files

### `data/portfolio.json`

Contains all portfolio content:

* Hero section
* Skills
* Projects
* Experience
* Education
* Achievements
* Profiles
* Contact information

---

### `data/messages.json`

Stores contact form submissions.

---

### `src/App.jsx`

Main React UI structure.

---

### `src/styles.css`

Handles layout, styling, responsiveness, and UI design.

---

### `server.js`

Backend server responsible for:

* Serving production build
* Handling API routes
* Processing contact form submissions

---

## ⚙️ Installation

Install dependencies:

```
npm install
```

---

## 💻 Development

Run frontend:

```
npm run dev
```

Run backend (in another terminal):

```
npm run backend
```

---

## 🚀 Production Run

Build frontend:

```
npm run build
```

Start server:

```
npm start
```

Application runs at:

```
http://localhost:3000
```

---

## 📜 Available Scripts

* `npm install` → Install dependencies
* `npm run dev` → Start Vite development server
* `npm run build` → Build production frontend
* `npm run backend` → Start backend server
* `npm start` → Run production server

---

## 🔌 API Endpoints

### `GET /api/portfolio`

Returns portfolio data from:

```
data/portfolio.json
```

---

### `POST /api/contact`

Stores contact form submissions in:

```
data/messages.json
```

---

## 📦 Contact Form Payload

```
{
  "name": "Your Name",
  "email": "your@email.com",
  "interest": "Internship opportunity",
  "message": "Your message"
}
```

### Required Fields

* name
* email
* interest
* message

✔ Email format is validated on backend

---

## 🎨 Customization

### Update content:

```
data/portfolio.json
```

### Update UI structure:

```
src/App.jsx
```

### Update styling:

```
src/styles.css
```

---

## 📝 Notes

* `dist/` is generated after build
* `node_modules/` is ignored by Git
* Messages are stored locally (no database)
* Backend serves only built files (secure approach)

---

## ✅ Verification Status

* Frontend build successful
* Application loads correctly
* API working (`GET /api/portfolio`)
* Contact form submission working
* Email validation implemented
* Source and data protection ensured

---

## 📬 Future Improvements

* Add database (MongoDB / PostgreSQL)
* Deploy backend (Render / Railway)
* Add authentication (admin panel)
* Add email notifications
* Improve UI animations

---

## 👨‍💻 Author

**Shreyash Bobalade**
# Shreyash Portfolio

A complete portfolio website built from scratch with:

- React for the frontend
- Vite for frontend tooling and build output
- Node.js for serving the site and handling contact form submissions
- JSON-based content and message storage

The project is structured so you can update content easily without changing the main UI code.

## Features

- Dark modern portfolio UI
- Responsive layout for desktop and mobile
- Portfolio content loaded from a backend API
- Working contact form with backend validation
- Local message storage for submissions
- Separate development and production workflows

## Tech Stack

- React
- Vite
- Node.js
- Vanilla CSS

## Project Structure

```text
Portfolio/
|- data/
|  |- messages.json
|  |- portfolio.json
|- dist/
|- node_modules/
|- src/
|  |- App.jsx
|  |- main.jsx
|  |- styles.css
|- .gitignore
|- index.html
|- package-lock.json
|- package.json
|- README.md
|- server.js
|- vite.config.js
```

## Important Files

- `data/portfolio.json`
  Main portfolio content such as hero text, skills, projects, experience, education, achievements, profiles, and contact details.

- `data/messages.json`
  Stores contact form submissions received through the backend.

- `src/App.jsx`
  Main React UI structure for the portfolio.

- `src/styles.css`
  All visual styling for the frontend.

- `server.js`
  Node.js backend that serves the built frontend and handles the API routes.

## Installation

Install dependencies:

```bash
npm install
```

## Development

Run the Vite frontend:

```bash
npm run dev
```

If you want the backend API available at the same time, run this in another terminal:

```bash
npm run backend
```

## Production Run

Build the frontend:

```bash
npm run build
```

Start the Node server:

```bash
npm start
```

The production site will run at:

```text
http://localhost:3000
```

## Available Scripts

- `npm install`
  Installs project dependencies.

- `npm run dev`
  Starts the Vite development server.

- `npm run build`
  Builds the production frontend into `dist/`.

- `npm run backend`
  Starts only the Node backend.

- `npm start`
  Starts the Node server for the built production site.

## API Endpoints

- `GET /api/portfolio`
  Returns the portfolio content from `data/portfolio.json`.

- `POST /api/contact`
  Accepts contact form submissions and stores them in `data/messages.json`.

## Contact Form Payload

The backend expects:

```json
{
  "name": "Your Name",
  "email": "your@email.com",
  "interest": "Internship opportunity",
  "message": "Your message"
}
```

Required fields:

- `name`
- `email`
- `interest`
- `message`

The backend also validates that the email format is correct.

## Customization

To update visible portfolio content, edit:

```text
data/portfolio.json
```

To change the layout or sections, edit:

```text
src/App.jsx
```

To change colors, typography, spacing, cards, buttons, and overall UI, edit:

```text
src/styles.css
```

## Notes

- `dist/` is generated after running `npm run build`.
- `node_modules/` contains installed dependencies and is ignored by git.
- Contact messages are stored locally in `data/messages.json`.
- The backend serves the built frontend only, so source files like `src/App.jsx` are not exposed directly.

## Verification Status

The project has already been verified for:

- successful frontend build
- successful page load
- successful `GET /api/portfolio`
- successful valid contact form submission
- successful invalid email validation
- blocked direct access to source and data files

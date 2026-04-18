# React Engineering Student Portfolio

This project is a React-based portfolio website styled like a modern engineering student portfolio.

## Stack

- React
- Vite
- Node.js
- JSON API for portfolio content and contact form submissions

## Run

```bash
npm run build
npm start
```

This serves the website at:

```text
http://localhost:3000
```

## Useful Scripts

- `npm run build` creates the production frontend build
- `npm start` serves the built website
- `npm run backend` runs the Node backend only
- `npm run dev` runs the Vite frontend dev server

If you use `npm run dev`, run `npm run backend` in a second terminal so the API is available.

## API

- `GET /api/portfolio`
- `POST /api/contact`

Contact submissions are saved to `data/messages.json`.

## Notes

- Update visible portfolio content in `data/portfolio.json`
- Update layout in `src/App.jsx`
- Update styling in `src/styles.css`

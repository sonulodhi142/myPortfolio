# Personal portfolio

A responsive React portfolio built with Vite. Its text, skills, projects, experience, and social links are driven by one data file.

## Run locally

From this directory:

```sh
npm install
npm run dev
```

Create a production build with `npm run build`.

## Personalize the content

Edit [`src/data/portfolio.js`](./src/data/portfolio.js) to change your name, role, location, phone, email, introduction, skills, projects, experience, and social links. Project categories and the project filter buttons update automatically from the project data. Add a `url` to a project to show its live link.

The supplied project cards are sample content. Replace them with your own work before publishing. Experience is optional; add entries to the `experience` array to show that section.

## Customize the design

Global colors and typography are in `src/index.css`. Layout, responsive breakpoints, and component styles are in `src/App.css`.

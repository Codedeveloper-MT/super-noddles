# 🍜 Super Noddles

A noodle recipe and community website built with Next.js. Discover recipes,
connect with other noodle lovers, and share your own creations.

## Features

- Home page with a hero section and an animated image slideshow
- Responsive navbar and sticky footer shown on every page
- Breadcrumb navigation that updates with the current page
- Login and registration pages
- Recipes section with a dynamic route (`/recipes/[slug]`)
- Community, About, and Contact pages
- Styled with CSS Modules

## Tech Stack

- [Next.js](https://nextjs.org/) (App Router)
- [React](https://react.dev/)
- TypeScript
- CSS Modules

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or newer
- npm

### Installation

```bash
git clone <your-repo-url>
cd super-noddles
npm install
```

### Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
npm start
```

## Project Structure

```
super-noddles/
├── app/
│   ├── layout.tsx            # root layout (navbar, breadcrumb, footer)
│   ├── page.tsx              # home page
│   ├── globals.css           # global styles
│   ├── about/
│   ├── community/
│   ├── contact/
│   ├── dashboard/
│   ├── account/
│   │   ├── login/
│   │   └── register/
│   └── recipes/
│       ├── [slug]/           # single recipe page
│       └── create-recipe/
├── components/
│   ├── NavbarMain/
│   ├── FooterBottom/
│   ├── HomeBody/
│   ├── ImageSlideShow/
│   ├── Breadcrumb/
│   ├── LoginForm/
│   └── RegistrationForm/
└── public/
    └── images/               # noodle photos and logo
```

## Pages

| URL                      | Description                  |
| ------------------------ | ---------------------------- |
| `/`                      | Home                         |
| `/about`                 | About the project            |
| `/community`             | Community                    |
| `/contact`               | Contact                      |
| `/account`               | My Account                   |
| `/account/login`         | Login                        |
| `/account/register`      | Register                     |
| `/dashboard`             | Dashboard (after login)      |
| `/recipes`               | All recipes                  |
| `/recipes/[slug]`        | A single recipe              |
| `/recipes/create-recipe` | Create a new recipe          |

## Roadmap

- [ ] Make the login and registration forms work (`useState`, validation)
- [ ] Show real recipes from data on `/recipes`
- [ ] Build the `[slug]` recipe detail page
- [ ] Add authentication and protect `/dashboard`
- [ ] Connect a database

## What I Learned

- How the Next.js App Router turns folders into URLs
- Building reusable components and layouts
- Styling with CSS Modules
- Client vs server components (`"use client"`)
- Debugging with the browser's Inspect and Network tabs

## Author

Created by **Mpiloenhle Thandolwethu Ntanda**, 2026.
# 🍜 Super Noddles

A noodle recipe and community website built with Next.js. Browse recipes shared by the community, open a recipe to see its full ingredients and steps, and join the community with an account.

## Features

- Home page with a hero section and an animated image slideshow
- Navbar, breadcrumb navigation, and sticky footer on every page
- Community page listing recipe cards with photos
- Recipe detail page (`/community/[slug]`) showing description, ingredients, and instructions
- Recipes stored in a SQLite database
- Account page with registration and login forms
- Forgot password, About, and Contact pages
- Styled with CSS Modules

## Tech Stack

- [Next.js](https://nextjs.org/) (App Router)
- [React](https://react.dev/)
- TypeScript
- [better-sqlite3](https://github.com/WiseLibs/better-sqlite3) (SQLite database)
- CSS Modules

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (current LTS recommended)
- npm

### Installation

```bash
git clone <your-repo-url>
cd super-noddles
npm install
```

### Set up the database

Create and fill the database with the sample recipes (run from the project root):

```bash
node initdb.js
```

This creates `community.db`. The script drops and recreates the `recipes` table every time, so only run it when you want to reset the sample data.

### Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build for production

```bash
npm run build
npm start
```

## Project Structure

```
super-noddles/
├── app/
│   ├── layout.tsx               # root layout (navbar, breadcrumb, footer)
│   ├── page.tsx                 # home page
│   ├── globals.css              # global styles
│   ├── about/
│   ├── contact/
│   ├── dashboard/
│   ├── account/
│   │   ├── page.tsx             # register + login together
│   │   ├── login/
│   │   ├── register/
│   │   └── forgot-password/
│   └── community/
│       ├── page.tsx             # recipe cards
│       └── [slug]/page.tsx      # single recipe
├── components/
│   ├── NavbarMain/
│   ├── FooterBottom/
│   ├── Breadcrumb/
│   ├── HomeBody/
│   ├── ImageSlideShow/
│   ├── ContactForm/
│   ├── LoginForm/
│   ├── RegistrationForm/
│   └── PasswordForm/
├── lib/
│   └── community.ts             # database queries
├── public/
│   └── images/                  # logo and noodle photos
├── initdb.js                    # creates and seeds community.db
├── next.config.ts
└── package.json
```

## Pages

| URL                       | Description                         |
| ------------------------- | ----------------------------------- |
| `/`                       | Home                                |
| `/about`                  | About Super Noddles                 |
| `/contact`                | Contact form and details            |
| `/account`                | Register and login                  |
| `/account/login`          | Login                               |
| `/account/register`       | Register                            |
| `/account/forgot-password`| Reset password                      |
| `/community`              | All community recipes               |
| `/community/[slug]`       | A single recipe                     |
| `/dashboard`              | Dashboard (after login)             |

## Database

Recipes live in `community.db` in the project root, in a `recipes` table:

| Column         | Notes                                   |
| -------------- | --------------------------------------- |
| `slug`         | unique, used in the URL                 |
| `title`, `summary`, `description` | text                 |
| `image`        | image URL                               |
| `cooking_time`, `difficulty`, `servings` | recipe details    |
| `ingredients`, `instructions` | stored as JSON text, converted back to arrays in `lib/community.ts` |

Notes:

- Database code runs on the server only. Never import `lib/community.ts` in a file with `"use client"`.
- `community.db` is listed in `.gitignore` (`*.db`), so run `node initdb.js` after cloning.
- Recipe photos come from Unsplash, so `next.config.ts` allows `images.unsplash.com`.

## Roadmap

- [ ] Make the login, registration, and contact forms work (`useState`, validation, server actions)
- [ ] Hash passwords and add real authentication
- [ ] Protect `/dashboard`
- [ ] Let users create and share their own recipes
- [ ] Move to a hosted database before deploying (SQLite files don't persist on many hosts)

## What I Learned

- How the App Router turns folders into URLs
- Reusable components, layouts, and CSS Modules
- Server vs client components (`"use client"`)
- Reading data from SQLite in server components
- Dynamic routes with `[slug]`
- Debugging with the browser's Inspect and Network tabs

## Author

Created by **Mpiloenhle Thandolwethu Ntanda**, 2026.
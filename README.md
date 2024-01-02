

# Next.js Dashboard App

## Overview

This project is a dynamic dashboard application built with React, Next.js, Tailwind CSS, and API Routes. It focuses on enhancing modularity, maintainability, and efficient data handling.

## Features

1. **Dynamic React Components:**
   - Built interactive and modular components with React and Next.js for scalability and efficient code organization.

2. **Responsive Design with Tailwind CSS:**
   - Implemented sleek and modern UI with responsive layouts using Tailwind CSS for utility-first styling.
   
3. **Data Visualization with Graphs:**
   - Integrated graph components to visualize data trends, enhancing analytical capabilities.

4. **API Routes Integration:**
   - Leveraged Next.js API Routes for seamless backend integration, optimizing data fetching and handling.

5. **Full-stack Implementation:**
   - Comprehensive tech stack, including React, Next.js, Tailwind CSS, and API Routes, for a robust dashboard application.
   - Utilized React hooks for efficient state management on the pricing page.


## Tech Stack

- React
- Next.js
- Tailwind CSS
- API Routes

## Project Structure

# Next.js Dashboard App

## Project Structure

```plaintext
nextjs-dashboard-app/
├── components/
│   ├── BarChart.jsx
│   ├── Header.jsx
│   ├── RecentOrders.jsx
│   ├── Sidebar.jsx
│   ├── TopCards.jsx
│   └── logo.svg
├── data/
│   └── data.js
├── pages/
│   ├── api/
│   │   ├── _app.js
│   │   ├── _document.js
│   │   ├── graphs.jsx
│   │   ├── index.js
│   │   ├── profile.jsx
│   │   ├── setting.jsx
│   │   └── subscription.jsx
│   ├── index.js
│   ├── profile.jsx
│   ├── setting.jsx
│   └── subscription.jsx
├── public/
├── styles/
│   └── globals.css
├── .gitignore
├── README.md
├── jsconfig.json
├── next.config.js
├── package-lock.json
├── package.json
├── postcss.config.js
└── tailwind.config.js

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.



# Next.js Dashboard App
![Deployed App](https://github.com/adityaS011/Dashboard_graff/blob/main/public/ss.png)
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

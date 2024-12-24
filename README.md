# MySpace

A minimalist social media application that allows users to create profiles, write blogs, and interact with others. Built with a modern tech stack to ensure performance, scalability, and ease of use.

---

## Features

- **User Authentication**: Secure user login via GitHub using NextAuth.
- **User Profiles**: Create and customize user profiles.
- **Blog Creation**: Write, publish, and share blogs.
- **Responsive Design**: Mobile-first design using Tailwind CSS for a seamless user experience across devices.
- **Database**: Powered by PostgreSQL for reliable data storage, hosted on Neon.

---

## Tech Stack

- **Frontend**: React, Next.js
- **Backend**: Prisma, NextAuth
- **Database**: PostgreSQL (via Neon)
- **Styling**: Tailwind CSS
- **Deployment**: Vercel

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/shahin-r71/my-space.git
   cd my-space
   ```
2. Install dependencies:

   ```bash
   npm install
   ```
3. Set up environment variables:

   Create a `.env` file in the root directory with the following content:

   ```bash

     DATABASE_URL=<your-postgresql-database-url>

     AUTH_SECRET=<your-nextauth-secret>

     AUTH_GITHUB_ID=<your-github-client-id>

     AUTH_GITHUB_SECRET=<your-github-client-secret>
   ```
4. Run database migrations:

   ```
   npx prisma migrate dev

   ```
5. Start the development server:

   ```
   npm run dev

   ```
6. Open the app in your browser at [http://localhost:3000](http://localhost:3000).

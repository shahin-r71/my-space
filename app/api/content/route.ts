import { prisma } from "@/lib/prisma"
export async function GET() {
  const blogs = await prisma.blog.findMany()
  console.log(blogs)
  return new Response(JSON.stringify(blogs))
}

// const posts = [
//   {
//     title: "The Future of AI",
//     slug: "future-of-ai",
//     content: "Exploring the potential advancements in artificial intelligence over the next decade, focusing on ethics, automation, and the role of AI in society."
//   },
//   {
//     title: "A Guide to JavaScript ES6",
//     slug: "guide-to-js-es6",
//     content: "An in-depth overview of the new features introduced in ECMAScript 6 (ES6) and how they can improve your JavaScript development workflow."
//   },
//   {
//     title: "Understanding React Hooks",
//     slug: "understanding-react-hooks",
//     content: "An introduction to React Hooks, with examples of how they simplify state and side-effect management in functional components."
//   },
//   {
//     title: "Mastering CSS Grid",
//     slug: "mastering-css-grid",
//     content: "A comprehensive guide to CSS Grid layout, covering everything from basic to advanced grid techniques to create dynamic web layouts."
//   },
//   {
//     title: "Introduction to TypeScript",
//     slug: "introduction-to-typescript",
//     content: "Learn the basics of TypeScript, the superset of JavaScript, and how it enhances development with static typing and modern JavaScript features."
//   },
//   {
//     title: "Building APIs with Node.js",
//     slug: "building-apis-nodejs",
//     content: "A detailed guide to building scalable and efficient RESTful APIs using Node.js and Express, including error handling and middleware."
//   },
//   {
//     title: "Getting Started with GraphQL",
//     slug: "getting-started-graphql",
//     content: "An introduction to GraphQL, explaining its core concepts and demonstrating how it differs from REST APIs with real-world examples."
//   },
//   {
//     title: "Understanding Async/Await in JavaScript",
//     slug: "understanding-async-await",
//     content: "Learn how async/await simplifies handling asynchronous operations in JavaScript, making your code cleaner and easier to maintain."
//   },
//   {
//     title: "State Management with Redux",
//     slug: "state-management-redux",
//     content: "A practical guide to managing application state using Redux in modern web applications, including middleware and advanced patterns."
//   },
//   {
//     title: "Web Security Best Practices",
//     slug: "web-security-best-practices",
//     content: "Essential web security practices, such as securing authentication, preventing XSS and CSRF attacks, and protecting sensitive data."
//   },
//   {
//     title: "Responsive Web Design Basics",
//     slug: "responsive-web-design-basics",
//     content: "Learn how to create websites that look great on any device by using responsive design techniques like flexible grids and media queries."
//   },
//   {
//     title: "Exploring Progressive Web Apps",
//     slug: "exploring-progressive-web-apps",
//     content: "An introduction to Progressive Web Apps (PWAs), focusing on how they enhance user experiences by combining the best of web and mobile apps."
//   }
// ];

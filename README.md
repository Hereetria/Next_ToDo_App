# 📝 Next-ToDo-App — Full-Stack Task Management Prototype

<br>

[![🐛 Report Bug](https://img.shields.io/badge/🐛_Report_Bug-red?style=for-the-badge)](../../issues/new?labels=bug)
[![✨ Request Feature](https://img.shields.io/badge/✨_Request_Feature-blue?style=for-the-badge)](../../issues/new?labels=enhancement)

<br>

## 📌 Project Overview
Next-ToDo-App is a **full-stack task management** prototype built with **Next.js**.  
It demonstrates **modern web application patterns** with a focus on **simplicity**, **clean structure**, and **developer-friendly practices**.

The app enables users to securely sign in, create and update tasks, move them between statuses, and browse through a **clean, paginated UI**.  
⚡ **Optimistic updates** ensure a smooth experience, and the folder structure follows best practices for maintainability.

<br>

## ✨ Features

### 🧱 General Architecture
- 🌐 **Full-stack with Next.js** — frontend and backend in one codebase  
- 🧠 **Prisma ORM** — type-safe, reliable database operations  
- 🔐 **Authentication** — secure login and session handling with NextAuth  
- 🔄 **State Management** — React Query with optimistic updates for smooth UX  
- 🎨 **UI/UX** — Tailwind CSS + shadcn/ui for modern, minimal design  
- 📑 **Pagination** — clean and fast task lists with paginated display

---

### 📝 Task Management
- ➕ Create tasks with statuses: **Not_Started**, **In_Progress**, **Completed**  
- ✏️ Update or move tasks between statuses  
- 🗑️ Delete tasks instantly with optimistic feedback  
- 📄 Paginated listing for smooth browsing

<br>

## 🖼️ Screenshots

> ℹ️ A quick visual overview of the project’s main pages and features.

<table align="center">
  <tr>
    <td align="center">
      <img src="./public/screenshots/tasks.png" width="95%"><br>
      <sub><b>Tasks Page</b></sub>
    </td>
    <td align="center">
      <img src="./public/screenshots/login.png" width="95%"><br>
      <sub><b>Login Page</b></sub>
    </td>
    <td align="center">
      <img src="./public/screenshots/login.png" width="95%"><br>
      <sub><b>Another Page</b></sub>
    </td>
  </tr>
  <tr>
    <td align="center">
      <img src="./public/screenshots/tasks.png" width="95%"><br>
      <sub><b>Tasks Page</b></sub>
    </td>
    <td align="center">
      <img src="./public/screenshots/login.png" width="95%"><br>
      <sub><b>Login Page</b></sub>
    </td>
    <td align="center">
      <img src="./public/screenshots/login.png" width="95%"><br>
      <sub><b>Another Pageaoeuaaoeuaoeauaoeuaoeaueoa</b></sub>
    </td>
  </tr>
</table>




<br>

## 🧰 Tech Stack

This project was built using the following technologies:

<p>
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white" />
  <img src="https://img.shields.io/badge/NextAuth.js-3C873A?style=for-the-badge&logo=nextdotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/React%20Query-FF4154?style=for-the-badge&logo=reactquery&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/shadcn%2Fui-000000?style=for-the-badge&logo=shadcnui&logoColor=white" />
</p>


<br>

## Installation
1. Clone the repository  
2. Install dependencies  
3. Configure `.env` variables (DATABASE_URL, NEXTAUTH_URL, NEXTAUTH_SECRET, etc.)  
4. Run `npx prisma migrate dev`  
5. Start the development server with `npm run dev`

<br>

## 📜 License

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

This project is licensed under the terms described in the [LICENSE](./LICENSE) file.

---

© 2025 Yusuf Okan Sirkeci — [Hereetria](https://github.com/Hereetria)

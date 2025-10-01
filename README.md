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
Shown below in order:  
**1. Tasks** · **2. Login**

<p align="center">
  <img src="./public/screenshots/tasks.png" width="32%">
  <img src="./public/screenshots/login.png" width="32%">
  <img src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Transparent.gif" width="32%">
</p>

<br>

## 🧰 Tech Stack
<p>
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/shadcn/ui-000000?style=for-the-badge&logo=shadcnui&logoColor=white" />
  <img src="https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white" />
  <img src="https://img.shields.io/badge/NextAuth.js-000000?style=for-the-badge&logo=nextauth&logoColor=white" />
  <img src="https://img.shields.io/badge/React_Query-FF4154?style=for-the-badge&logo=reactquery&logoColor=white" />
  <img src="https://img.shields.io/badge/bcryptjs-338CC7?style=for-the-badge&logoColor=white" />
</p>

<br>

## 📥 Installation
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

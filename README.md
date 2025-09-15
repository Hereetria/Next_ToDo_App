# Next-ToDo-App — Full-Stack Task Management Prototype

## Project Overview
Next-ToDo-App is a prototype task management application built with **Next.js** as a full-stack development framework.  
The project demonstrates modern web application patterns with a focus on simplicity, clean structure, and developer-friendly practices.  

The application allows users to sign in securely, create and update tasks, move them between statuses, and interact with a clean, paginated UI.  
Optimistic updates ensure a smooth user experience, while the codebase follows best practices for folder structure and maintainability.  

## Features

### General Architecture
- **Full-stack with Next.js**: Both frontend and backend are integrated in a single codebase  
- **Prisma ORM**: Database operations are handled with Prisma, ensuring type-safe and reliable queries  
- **Authentication**: Secure login and session handling with NextAuth  
- **State Management**: React Query manages server state with support for optimistic updates on delete and update actions  
- **UI/UX**: Tailwind CSS and shadcn/ui provide a modern and minimal design system  
- **Pagination**: Implemented to keep task lists clear, fast, and user-friendly  

### Task Management
- Users can create tasks with three possible statuses (e.g., NOT_STARTED, IN_PROGRESS, COMPLETED)  
- Tasks can be updated or moved between statuses  
- Tasks can be deleted instantly with optimistic feedback  
- Paginated listing provides a smooth browsing experience  

---

## Technical Highlights
- **Next.js App Router** for routing and server components  
- **Prisma Client** for database interactions with strong typing  
- **NextAuth** for authentication and session management  
- **React Query** for data fetching, caching, and optimistic updates  
- **Tailwind + shadcn/ui** for a scalable and consistent UI layer  
- **Clean Folder Structure** ensuring separation of concerns and maintainability

## Installation
1. Clone the repository  
2. Install dependencies  
3. Configure `.env` variables (DATABASE_URL, NEXTAUTH_SECRET, etc.)  
4. Run `npx prisma migrate dev`  
5. Start the development server with `npm run dev`


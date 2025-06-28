College Placement Management System
Table of Contents
Introduction
Features
Tech Stack
Project Structure
User Roles
Installation
Introduction
The College Placement Management System is a web application designed to streamline the placement process in educational institutions. This system provides distinct roles for students, TPO (Training and Placement Officer) admin, management admin, and super admin, ensuring a smooth and efficient workflow.

Features
Student Portal: Students can view available job opportunities, apply for placements, and track their application status.
TPO Admin Portal: TPO admins can manage job postings, schedule interviews, and track student progress.
Management Admin Portal: Management can oversee the entire placement process, view reports, and analyze data.
Super Admin Portal: The super admin can manage system settings, user accounts, and oversee the management of TPO and management users.
Tech Stack
Frontend: Vite + React.js, Tailwind CSS
Backend: Node.js, Express.js
Database: MongoDB
Authentication: JSON Web Tokens (JWT)
Styling: Tailwind CSS
Project Structure
   ├── public
   ├── src
   |   ├── api
   |   ├── assets
   │   ├── components
   |   |   ├──LandingPages
   |   |   └──students
   │   ├── config
   │   ├── context
   │   ├── hooks
   │   ├── pages
   │   ├── styles
   │   ├── utility
   │   ├── App.jsx
   │   └── main.jsx
   ├── .gitignore
   ├── .eslint.config.js
   ├── index.html
   ├── package-lock.json
   ├── package.json
   ├── postcss.config.js
   ├── tailwind.config.js
   └── vite.config.js
User Roles
Students: Can view and apply for job opportunities, update profiles, and track their application status.
TPO Admin: Manages job postings, student applications, and interviews.
Management Admin: Oversees the placement process, views reports, and analyzes placement data.
Super Admin: Manages the overall system, creates new admin users (TPO and Management), and manages system-level settings.
Installation
Clone the project
https://github.com/Prasanna0401/College-Placement-Management-System-FrontEnd.git
Go to the project directory
cd my-project
Install the necessary packages:
npm install
Start the frontend development server:
npm run dev
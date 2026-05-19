# StudyNotion - EdTech Platform

StudyNotion is a fully functional, MERN stack-based robust educational technology (EdTech) platform designed to create, consume, and rate educational content. It operates similarly to leading platforms like Physics Wallah (PW), Udemy, and Coursera. 

The platform facilitates a seamless learning and teaching experience by connecting Instructors (content creators) with Students (learners) through a scalable and interactive web application.

## 🚀 Key Features (Why it stands out!)

This project demonstrates production-ready capabilities required for modern EdTech platforms:

### 1. Robust Authentication & Authorization (RBAC)
- **Role-Based Access Control:** Distinct dashboards and permissions for **Students**, **Instructors**, and **Admins**.
- **Secure Login/Signup:** JWT-based authentication with Bcrypt password hashing.
- **Email Verification:** OTP-based email verification during registration (Nodemailer).
- **OAuth Integration:** Sign up and Log in seamlessly using Google Authentication.
- **Password Management:** Secure password reset flows with time-sensitive links sent via email.

### 2. Comprehensive Course Management System
- **Instructor Dashboard:** Instructors can create, edit, and delete courses.
- **Structured Curriculum:** Courses are divided into Sections and Sub-sections.
- **Media Handling:** Direct video uploading to **Cloudinary** for course content.
- **Draft/Publish Workflow:** Instructors can save courses as drafts before publishing them.

### 3. Student Experience & E-Commerce
- **Seamless Checkout:** Integrated **Razorpay** payment gateway for secure course purchases.
- **Shopping Cart:** Students can add multiple courses to a cart and checkout in bulk.
- **Enrolled Courses:** Dedicated dashboard section for students to track their purchased courses.
- **Rating & Review System:** Students can rate and review courses they are enrolled in, contributing to a dynamic aggregate rating system.

### 4. Advanced Profile Management
- Users can update their personal details, profile picture (uploaded to Cloudinary), and passwords.
- Option to permanently delete accounts, which automatically cleans up associated data and media.

## 💻 Tech Stack

### Frontend
- **React.js (Vite):** Fast, modern UI development.
- **Redux Toolkit:** Centralized state management (Cart, Auth, Profile).
- **Tailwind CSS:** Utility-first styling for a highly responsive and modern design.
- **React Router:** For seamless single-page application (SPA) routing.
- **React Hook Form:** For performant and easy-to-use form validations.
- **Vite PWA:** Configured for Progressive Web App capabilities.

### Backend
- **Node.js & Express.js:** Scalable and robust backend server.
- **MongoDB & Mongoose:** NoSQL database for flexible and relational data modeling (embedding & referencing).
- **JWT (JSON Web Tokens):** For stateless, secure API authentication.
- **Bcrypt.js:** For secure password hashing.

### Cloud & Third-Party Integrations
- **Cloudinary:** Cloud storage for storing user avatars, course thumbnails, and high-quality course videos.
- **Razorpay:** Payment gateway for processing transactions securely.
- **Nodemailer:** For sending automated emails (OTP, welcome emails, payment confirmations).

## 📂 Project Structure

The project is structured into a Monorepo style containing both the frontend and backend:

```text
StudyNotion/
├── backend-StudyNotion/      # Node.js + Express backend
│   ├── config/               # Database, Cloudinary, Razorpay configurations
│   ├── controllers/          # Business logic (Auth, Course, Payment, Profile, etc.)
│   ├── mail/                 # HTML Email templates
│   ├── middlewares/          # JWT Auth, Role verification (isStudent, isInstructor, isAdmin)
│   ├── models/               # Mongoose schemas (User, Course, Section, Rating, etc.)
│   ├── routes/               # API route definitions
│   └── utils/                # Helper functions (Cloudinary uploader, Mail sender)
│
├── Frontend/                 # React.js frontend
│   ├── src/
│   │   ├── components/       # Reusable UI components (Core features, Common UI)
│   │   ├── hooks/            # Custom React hooks
│   │   ├── pages/            # Page-level components
│   │   ├── reducer/          # Redux root reducer
│   │   ├── services/         # API integration (Axios calls)
│   │   └── Slices/           # Redux Toolkit slices (Auth, Cart, Profile)
│   └── vite.config.js        # Vite configuration (including PWA setup)
```

## 🛠️ Setup & Installation

### Prerequisites
- Node.js (v16+)
- MongoDB Atlas Account (or local MongoDB)
- Cloudinary Account
- Razorpay Account

### 1. Clone the repository
```bash
git clone https://github.com/Soanpapdi2517/StudyNotion-MERN-Project.git
cd StudyNotion-MERN-Project
```

### 2. Backend Setup
```bash
cd backend-StudyNotion
npm install
```
Create a `.env` file in the `backend-StudyNotion` directory and add the following:
```env
PORT=4000
MONGODB_URL=<your-mongodb-connection-string>
JWT_SECRET=<your-jwt-secret>
FOLDER_NAME=StudyNotion

# Nodemailer Credentials
MAIL_HOST=smtp.gmail.com
MAIL_USER=<your-email-address>
MAIL_PASS=<your-app-password>

# Cloudinary Credentials
CLOUD_NAME=<your-cloudinary-name>
API_KEY=<your-cloudinary-api-key>
API_SECRET=<your-cloudinary-api-secret>

# Razorpay Credentials
RAZORPAY_KEY=<your-razorpay-key>
RAZORPAY_SECRET=<your-razorpay-secret>
```
Start the backend server:
```bash
npm start
```

### 3. Frontend Setup
Open a new terminal window:
```bash
cd Frontend
npm install
```
Create a `.env` file in the `Frontend` directory and add:
```env
VITE_BASE_URL=http://localhost:4000/api/v1
```
Start the frontend development server:
```bash
npm run dev
```

## 🎯 Why this project proves I am a fit for Physics Wallah

Building StudyNotion required solving the exact technical challenges a massive platform like Physics Wallah faces daily:

1. **Complex Relational Data in NoSQL:** Modeled a deeply nested curriculum structure (`Course -> Sections -> SubSections(Videos)`) using MongoDB ObjectIDs and population, mimicking how courses are structured on PW.
2. **Media Delivery & Storage:** Handled large media uploads by integrating Cloudinary, ensuring videos and images are stored securely and served quickly, a critical requirement for a video-first platform like PW.
3. **Role-Based Workflows:** Built secure, segregated workflows for content creators (instructors) and consumers (students) using middleware-level JWT verification.
4. **Payment Reliability:** Integrated Razorpay with webhook-like signature verification (`verifyPaymentSignature`) to ensure students only get access to courses upon successful transaction validation.

---
*Developed with ❤️ by Soanpapdi2517*

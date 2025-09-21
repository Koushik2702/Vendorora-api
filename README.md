
# Vendorora – Full Stack Inventory Management System

Vendorora is a complete full-stack application built to manage firms, vendors, and products in a clean, modular way. It’s designed for real-world use cases like admin dashboards, vendor management systems, and product tracking. This project includes everything from API routing to frontend dashboards — all connected to a MongoDB backend.

---

## 🚀 Tech Stack

**Backend:**
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- Multer (for file/image uploads)
- Dotenv (for environment variables)

**Frontend (Admin + Client):**
- React.js
- Vite.js
- TailwindCSS
- Axios (API integration)

---

## 📁 Folder Structure

```
Vendorora/
├── Backend/           # Express backend (API, models, controllers)
├── dashboard/         # Admin dashboard (React + Vite)
├── client_react/      # User-facing client app (React + Vite)
├── .env.example       # Sample env file
├── .gitignore         # Git exclusions
```

---

## ✨ Features

- CRUD APIs for Firms, Vendors, Products
- JWT-based authentication middleware
- Secure file uploads (e.g., product/vendor images)
- React-based dashboards for both Admin and Users
- MongoDB data models using Mongoose
- Clean project structure following MVC pattern

---

## ⚙️ Getting Started

### Backend Setup

```bash
cd Backend
npm install
npm start
```

Make sure to create a `.env` file based on `.env.example`:
```
PORT=4000
MONGO_URI=mongodb+srv://<your-db-uri>
JWT_SECRET=your_secret_key
```

---

### Frontend (Admin & Client)

```bash
# For Admin Dashboard
cd dashboard/dashboardpro
npm install
npm run dev

# For Client App
cd client_react/client
npm install
npm run dev
```

---

## 🔐 Auth Middleware (verifyToken.js)

JWT token is expected in the `Authorization` header as:
```
Bearer <your-token>
```

Protected routes will return 401 if not authenticated.

---

## 📷 File Uploads

Image files are handled by `multer` and stored inside:
```
Backend/uploads/
```

Accessible URLs can be served via Express static middleware (if configured).

---

## 🙌 Contribution

This project is part of a learning + job showcase initiative.  
Feel free to clone, modify, and use it to learn backend + frontend integration.

---

## 📄 License

Free to use for educational and project-building purposes.

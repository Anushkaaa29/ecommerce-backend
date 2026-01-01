📦 E-Commerce Backend API

A complete Node.js + Express + MongoDB backend for an e-commerce application with authentication, admin roles, products, and orders.

🚀 Features

User Registration & Login (JWT Authentication)

Role-based Access (Admin / User)

Product Management (CRUD)

Order & Cart System

Protected Routes

MongoDB Atlas Integration

Clean MVC Folder Structure

🛠️ Tech Stack

Node.js

Express.js

MongoDB + Mongoose

JWT (Authentication)

bcryptjs (Password hashing)

dotenv

Postman (API Testing)

📂 Folder Structure
src/
 ├── config/
 │    └── db.js
 ├── controllers/
 │    ├── userController.js
 │    ├── productController.js
 │    └── orderController.js
 ├── middleware/
 │    ├── authMiddleware.js
 │    └── adminMiddleware.js
 ├── models/
 │    ├── user.js
 │    ├── product.js
 │    └── order.js
 ├── routes/
 │    ├── userRoutes.js
 │    ├── productRoutes.js
 │    └── orderRoutes.js
 └── index.js

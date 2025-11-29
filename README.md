# User Management API

This is a simple **Node.js + Express + MongoDB** project created for learning **API documentation** with **Postman**.  
The goal is to help beginners understand how endpoints work in a practical environment.

The project includes:
- User Registration
- User Login (with JWT authentication)
- Get All Users
- Get Single User
- Update User
- Delete User

It also includes security features such as **helmet**, **express-rate-limit**, **password hashing**, and **JWT tokens**.

## Features
- Register new users  
- Login users & generate JWT tokens  
- CRUD operations on users  
- MongoDB Atlas database  
- Environment variables with `.env`  
- Rate limiting for API protection  
- Security headers with helmet  
- Postman collection–friendly structure  

---

## Tech Stack
- **Node.js**
- **Express.js**
- **MongoDB Atlas**
- **Mongoose**
- **JWT (jsonwebtoken)**
- **bcryptjs**
- **Helmet**
- **Express Rate Limit**
- **CORS**


---

## Installation & Setup

### 1. Clone the repo
```bash
git clone https://github.com/chosenvincent1/user-management-api.git
cd user-management
```

### 2. Install dependencies
```
npm install
```

### 3. Create a .env file in the root folder
```
MONGO_URI=your_mongodb_atlas_connection_string
PORT=3000
JWT_SECRET=your_secret_key
JWT_EXPIRES_IN=1h
NODE_ENV=development
RATE_LIMIT_WINDOW_MINUTES=15
RATE_LIMIT_MAX_REQUESTS=100
```

### Start Server
```
npm run dev
```
If everything works well, you should see:
```
Server started on port 3000
MongoDB Connected
```

## Testing With Postman
1. Open Postman
2. Import your routes manually or use the URL directly
3. Test the available endpoints:
- POST /api/register
- POST /api/login
- GET /api/users
- GET /api/users/:id
- PUT /api/users/:id
- DELETE /api/users/:id

Make sure to include the JWT Authorization header for protected routes:
```
Authorization: Bearer <your_token_here>
```

## Purpose of This Project
This project was built for a tutorial on writing API documentation.
It demonstrates how to:

- Structure API endpoints clearly
- Write descriptions, parameters, and responses
- Organize documentation into folders
- Test endpoints using Postman
- Build a simple Express API that matches the documentation

It is not meant to be a full production system—just a clean learning starter.
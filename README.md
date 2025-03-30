# User Authentication App

A web application using React and Node.js that allows users to register, log in, and view a static table after a successful login.

## Features

- User registration with name, date of birth, email, and password
- User login with email and password
- JWT authentication
- Protected routes
- Static data table accessible only to authenticated users

## Technologies Used

### Frontend
- React
- React Router DOM
- React Bootstrap
- Axios
- Webpack

### Backend
- Node.js
- Express
- MongoDB / Mongoose
- JWT authentication
- Bcrypt.js for password hashing

## Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB running locally or connection to MongoDB Atlas

### Installation

1. Clone the repository

2. Install server dependencies:
```
cd server
npm install
```

3. Install client dependencies:
```
cd client
npm install
```

### Environment Variables

Create a `.env` file in the server directory with the following variables:
```
NODE_ENV=development
PORT=5000
MONGO_URI=mongodb://localhost:27017/user_auth_db
JWT_SECRET=your_jwt_secret
```

### Running the Application

1. Start the server:
```
cd server
npm run dev
```

2. Start the client:
```
cd client
npm start
```

3. Open your browser and navigate to `http://localhost:3000`

## Project Structure

- `client/` - React frontend application
- `server/` - Node.js backend API
  - `config/` - Database connection setup
  - `controllers/` - API route controllers
  - `middleware/` - Authentication middleware
  - `models/` - MongoDB data models
  - `routes/` - API routes

# User Authentication App - MERN Stack

A full-stack web application that allows users to register, log in, and view a static table after successful authentication.

## Features

- User Registration with name, date of birth, email, and password
- User Login with JWT authentication
- Protected Routes that require authentication
- Static Data Table visible only after login
- Modern UI with React Bootstrap

## Technology Stack

### Frontend
- React
- React Router for navigation
- React Bootstrap for UI components
- Axios for API calls
- JWT stored in browser localStorage

### Backend
- Node.js with Express
- MongoDB for data storage
- JWT for authentication
- Bcrypt for password hashing

## Project Structure

```
├── client/                 # React frontend
│   ├── public/             # Static files
│   └── src/                # React source code
│       ├── components/     # Reusable components
│       ├── pages/          # Page components
│       └── services/       # API services
│
└── server/                 # Node.js backend
    ├── config/             # Configuration files
    ├── controllers/        # Request handlers
    ├── middleware/         # Express middleware
    ├── models/             # Mongoose models
    └── routes/             # API routes
```

## Getting Started

### Prerequisites
- Node.js and npm
- MongoDB (local or Atlas)

### Installation

1. Clone the repository
```
git clone https://github.com/yourusername/user-auth-app.git
cd user-auth-app
```

2. Install dependencies
```
# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```

3. Set up environment variables
Create a `.env` file in the server directory with:
```
NODE_ENV=development
PORT=5000
MONGO_URI=mongodb://localhost:27017/user_auth_db
JWT_SECRET=your_jwt_secret
```

4. Run the application
```
# Start server
cd server
npm run dev

# Start client (in a new terminal)
cd client
npm start
```

5. Open your browser and go to `http://localhost:3000`

## API Endpoints

- `POST /api/users/register` - Register a new user
- `POST /api/users/login` - Login a user

## Screenshots

[Add your screenshots here]

## License

This project is licensed under the MIT License

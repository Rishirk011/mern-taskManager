# MERN Task Manager

A full-stack task management application built with MongoDB, Express, React, and Node.js. Features user authentication with JWT, task CRUD operations, and state management with Zustand.

## Features

- ✅ User Registration & Login with JWT Authentication
- ✅ Create, Read, Update, Delete Tasks
- ✅ User-specific Task Management (Data Isolation)
- ✅ Protected Routes with Token Verification
- ✅ Password Encryption with Bcryptjs
- ✅ State Management with Zustand
- ✅ Responsive UI with Bootstrap
- ✅ Error Handling & Validation

## Tech Stack

### Backend
- **Node.js** - Runtime Environment
- **Express.js** - Web Framework
- **MongoDB** - NoSQL Database
- **Mongoose** - MongoDB ODM
- **JWT (jsonwebtoken)** - Authentication
- **Bcryptjs** - Password Hashing
- **CORS** - Cross-Origin Request Handling
- **Express Async Handler** - Error Handling

### Frontend
- **React** - UI Library
- **Vite** - Build Tool & Dev Server
- **React Router** - Navigation
- **Zustand** - State Management
- **Fetch API** - HTTP Requests
- **Bootstrap** - CSS Framework
- **Bootstrap Icons** - Icon Library

## Project Structure

```
mern-taskManager/
├── backend/
│   ├── config/
│   │   └── Db.js                 # Database Connection
│   ├── models/
│   │   ├── userModel.js          # User Schema
│   │   └── taskModel.js          # Task Schema
│   ├── controllers/
│   │   ├── userController.js     # Auth Logic (Register, Login)
│   │   └── taskController.js     # Task CRUD Operations
│   ├── routes/
│   │   ├── routes.js             # Main Router
│   │   ├── userRoutes.js         # Auth Routes
│   │   └── taskRoutes.js         # Task Routes
│   ├── middlewares/
│   │   ├── authMiddleware.js     # JWT Verification
│   │   └── errorMiddleware.js    # Error Handler
│   ├── package.json
│   ├── index.js                  # Server Entry Point
│   └── .env                       # Environment Variables
│
└── frontend/
    ├── src/
    │   ├── pages/
    │   │   ├── login/
    │   │   │   ├── Login.jsx
    │   │   │   └── login.module.css
    │   │   ├── signup/
    │   │   │   ├── SignUp.jsx
    │   │   │   └── signup.module.css
    │   │   └── home/
    │   │       ├── Home.jsx
    │   │       └── home.module.css
    │   ├── components/
    │   │   ├── listItem/
    │   │   │   ├── ListItem.jsx
    │   │   │   └── listItem.module.css
    │   │   └── editTask/
    │   │       ├── EditComp.jsx
    │   │       └── editTask.module.css
    │   ├── store/
    │   │   ├── authStore.js       # Auth State Management
    │   │   └── taskStore.js       # Task State Management
    │   ├── utils/
    │   ├── App.jsx                # Main App & Routing
    │   ├── main.jsx               # Entry Point
    │   └── index.css
    ├── package.json
    ├── vite.config.js
    └── .env                        # Environment Variables
```

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB (Local or Atlas Cloud)

### Backend Setup

1. Navigate to backend folder:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file in backend folder:
```env
PORT=3000
DATABASE_URL=mongodb://localhost:27017/mern-taskmanager
JWT_SECRET=your_secret_key_here
NODE_ENV=development
```

Replace `DATABASE_URL` with your MongoDB connection string if using MongoDB Atlas.

4. Start the backend server:
```bash
npm run server
```

Server will run on `http://localhost:3000`

### Frontend Setup

1. Navigate to frontend folder:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file in frontend folder:
```env
VITE_API_URL=http://localhost:3000
```

4. Start the development server:
```bash
npm run dev
```

Frontend will run on `http://localhost:5173`

## Running the Project

### Option 1: Separate Terminals
```bash
# Terminal 1 - Backend
cd backend
npm run server

# Terminal 2 - Frontend
cd frontend
npm run dev
```

### Option 2: Concurrent (from root with concurrently installed)
```bash
npm run dev
```

## API Endpoints

### User Routes (`/usercollections`)
- `POST /register` - Register new user
  - Body: `{ userName, email, password }`
  - Returns: `{ _id, userName, email, token }`

- `POST /login` - Login user
  - Body: `{ email, password }`
  - Returns: `{ _id, email, token }`

- `GET /me` - Get current user (Protected)
  - Headers: `Authorization: Bearer <token>`
  - Returns: User object without password

### Task Routes (`/taskcollections`)
- `GET /` - Get all tasks for logged-in user (Protected)
  - Headers: `Authorization: Bearer <token>`
  - Returns: Array of tasks

- `POST /` - Create new task (Protected)
  - Headers: `Authorization: Bearer <token>`
  - Body: `{ task, description }`
  - Returns: Created task object

- `PUT /:id` - Update task (Protected)
  - Headers: `Authorization: Bearer <token>`
  - Body: `{ task, description }`
  - Returns: Updated task object

- `DELETE /:id` - Delete task (Protected)
  - Headers: `Authorization: Bearer <token>`
  - Returns: `{ id }`

## Usage

1. **Register**: Create a new account with username, email, and password
2. **Login**: Sign in with email and password to get JWT token
3. **Add Task**: Enter task name and description, click "add"
4. **Edit Task**: Click "edit" button, modify task details, click "change"
5. **Delete Task**: Click "remove" button to delete task
6. **Logout**: Click "logout" button to exit

## Key Features Explained

### JWT Authentication
- Tokens generated on registration/login (30-day expiry)
- Stored in localStorage for persistence
- Sent in `Authorization: Bearer <token>` header for protected routes
- Verified by `authMiddleware` on server

### State Management (Zustand)
- **authStore**: Manages user, token, and auth actions
- **taskStore**: Manages tasks array, loading, error states, and CRUD operations

### API Calls with Fetch
- Zustand stores use native Fetch API for HTTP requests
- Token automatically included in Authorization header
- Error handling and loading states managed in store

### Protected Routes
- Only authenticated users can access home page
- Unauthenticated users redirected to login

### Data Isolation
- Tasks are linked to user via MongoDB ObjectId reference
- Users can only see/modify their own tasks

## Error Handling

- Backend: Custom error middleware catches and formats errors
- Frontend: Zustand stores handle API errors and set error states
- Form validation on both client and server side

## Future Improvements

- Add task categories/tags
- Implement task due dates and priorities
- Add task search and filtering
- Email verification on signup
- Password reset functionality
- Task sharing between users
- Dark mode theme

## Contributing

Feel free to fork this project and submit pull requests for improvements.

## License

ISC

---

Built with ❤️ by Rishirk011

# VideoTube Backend API

A robust Node.js backend API for a YouTube-like video sharing platform built with Express.js, MongoDB, and JWT authentication.

## 🚀 Features

### Authentication & User Management
- **User Registration** with avatar and cover image upload
- **JWT-based Authentication** with access and refresh tokens
- **Secure Password Hashing** using bcrypt
- **User Profile Management** (update avatar, cover image, account details)
- **Password Change** functionality
- **User Channel Profiles** with subscriber counts

### Video Platform Features
- **Video Upload** with Cloudinary integration
- **Video Management** (title, description, thumbnail, duration)
- **Watch History** tracking
- **Subscription System** (subscribe/unsubscribe to channels)
- **Comment System** on videos
- **Like/Unlike** functionality for videos and comments
- **Playlist Management** for organizing videos

### Technical Features
- **RESTful API** design
- **File Upload** with Multer middleware
- **Cloud Storage** integration (Cloudinary)
- **Database Pagination** support
- **Error Handling** with custom API responses
- **CORS** configuration
- **Cookie-based** token management

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens)
- **File Upload**: Multer
- **Cloud Storage**: Cloudinary
- **Password Hashing**: bcrypt
- **Development**: Nodemon

## 📁 Project Structure

```
BACKEND/
├── src/
│   ├── controllers/
│   │   └── user.controller.js      # User-related API logic
│   ├── db/
│   │   └── index.js               # Database connection
│   ├── middlewares/
│   │   ├── auth.middleware.js     # JWT authentication
│   │   └── multer.middleware.js   # File upload handling
│   ├── models/
│   │   ├── user.model.js          # User schema
│   │   ├── video.model.js         # Video schema
│   │   ├── comment.model.js       # Comment schema
│   │   ├── like.model.js          # Like schema
│   │   ├── playlist.model.js      # Playlist schema
│   │   ├── subscription.model.js  # Subscription schema
│   │   └── tweet.model.js         # Tweet schema
│   ├── routes/
│   │   └── user.route.js          # User API routes
│   ├── utils/
│   │   ├── ApiError.js            # Custom error handling
│   │   ├── ApiResponse.js         # Standardized API responses
│   │   ├── asyncHandler.js        # Async error wrapper
│   │   └── cloudinary.js          # Cloudinary integration
│   ├── app.js                     # Express app configuration
│   ├── constants.js               # Application constants
│   └── index.js                   # Server entry point
├── public/                        # Static files
├── package.json                   # Dependencies and scripts
└── README.md                      # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB database
- Cloudinary account for file storage

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd BACKEND
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory with the following variables:
   ```env
   PORT=8000
   MONGODB_URI=your_mongodb_connection_string
   CORS_ORIGIN=http://localhost:3000
   
   # JWT Configuration
   ACCESS_TOKEN_SECRET=your_access_token_secret
   REFRESH_TOKEN_SECRET=your_refresh_token_secret
   ACCESS_TOKEN_EXPIRY=1d
   REFRESH_TOKEN_EXPIRY=10d
   
   # Cloudinary Configuration
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

The server will start on `http://localhost:8000`

## 📚 API Endpoints

### Authentication Routes (`/api/v1/users`)

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/register` | Register new user | No |
| POST | `/login` | User login | No |
| POST | `/logout` | User logout | Yes |
| POST | `/refresh-token` | Refresh access token | No |
| POST | `/change-password` | Change user password | Yes |
| GET | `/current-user` | Get current user profile | Yes |
| PATCH | `/update-account` | Update account details | Yes |
| PATCH | `/avatar` | Update user avatar | Yes |
| PATCH | `/cover-image` | Update cover image | Yes |
| GET | `/c/:username` | Get user channel profile | Yes |
| GET | `/history` | Get user watch history | Yes |

### Request/Response Examples

#### User Registration
```http
POST /api/v1/users/register
Content-Type: multipart/form-data

{
  "fullName": "John Doe",
  "email": "john@example.com",
  "username": "johndoe",
  "password": "password123",
  "avatar": [file],
  "coverImage": [file] // optional
}
```

#### User Login
```http
POST /api/v1/users/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

## 🔐 Authentication

The API uses JWT (JSON Web Tokens) for authentication:

- **Access Token**: Short-lived token for API access
- **Refresh Token**: Long-lived token for refreshing access tokens
- **Cookies**: Tokens are stored in HTTP-only cookies for security

### Protected Routes
Routes marked with "Auth Required" need a valid access token in the request header:
```http
Authorization: Bearer <access_token>
```

## 📊 Database Models

### User Model
- `username` (unique, indexed)
- `email` (unique)
- `fullName`
- `avatar` (Cloudinary URL)
- `coverImage` (Cloudinary URL)
- `watchHistory` (array of video IDs)
- `password` (hashed)
- `refreshToken`

### Video Model
- `videoFile` (Cloudinary URL)
- `thumbnail` (Cloudinary URL)
- `title`
- `description`
- `duration`
- `views` (default: 0)
- `isPublished` (default: true)
- `owner` (User reference)

### Other Models
- **Comment**: Video comments with content and owner
- **Like**: Like/unlike videos, comments, or tweets
- **Subscription**: Channel subscription relationships
- **Playlist**: User-created video playlists

## 🛡️ Security Features

- **Password Hashing**: bcrypt with salt rounds
- **JWT Tokens**: Secure token-based authentication
- **HTTP-only Cookies**: Prevents XSS attacks
- **CORS Configuration**: Controlled cross-origin requests
- **Input Validation**: Request data validation
- **Error Handling**: Custom error responses

## 🚀 Development

### Available Scripts

- `npm run dev`: Start development server with nodemon
- `npm start`: Start production server

### Code Quality

The project uses:
- **Prettier**: Code formatting
- **ES6 Modules**: Modern JavaScript imports/exports
- **Async/Await**: Modern asynchronous programming
- **Custom Error Handling**: Standardized API responses


## 👨‍💻 Author

**Santosh** - Backend Developer

---

For more information or support, please open an issue in the repository.

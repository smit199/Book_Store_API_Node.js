# Book Store API

A comprehensive Node.js REST API for managing a book store with user authentication, authorization, PDF file handling, and multi-language support.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Configuration](#configuration)
- [Getting Started](#getting-started)
- [API Documentation](#api-documentation)
- [Testing with Postman](#testing-with-postman)
- [Project Structure](#project-structure)
- [Security Features](#security-features)
- [Available Scripts](#available-scripts)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

- **User Authentication & Authorization**: Secure JWT-based authentication system
- **Book Management**: Full CRUD operations for managing books
- **Book Image File Handling**: Upload book Image files
- **Multi-Language Support**: Internationalization (i18n) with support for:
  - English (en)
  - Hindi (hi)
  - Gujarati (gu)
- **Admin Panel**: Dedicated admin routes for administrative operations
- **API Documentation**: Interactive Swagger UI documentation
- **Security**: Multiple security measures implemented:
  - Rate limiting
  - Helmet for HTTP headers security
  - Data sanitization against NoSQL injection
  - XSS protection
  - Password encryption with bcryptjs
- **Request Logging**: Morgan HTTP request logger
- **Data Validation**: Input validation using validator library

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js v4.18.2
- **Database**: MongoDB (via Mongoose v7.2.4)
- **Authentication**: JWT (jsonwebtoken v9.0.0)
- **Security**:
  - Helmet v7.0.0
  - bcryptjs v2.4.3
  - express-rate-limit v6.7.0
  - express-mongo-sanitize v2.2.0
  - xss-clean v0.1.4
- **File Upload**: Multer v1.4.5-lts.1
- **Internationalization**: i18n v0.15.1
- **API Documentation**: Swagger UI v5.0.0
- **Development**: Nodemon v2.0.22
- **Environment Variables**: dotenv v16.1.4

## 📦 Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB instance (local or cloud)
- Postman (for API testing)

### Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/smit199/Book_Store_API_Node.js.git
   cd Book_Store_API_Node.js
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure environment variables**:
   - Copy `sample.env` to `config.env`:
     ```bash
     cp sample.env config.env
     ```
   - Edit `config.env` with your configuration

## ⚙️ Configuration

Create a `config.env` file in the root directory with the following environment variables:

```env
PORT=3000
DATABASE=mongodb+srv://username:password@cluster.mongodb.net/book_store
JWT_SECRET='my jwt secret'
JWT_EXPIRE_TIME=30d
```

### Environment Variables Reference

- `PORT`: Port number for the server (default: 3000)
- `DATABASE`: MongoDB connection string
- `JWT_SECRET`: JWT secret key to generate token
- `JWT_EXPIRE_TIME`: token expiration time

## 🚀 Getting Started

### Development Mode

Start the server with nodemon for auto-reload:

```bash
npm start
```

The application will run on `http://localhost:3000`

### Production Mode

```bash
npm run start:prod
```

## 📚 API Documentation

### Swagger UI

Access the interactive API documentation:

- **User API Docs**: [http://localhost:3000/BookStore/api-docs](http://localhost:3000/BookStore/api-docs)
- **Admin API Docs**: [http://localhost:3000/BookStore/api-docs/admin](http://localhost:3000/BookStore/api-docs/admin)

### API Base URL

All API endpoints are prefixed with `/BookStore`

### Available Routes

- **User Routes**: `/BookStore/*` - General user operations
- **Admin Routes**: `/BookStore/admin/*` - Admin operations

### Welcome Endpoint

```
GET /BookStore
```

Response:
```json
{
  "status": "success",
  "message": "Welcome to the book store application"
}
```

## 🧪 Testing with Postman

### Overview

This project includes a comprehensive Postman collection for testing all API endpoints. The collection contains pre-configured requests for both user and admin operations.

### Postman Collection File

**File**: `Book_Store.postman_collection.json`

This collection includes:
- User authentication and registration endpoints
- Book CRUD operations
- Book image file upload
- Admin operations
- Multi-language request examples
- Error handling scenarios

### Setting Up Postman

#### 1. **Import the Collection**

- Open Postman
- Click on **Import** button (top-left corner)
- Select **File** tab
- Choose `Book_Store.postman_collection.json` from the project root
- Click **Import**

#### 2. **Set Up Environment Variables**

Create a Postman environment with the following variables:

| Variable | Default Value | Description |
|----------|---------------|-------------|
| `base_url` | `http://localhost:3000` | Base URL of the API |
| `token` | `` | JWT authentication token (auto-populated after login) |
| `userId` | `` | User ID (auto-populated after user creation) |
| `bookId` | `` | Book ID (auto-populated after book creation) |
| `adminToken` | `` | Admin JWT token |
| `locale` | `en` | Language locale (en, hi, gu) |

**Steps to create environment:**
1. Click on the **Environments** icon (left sidebar)
2. Click **Create New** → **Environment**
3. Name it `Book_Store_Dev`
4. Add the variables above
5. Save and select it from the environment dropdown

### Running Collections

#### 1. **Single Request**
- Click on a request in the collection
- Review the pre-filled values
- Click **Send**

#### 2. **Run Entire Collection**
- Right-click on collection folder
- Select **Run Collection**
- Configure run settings:
  - Number of iterations
  - Delay between requests (ms)
  - Environment to use
- Click **Run**

#### 3. **Run with Data Files**
- Click **Runner** in top menu
- Select collection and environment
- Click **Select File** to choose CSV/JSON data file
- Click **Run**

### Sample Request Headers

Include these headers in your Postman requests:

```
Authorization: Bearer {token}
Content-Type: application/json
Accept-Language: en
X-API-Key: your-api-key (if required)
```

### Common Response Scenarios

#### Success Response (200 OK)
```json
{
  "status": "success",
  "data": { ... },
}
```

#### Error Response (400-500)
```json
{
  "status": "error",
  "message": "Human-readable error message"
}
```

### Troubleshooting

| Issue | Solution |
|-------|----------|
| **401 Unauthorized** | Check if token is valid and not expired. Re-login and update token variable. |
| **404 Not Found** | Verify the endpoint URL and ensure the resource exists in database. |
| **500 Internal Server Error** | Check server logs. Ensure MongoDB connection is active. |
| **Rate Limit Error** | Wait for the time window to reset (1 hour) or restart the server. |
| **CORS Error** | Verify API base URL in environment variables. Check CORS configuration. |
| **File Upload Failed** | Ensure file size is under limit (500kb). Check file format is supported. |

## 📁 Project Structure

```
Book_Store_API_Node.js/
├── controllers/          # Business logic and request handlers
├── models/              # MongoDB schemas and models
├── routes/              # API route definitions
│   ├── userRoutes.js
│   └── adminRoutes.js
├── utils/               # Utility functions and helpers
├── docs/                # API documentation (Swagger/OpenAPI)
│   ├── api-docs.yaml
│   └── api-docs-admin.yaml
├── public/              # Static files and localization
│   └── locales/         # i18n translation files
├── app.js              # Express app configuration
├── server.js           # Server entry point
├── package.json        # Project dependencies
├── nodemon.json        # Nodemon configuration
├── sample.env          # Sample environment variables
├── Book_Store.postman_collection.json  # Postman collection
└── .gitignore          # Git ignore file
```

## 🔒 Security Features

### Implemented Security Measures

1. **Rate Limiting**: Restricts requests to 1000 per hour per IP
2. **Helmet**: Sets various HTTP headers for security
3. **NoSQL Injection Prevention**: Data sanitization via express-mongo-sanitize
4. **XSS Protection**: XSS-clean middleware
5. **Password Security**: bcryptjs for password hashing
6. **Input Validation**: Validator library for data validation
7. **JWT Authentication**: Secure token-based authentication
8. **Error Handling**: Global error handling middleware

## 📝 Available Scripts

| Script | Description |
|--------|-------------|
| `npm start` | Run server in development mode with hot-reload |
| `npm run start:prod` | Run server in production mode |
| `npm test` | Run test suite (not configured) |

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 📧 Support

For support and questions, please open an issue on the GitHub repository.

---

**Repository**: [smit199/Book_Store_API_Node.js](https://github.com/smit199/Book_Store_API_Node.js)

**Created**: June 16, 2023

**Last Updated**: July 30, 2023

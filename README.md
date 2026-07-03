# Book Store API

A comprehensive Node.js REST API for managing a book store with user authentication, authorization, PDF file handling, and multi-language support.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Configuration](#configuration)
- [Getting Started](#getting-started)
- [API Documentation](#api-documentation)
- [Project Structure](#project-structure)
- [Security Features](#security-features)
- [Available Scripts](#available-scripts)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

- **User Authentication & Authorization**: Secure JWT-based authentication system
- **Book Management**: Full CRUD operations for managing books
- **PDF File Handling**: Upload and download book PDF files
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
NODE_ENV=development
DATABASE=mongodb+srv://username:password@cluster.mongodb.net/book_store
PORT=3000
```

### Environment Variables Reference

- `NODE_ENV`: Set to `development` or `production`
- `DATABASE`: MongoDB connection string
- `PORT`: Port number for the server (default: 3000)

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

This project is licensed under the ISC License - see the LICENSE file for details.

## 📧 Support

For support and questions, please open an issue on the GitHub repository.

---

**Repository**: [smit199/Book_Store_API_Node.js](https://github.com/smit199/Book_Store_API_Node.js)

**Created**: June 16, 2023

**Last Updated**: July 30, 2023

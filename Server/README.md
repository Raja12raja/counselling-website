# Counselling Website Backend

A well-structured Node.js backend for the counselling website with organized routes, proper error handling, and clean architecture.

## 🏗️ Project Structure

```
Server/
├── config/
│   └── passport.js          # Passport authentication configuration
├── db/
│   └── connection.js         # MongoDB database connection
├── Model/                    # Database schemas and models
│   ├── availabilitySchema.js
│   ├── counselorSchema.js
│   ├── schemedata.js
│   └── userschema.js
├── routes/                   # Organized route files
│   ├── auth.js              # Authentication routes
│   ├── appointments.js       # Appointment management routes
│   ├── availability.js      # Availability management routes
│   └── counselors.js        # Counselor API routes
├── utils/                    # Utility functions
│   └── cleanup.js           # Data cleanup and seeding functions
├── app.js                    # Main application file
├── package.json
└── README.md
```

## 🚀 Features

- **Organized Architecture**: Clean separation of concerns with dedicated route files
- **Authentication**: Google OAuth integration using Passport.js
- **Appointment Management**: CRUD operations for counseling appointments
- **Availability System**: Manage counselor availability schedules
- **Counselor Profiles**: Complete counselor information and management
- **Error Handling**: Comprehensive error handling and validation
- **Scheduled Tasks**: Automated cleanup of outdated data
- **Health Monitoring**: Built-in health check endpoints

## 📋 Prerequisites

- Node.js (v14 or higher)
- MongoDB
- Google OAuth credentials

## ⚙️ Environment Variables

Create a `.env` file in the Server directory with:

```env
# MongoDB Connection String
DATABASE=mongodb://localhost:27017/counselling-website

# Google OAuth Credentials
CLIENTID=your_google_client_id_here
CLIENTSECRET=your_google_client_secret_here

# Session Secret
SESSION_SECRET=your_session_secret_here

# Optional: Custom Port
PORT=6005
```

## 🛠️ Installation

1. **Install dependencies:**
   ```bash
   cd Server
   npm install
   ```

2. **Set up environment variables** (see above)

3. **Start the server:**
   ```bash
   npm run devStart
   ```

## 🔌 API Endpoints

### Authentication
- `GET /auth/google` - Google OAuth login
- `GET /auth/google/callback` - Google OAuth callback
- `GET /auth/login/success` - Check login status
- `GET /auth/logout` - User logout

### Appointments
- `GET /counselor/appointments` - Get all appointments
- `GET /counselor/appointments/:counselorName` - Get appointments by counselor
- `POST /counselor/appointments` - Create new appointment
- `PUT /counselor/appointments` - Update appointment status

### Availability
- `GET /availability` - Get all availability data
- `GET /availability/:counselorName` - Get availability by counselor
- `POST /availability` - Create new availability slot
- `PUT /availability` - Update availability status

### Counselors
- `GET /api/counselors` - Get all counselors
- `GET /api/counselors/:id` - Get counselor by ID

### System
- `GET /` - API information and available endpoints
- `GET /health` - Server health check

## 🔒 Security Features

- CORS configuration for frontend integration
- Session management with secure cookies
- Input validation and sanitization
- Proper error handling without exposing sensitive information

## 📅 Scheduled Tasks

- **Daily Cleanup**: Automatically removes outdated availability data at 12:10 AM
- **Data Seeding**: Initializes counselor data on first run

## 🐛 Error Handling

The backend includes comprehensive error handling:
- Input validation errors (400)
- Resource not found errors (404)
- Internal server errors (500)
- Global error handler for unexpected errors

## 🧪 Testing

To test the API endpoints:

1. **Health Check:**
   ```bash
   curl http://localhost:6005/health
   ```

2. **API Info:**
   ```bash
   curl http://localhost:6005/
   ```

## 📝 Code Quality

- **Consistent formatting** with proper indentation
- **Clear comments** explaining each section
- **Modular structure** for easy maintenance
- **Proper error handling** throughout the application
- **Input validation** for all endpoints

## 🚀 Production Considerations

- Set `secure: true` in session configuration for HTTPS
- Use environment-specific MongoDB connections
- Implement rate limiting for API endpoints
- Add logging middleware for production monitoring
- Consider using PM2 or similar process manager

## 🤝 Contributing

1. Follow the existing code structure
2. Add proper error handling to new endpoints
3. Include input validation for all inputs
4. Update this README for new features
5. Test thoroughly before submitting changes

## 📞 Support

For issues or questions about the backend:
- Check the error logs in the console
- Verify environment variables are set correctly
- Ensure MongoDB is running and accessible
- Check the health endpoint for server status

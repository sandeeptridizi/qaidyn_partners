# Qaidyn Partners - Corporate Website with Integrated CMS

A modern, full-featured corporate website built with React and Vite, featuring a powerful **inline Content Management System (CMS)** that allows administrators to edit all website content without touching code.

![Version](https://img.shields.io/badge/version-2.0.0-blue.svg)
![React](https://img.shields.io/badge/React-18.3.1-61dafb.svg)
![Node](https://img.shields.io/badge/Node-16+-green.svg)
![MongoDB](https://img.shields.io/badge/MongoDB-8.0-green.svg)

---

## 🌟 Key Features

### 🎯 **Integrated CMS System** (NEW!)
- **100% Editable Content** - All 13 pages fully editable via admin interface
- **Inline Editing** - Hover over any text or image to edit in place
- **No Code Required** - Update content without developer intervention
- **Real-time Updates** - Changes appear instantly without page refresh
- **Rich Text Editor** - Format text with HTML support
- **Image Management** - Upload and manage images (up to 10MB)
- **Secure Authentication** - JWT-based admin login system
- **Cloud Storage** - Cloudinary integration for image hosting

### 📄 Public-Facing Pages (All CMS-Enabled)
1. **Homepage** - Hero, services, statistics, testimonials, CTA
2. **About Us** - Company story, mission, team, values
3. **Services** - Dynamic service pages with detailed information
4. **Industries** - Industry-specific solutions and case studies
5. **Case Studies** - Interactive timeline and project showcases
6. **Blog System** - Dynamic blog with rich content
7. **Careers** - Job listings with dynamic filters
8. **Contact** - Contact information and inquiry form
9. **Promotions** - Marketing campaigns and special offers
10. **Guidelines** - Company guidelines and procedures
11. **Privacy Policy** - Legal content with HTML editing
12. **Terms & Conditions** - Legal agreements
13. **Single Blog Pages** - Individual blog post pages

### 🔐 Admin Features
- **Secure Admin Login** - JWT authentication with bcrypt password hashing
- **Admin Toolbar** - Persistent edit mode toggle
- **Content Dashboard** - Centralized content management
- **Blog Management** - Create, edit, delete blog posts
- **Career Management** - Manage job listings
- **Image Upload** - Direct image upload with preview
- **Content Versioning** - All changes tracked in MongoDB

---

## 🛠️ Tech Stack

### Frontend
| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 18.3.1 | UI Library |
| **Vite** | 7.2.2 | Build Tool & Dev Server |
| **React Router** | 7.10.0 | Client-side Routing |
| **React Toastify** | 11.0.5 | Notifications |
| **React Icons** | 5.5.0 | Icon Library |
| **Draft.js** | 0.11.7 | Rich Text Editor |
| **html-react-parser** | 5.2.10 | HTML Parsing |

### Backend (CMS Server)
| Technology | Version | Purpose |
|------------|---------|---------|
| **Node.js** | 16+ | Runtime Environment |
| **Express** | 4.18.2 | Web Framework |
| **MongoDB** | 8.0+ | Database |
| **Mongoose** | 8.0.0 | ODM for MongoDB |
| **JWT** | 9.0.2 | Authentication |
| **Bcrypt** | 2.4.3 | Password Hashing |
| **Multer** | 1.4.5 | File Upload |
| **Cloudinary** | 2.0+ | Image Storage |
| **CORS** | 2.8.5 | Cross-Origin Support |

### Legacy Backend (Firebase)
- **Firebase Authentication** - User authentication
- **Firebase Realtime Database** - Legacy data storage
- **Firebase Storage** - Legacy file storage

---

## 📋 Prerequisites

Before you begin, ensure you have:
- **Node.js** v16 or higher
- **npm** or **yarn**
- **MongoDB** (local or MongoDB Atlas account)
- **Cloudinary Account** (optional, for production image storage)

---

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone <repository-url>
cd qaidyn_partners
```

### 2. Install Dependencies

#### Frontend
```bash
cd Client
npm install
```

#### Backend (CMS Server)
```bash
cd server
npm install
```

### 3. Environment Configuration

#### Frontend `.env` (Client/.env)
```env
VITE_API_URL=http://localhost:5000/api
```

#### Backend `.env` (server/.env)
```env
# MongoDB Connection
MONGODB_URI=mongodb://localhost:27017/qaidyn_cms
# Or use MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/qaidyn_cms

# JWT Secret (generate a secure random string)
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production

# Cloudinary (Optional - for production image storage)
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret

# Server Configuration
PORT=5000
NODE_ENV=development
```

### 4. Create Admin User

```bash
cd server
npm run setup
```

This creates an admin account:
- **Email:** `admin@qaidynpartners.com`
- **Password:** `Admin@123`

⚠️ **Important:** Change the default password after first login!

### 5. Start Development Servers

#### Terminal 1 - Backend Server
```bash
cd server
npm run dev
```
Server runs on `http://localhost:5000`

#### Terminal 2 - Frontend
```bash
cd Client
npm run dev
```
Frontend runs on `http://localhost:5173`

### 6. Access the Application

- **Public Site:** `http://localhost:5173`
- **Admin Login:** `http://localhost:5173/admin-login`
- **Test Editable Page:** `http://localhost:5173/test-editable`

---

## 📖 CMS System Guide

### How to Edit Content

1. **Login as Admin**
   - Navigate to `/admin-login`
   - Enter credentials
   - Click "Login"

2. **Enable Edit Mode**
   - After login, you'll see an **Admin Toolbar** at the top
   - Toggle "Edit Mode" ON

3. **Edit Text**
   - Hover over any text
   - Click the **pencil icon** that appears
   - Edit in the modal
   - Click "Save"

4. **Edit Images**
   - Hover over any image
   - Click the **camera icon**
   - Upload new image (max 10MB)
   - Preview and confirm

5. **Save Changes**
   - All changes are automatically saved to the database
   - No page refresh needed
   - Changes persist across sessions

### Content Key Pattern

All content is stored with unique keys following this pattern:

```
{page}.{section}.{element}
```

**Examples:**
- `home.hero.title` - Homepage hero title
- `about.mission.description` - About page mission description
- `services.feature.1.title` - Service feature 1 title

**Dynamic Keys (for lists):**
- `blog.{id}.hero.title` - Blog post title
- `careers.job.{index}.title` - Job listing title
- `casestudies.service.{index}.description` - Service description

### Advanced Features

#### Rich HTML Editing
Legal pages (Privacy Policy, Terms & Conditions) support full HTML editing:
- Bold, italic, underline
- Headings (H1-H6)
- Lists (ordered/unordered)
- Links
- Custom HTML

#### Dynamic Job Listings (Careers Page)
- Edit job titles, descriptions, requirements
- Filters automatically update based on content
- Rich text for responsibilities and qualifications

#### Interactive Timeline (Case Studies)
- Edit all timeline steps
- Customize descriptions and labels
- Maintain visual design while editing content

---

## 📁 Project Structure

```
qaidyn_partners/
├── Client/                          # Frontend Application
│   ├── src/
│   │   ├── components/
│   │   │   ├── Editable/           # ⭐ CMS Components
│   │   │   │   ├── EditableText.jsx
│   │   │   │   ├── EditableImage.jsx
│   │   │   │   ├── EditTextModal.jsx
│   │   │   │   ├── EditImageModal.jsx
│   │   │   │   └── Editable.css
│   │   │   ├── AdminLogin/         # Admin Authentication
│   │   │   ├── AdminToolbar/       # Edit Mode Toggle
│   │   │   ├── ContactModal/       # Contact Form
│   │   │   ├── Navbar/             # Navigation
│   │   │   ├── Footer/             # Footer Components
│   │   │   └── context/
│   │   │       └── AdminContext.jsx # Admin State Management
│   │   ├── pages/                  # All Page Components (CMS-enabled)
│   │   │   ├── HomePage/
│   │   │   ├── AboutUs/
│   │   │   ├── Services/
│   │   │   ├── Industries/
│   │   │   ├── Blogs/
│   │   │   ├── SingleBlogPage/
│   │   │   ├── Careers/
│   │   │   ├── ContactPage/
│   │   │   ├── Promotions/
│   │   │   ├── Guidelines/
│   │   │   ├── CaseStudies/
│   │   │   ├── PrivacyPolicy/
│   │   │   └── TermsConditions/
│   │   ├── hooks/
│   │   │   └── useHomeContent.jsx  # ⭐ Content Provider Hook
│   │   ├── services/
│   │   │   └── api.js              # ⭐ API Client
│   │   ├── data/
│   │   │   └── blogData.js         # Centralized Blog Data
│   │   ├── App.jsx                 # Main App with Routing
│   │   ├── main.jsx                # Entry Point
│   │   └── index.css               # Global Styles
│   ├── public/                     # Static Assets
│   ├── .env                        # Environment Variables
│   ├── package.json
│   └── vite.config.js
│
├── server/                          # ⭐ CMS Backend
│   ├── controllers/
│   │   ├── contentController.js    # Content CRUD Logic
│   │   └── authController.js       # Authentication Logic
│   ├── models/
│   │   ├── PageContent.js          # Content Schema
│   │   └── Admin.js                # Admin User Schema
│   ├── routes/
│   │   ├── contentRoutes.js        # Content API Routes
│   │   └── authRoutes.js           # Auth API Routes
│   ├── middleware/
│   │   └── adminAuthMiddleware.js  # JWT Verification
│   ├── scripts/
│   │   └── createAdmin.js          # Admin Setup Script
│   ├── uploads/                    # Local Image Storage (dev)
│   ├── server.js                   # Server Entry Point
│   ├── .env                        # Backend Environment Variables
│   └── package.json
│
└── .agent/                          # Documentation
    ├── CMS_FINAL_STATUS.md
    └── workflows/
```

---

## 🔌 API Reference

### Public Endpoints

#### Get All Content
```http
GET /api/content/home
```
Returns all content for the website (public access).

**Response:**
```json
{
  "success": true,
  "content": {
    "home.hero.title": {
      "key": "home.hero.title",
      "type": "text",
      "value": "Welcome to Qaidyn Partners"
    }
  }
}
```

### Protected Endpoints (Admin Only)

All protected endpoints require JWT token in Authorization header:
```
Authorization: Bearer <token>
```

#### Update Content
```http
PUT /api/content/update
Content-Type: application/json

{
  "key": "home.hero.title",
  "type": "text",
  "value": "New Title"
}
```

#### Upload Image
```http
POST /api/content/upload-image
Content-Type: multipart/form-data

key: home.hero.image
image: <file>
```

#### Get All Content (Admin)
```http
GET /api/content/all
```

#### Delete Content
```http
DELETE /api/content/:key
```

### Authentication Endpoints

#### Admin Login
```http
POST /api/admin/login
Content-Type: application/json

{
  "email": "admin@qaidynpartners.com",
  "password": "Admin@123"
}
```

**Response:**
```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "admin": {
    "id": "...",
    "email": "admin@qaidynpartners.com",
    "name": "Admin"
  }
}
```

#### Verify Token
```http
GET /api/admin/verify
Authorization: Bearer <token>
```

---

## 📜 Available Scripts

### Frontend (Client/)
```bash
npm run dev          # Start development server (Vite)
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

### Backend (server/)
```bash
npm run dev          # Start development server (nodemon)
npm start            # Start production server
npm run setup        # Create admin user
```

---

## 🌐 Deployment

### Frontend Deployment (Vercel)

1. **Push to Git Repository**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your repository
   - Configure:
     - **Framework:** Vite
     - **Build Command:** `npm run build`
     - **Output Directory:** `dist`
     - **Root Directory:** `Client`
   - Add environment variable:
     - `VITE_API_URL=https://your-backend-url.com/api`
   - Deploy!

### Backend Deployment (Railway/Render/Heroku)

#### Using Railway

1. **Create Railway Account**
   - Go to [railway.app](https://railway.app)

2. **Deploy from GitHub**
   - New Project → Deploy from GitHub
   - Select your repository
   - Set Root Directory: `server`

3. **Add Environment Variables**
   ```
   MONGODB_URI=mongodb+srv://...
   JWT_SECRET=your-secret-key
   CLOUDINARY_CLOUD_NAME=...
   CLOUDINARY_API_KEY=...
   CLOUDINARY_API_SECRET=...
   PORT=5000
   NODE_ENV=production
   ```

4. **Deploy**
   - Railway will auto-deploy
   - Note your backend URL

#### Using Render

1. **Create Render Account**
   - Go to [render.com](https://render.com)

2. **New Web Service**
   - Connect GitHub repository
   - Root Directory: `server`
   - Build Command: `npm install`
   - Start Command: `npm start`

3. **Add Environment Variables**
   - Same as Railway above

4. **Create MongoDB Atlas Database**
   - Go to [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
   - Create free cluster
   - Get connection string
   - Add to `MONGODB_URI`

### Production Checklist

- [ ] Update `VITE_API_URL` in frontend .env
- [ ] Set up MongoDB Atlas (production database)
- [ ] Configure Cloudinary for image storage
- [ ] Generate secure `JWT_SECRET`
- [ ] Change default admin password
- [ ] Test all CMS features in production
- [ ] Set up SSL/HTTPS
- [ ] Configure CORS for production domains
- [ ] Set up monitoring and logging
- [ ] Create database backups

---

## 🔐 Security Best Practices

### Implemented Security Features
✅ JWT-based authentication  
✅ Bcrypt password hashing  
✅ Protected API routes  
✅ File type validation  
✅ File size limits (10MB)  
✅ CORS configuration  
✅ Input sanitization  

### Recommendations
- Change default admin credentials immediately
- Use strong, unique JWT_SECRET in production
- Enable HTTPS in production
- Implement rate limiting for API endpoints
- Set up regular database backups
- Monitor admin activity logs
- Use environment variables for all secrets
- Keep dependencies updated

---

## 🧪 Testing

### Manual Testing Checklist

**CMS Functionality:**
- [ ] Admin login/logout
- [ ] Edit text content
- [ ] Upload images
- [ ] Content persists after refresh
- [ ] Edit mode toggle works
- [ ] All 13 pages editable

**Page-Specific:**
- [ ] Job filters update (Careers)
- [ ] Timeline editing (Case Studies)
- [ ] Blog content sync
- [ ] Rich HTML editing (Legal pages)

**Cross-Browser:**
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] Mobile browsers

---

## 🎓 CMS Usage Examples

### Example 1: Update Homepage Hero Title

```javascript
// Content Key: home.hero.title
// Default: "Welcome to Qaidyn Partners"

1. Login as admin
2. Navigate to homepage
3. Enable edit mode
4. Hover over hero title
5. Click pencil icon
6. Change to "Transform Your Business with Qaidyn"
7. Click Save
```

### Example 2: Add New Job Listing

```javascript
// Content Keys: careers.job.{index}.*

1. Login as admin
2. Navigate to /careers
3. Enable edit mode
4. Edit job slot (e.g., job.0)
5. Update:
   - careers.job.0.title → "Senior React Developer"
   - careers.job.0.location → "Remote"
   - careers.job.0.level → "Senior"
   - careers.job.0.description → "We are looking for..."
6. Filters automatically update!
```

### Example 3: Update Service Description

```javascript
// Content Key: casestudies.service.0.description

1. Login as admin
2. Navigate to /case-studies
3. Enable edit mode
4. Hover over service card
5. Click pencil on description
6. Update text
7. Changes reflect in both card and modal
```

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. Commit your changes
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. Push to the branch
   ```bash
   git push origin feature/AmazingFeature
   ```
5. Open a Pull Request

---

## 📞 Support

For technical support or questions:
- **Email:** support@qaidynpartners.com
- **Documentation:** See `.agent/` folder for detailed guides
- **Issues:** Create an issue on GitHub

---

## 📄 License

This project is proprietary and confidential.  
© 2026 Qaidyn Partners. All rights reserved.

---

## 🙏 Acknowledgments

- React Team for the amazing framework
- Vite for blazing-fast development
- MongoDB for flexible data storage
- Cloudinary for image hosting
- All open-source contributors

---

## 📊 Project Statistics

- **Total Pages:** 13 (all CMS-enabled)
- **CMS Components:** 6 core components
- **API Endpoints:** 6 endpoints
- **Content Keys:** 200+ unique keys
- **Supported Image Formats:** JPG, PNG, JPEG, WebP
- **Max Upload Size:** 10MB
- **Database:** MongoDB (NoSQL)
- **Authentication:** JWT

---

**Built with ❤️ by the Qaidyn Partners Development Team**

**Status:** ✅ Production Ready | **Version:** 2.0.0 | **Last Updated:** January 2026

# Hacker News MERN App

A full-stack MERN application that scrapes top stories from Hacker News, stores them in MongoDB, and allows authenticated users to bookmark stories.

---

# Live Demo

## Frontend
[https://your-frontend-url.vercel.app](https://web-scraper-5tt4.vercel.app/)

## Backend API
https://web-scraper-ba8f.onrender.com

---

# Features

## Web Scraper
- Scrapes top 10 stories from Hacker News
- Extracts:
  - Title
  - URL
  - Points
  - Author
  - Posted Time
- Stores data in MongoDB
- Runs automatically on server start
- Can be triggered manually using API

---

## Authentication
- User Registration
- User Login
- JWT Authentication
- Protected Routes

---

## Story Features
- View all stories
- Pagination
- Bookmark stories
- Remove bookmarks
- Persist bookmarks in MongoDB

---

## Frontend Features
- React + Vite
- Tailwind CSS UI
- React Context API
- Protected Bookmarks Page
- Responsive Design

---

# Tech Stack

## Frontend
- React
- React Router DOM
- Axios
- Tailwind CSS
- Vite

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Cheerio
- Axios

---

# Folder Structure

```bash
mern-hn-app/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── scraper/
│   ├── server.js
│   └── .env
│
└── frontend/
    ├── src/
    │   ├── api/
    │   ├── components/
    │   ├── context/
    │   ├── pages/
    │   └── App.jsx
```

---

# Installation

## Clone Repository

```bash
git clone https://github.com/siayush735/web-scraper
```

---

# Backend Setup

```bash
cd backend

npm install
```

## Create `.env`

```env
PORT=5000
MONGO_URI=mongodb+srv://ayushsinha4343_db_user:KFuJ8lD64XQJIS2I@cluster0.hgxrutu.mongodb.net/?appName=Cluster0
JWT_SECRET="smrtap"
```

## Run Backend

```bash
npm run dev
```

---

# Frontend Setup

```bash
cd frontend

npm install
```

## Run Frontend

```bash
npm run dev
```

---

# API Endpoints

## Authentication

### Register User

```http
POST /api/auth/register
```

### Login User

```http
POST /api/auth/login
```

---

## Stories

### Get All Stories

```http
GET /api/stories
```

### Get Single Story

```http
GET /api/stories/:id
```

### Toggle Bookmark

```http
POST /api/stories/:id/bookmark
```

### Get Bookmarks

```http
GET /api/stories/bookmarks/all
```

---

## Scraper

### Run Scraper

```http
POST /api/scrape
```

---

# Authentication

Protected APIs require JWT token in headers:

```http
Authorization: Bearer your_token
```

---

# Screenshots

## Home Page
<img width="1920" height="1080" alt="Screenshot (548)" src="https://github.com/user-attachments/assets/3898c92b-24dd-4d24-b292-050e8d39294a" />


## Login Page
<img width="1920" height="1080" alt="Screenshot (549)" src="https://github.com/user-attachments/assets/4f03f952-ae08-4f5e-b296-fd681c218afa" />


## Bookmarks Page
<img width="1920" height="1080" alt="Screenshot (550)" src="https://github.com/user-attachments/assets/bce620c4-093e-4c32-9c40-317d7b981956" />


---

# Deployment

## Frontend
Deployed on Vercel

## Backend
Deployed on Render

## Database
MongoDB Atlas

---

# Author

Ayush Kumar

- Email: ayushsinha4343@gmail.com
- LinkedIn: www.linkedin.com/in/ayush-kumar-88556128a
- GitHub: https://github.com/siayush735

---


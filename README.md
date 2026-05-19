# RIVETO

## 🚀 Overview

RIVETO is a modern, fullstack web application built for scalability and advanced analytics. It features a robust admin panel for management, user tracking, advanced UI components, and secure file/image upload via Cloudinary.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React, Tailwind CSS |
| Backend | Node.js, Express.js |
| Database | MongoDB (Mongoose ODM) |
| Tracking | Custom analytics & event tracking |
| Image Uploads | Cloudinary |
| Payments | Razorpay |

---

## ⚙️ Features

- 📊 **Admin Panel** — Manage users, payments, analytics, and more
- 📈 **Advanced Tracking** — User behavior, transactions, and event analytics
- 🎨 **Modern UI** — Responsive, accessible interface built with Tailwind CSS
- 🖼️ **Cloudinary Image Upload** — Fast, secure, and optimized media storage
- 🔐 **Authentication & Authorization** — Secure user and admin access
- 📝 **RESTful API** — Powerful backend for frontend and mobile clients

---

## 🚦 Quick Start

### 1. Clone the repository

```bash
git clone https://github.com/Nsanjayboruds/RIVETO.git
cd RIVETO
```

### 2. Set up the environment

Copy and edit the environment files:

**Backend:**
```bash
cp backend/.env.example backend/.env
```

**Frontend:**
```bash
cp frontend/.env.example frontend/.env
```

Fill in your MongoDB URI, Razorpay keys, Cloudinary credentials, JWT secrets, etc.

### 3. Install dependencies

```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

### 4. Start development servers

```bash
# Backend (Node.js/Express) — runs on http://localhost:5000
cd backend
npm run dev

# Frontend (React) — runs on http://localhost:3000
cd ../frontend
npm start
```

---

## 🛡️ Environment Configuration

### Backend (`backend/.env.example`)

```env
MONGODB_URI=
JWT_SECRET=
BASE_URL=http://localhost:5000

CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

### Frontend (`frontend/.env.example`)

```env
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_RAZORPAY_KEY=
```

---

## 🖼️ Image Upload with Cloudinary

### Backend Integration

Uses the `cloudinary` and `multer-storage-cloudinary` npm packages. Secure upload endpoints are protected by authentication middleware, and Cloudinary URLs are stored in MongoDB.

**Sample Endpoint (`backend/routes/upload.js`):**

```javascript
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key:    process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'riveto_uploads',
    allowed_formats: ['jpg', 'png', 'jpeg', 'svg', 'webp'],
  },
});
const upload = multer({ storage });

router.post('/upload', upload.single('image'), (req, res) => {
  res.json({ url: req.file.path });
});
```

### Frontend Integration

Use a file input and upload images via `fetch` or Axios to the backend `/upload` endpoint. Store the returned Cloudinary URL for use in the UI or database.

**Sample Usage:**

```javascript
const handleUpload = async (event) => {
  const formData = new FormData();
  formData.append('image', event.target.files[0]);
  const response = await fetch('/api/upload', { method: 'POST', body: formData });
  const data = await response.json();
  setImageUrl(data.url); // Save/display Cloudinary URL
};
```

---

## 📂 Project Structure

```
RIVETO/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── services/
│   ├── .env.example
│   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── utils/
│   │   └── App.jsx
│   ├── .env.example
│   └── package.json
├── CONTRIBUTION.MD
├── README.md
└── ...
```

> **Note:** The project structure above reflects the current state of the repository. If you notice any discrepancies after cloning, please open an issue or a PR to keep this updated.

---

## 🎨 UI/UX

- Fully responsive admin panel
- Advanced dashboard with analytics charts
- Dark/light mode support via Tailwind CSS
- Custom components for user and payment management

---

## 📈 Tracking

- Custom event logging and analytics
- Admin dashboard for real-time tracking

---

## 📝 Contribution Guidelines

> ⭐ **Please star the repo before you start contributing!**

1. Read the full contribution guide: [CONTRIBUTION.MD](./CONTRIBUTION.MD)
2. Fork the project
3. Create your feature branch:
   ```bash
   git checkout -b feature/YourFeature
   ```
4. Commit your changes:
   ```bash
   git commit -m 'Add feature: YourFeature'
   ```
5. Push to your branch:
   ```bash
   git push origin feature/YourFeature
   ```
6. Open a Pull Request

---

## 🌟 Our Amazing Contributors

Thank you to all contributors who have helped make RIVETO better! 🚀

### 🏆 Special Recognition

| Award | Contributor | Contribution |
|---|---|---|
| 🎯 First Contributor | Madhav Majumdar ([@madhav2348](https://github.com/madhav2348)) | First to join and contribute to RIVETO |
| 💡 Most Innovative | Md Ashad ([@asadanwarr0](https://github.com/asadanwarr0)) | Enhanced the About, Contact, and Home sections |
| 🎨 UI/UX Champion | Vedant ([@vedantbudhabaware](https://github.com/vedantbudhabaware)) | Fixed critical UI issues and optimized mobile experience |

Want to see your name here? Check out the [CONTRIBUTION.MD](./CONTRIBUTION.MD) guide!

---

## 🚀 Deployment

- **Frontend:** Easily deployable to [Vercel](https://vercel.com)
- **Backend:** Deployable to [Render](https://render.com) or [Railway](https://railway.app)
- Docker Compose support coming soon!

---

## 📝 License

MIT License. See [LICENSE](./LICENSE) for details.

---

## 🙋‍♂️ Contact

**Nishant Sanjay Borude** — [@Nsanjayboruds](https://github.com/Nsanjayboruds)

---

*Built with React, Tailwind CSS, Node.js, Express, MongoDB, Razorpay, and Cloudinary*
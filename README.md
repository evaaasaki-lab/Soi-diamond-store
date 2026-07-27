# SOI Diamond Store - MLBB Top-Up Platform

A modern web application for Mobile Legends: Bang Bang (MLBB) diamond top-ups with integrated Google Pay payment processing.

## 🎮 Features

- 🛍️ **Top-up Packages** - Display various diamond packages
- 💳 **Google Pay Integration** - Secure payment processing
- 👤 **User Authentication** - Secure login & account management
- 📊 **Admin Dashboard** - Manage packages, view orders, analytics
- 📱 **Responsive Design** - Works on desktop & mobile
- 🔐 **Secure Transactions** - Order tracking & history
- ⚡ **Fast & Scalable** - Built with modern tech stack

## 🛠 Tech Stack

### Frontend
- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React Query** - Data fetching

### Backend
- **Node.js + Express** - Server
- **MongoDB** - Database
- **JWT** - Authentication
- **Google Pay API** - Payment processing

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- MongoDB
- Google Pay API credentials

### Installation

```bash
# Clone repository
git clone https://github.com/evaaasaki-lab/Soi-diamond-store.git
cd Soi-diamond-store

# Install dependencies
cd frontend && npm install
cd ../backend && npm install

# Configure environment
cp frontend/.env.example frontend/.env.local
cp backend/.env.example backend/.env.local
```

### Development

```bash
# Terminal 1 - Frontend (port 3000)
cd frontend && npm run dev

# Terminal 2 - Backend (port 5000)
cd backend && npm run dev
```

## 📁 Project Structure

```
soi-diamond-store/
├── frontend/              # Next.js application
│   ├── pages/
│   ├── components/
│   ├── styles/
│   └── package.json
├── backend/               # Express.js API
│   ├── src/
│   │   ├── models/
│   │   ├── routes/
│   │   └── index.ts
│   └── package.json
├── docs/                  # Documentation
└── package.json
```

## ⚙️ Configuration

### Google Pay Setup
1. Get credentials from [Google Cloud Console](https://console.cloud.google.com)
2. Add to `.env.local`:
```env
NEXT_PUBLIC_GOOGLE_PAY_KEY=your_key_here
GOOGLE_PAY_SECRET=your_secret_here
```

### MongoDB
```env
MONGODB_URI=mongodb://localhost:27017/mlbb-topup
```

## 📊 Admin Dashboard

Access at `/admin` with admin credentials:
- Manage diamond packages
- View order history
- Analytics & reports
- User management

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📜 License

This project is open source and available under the MIT License.

## 💬 Support

For issues and questions, please [open a GitHub issue](https://github.com/evaaasaki-lab/Soi-diamond-store/issues).

---

**Made with ❤️ for MLBB players**

# Expense Tracker (MERN Stack)

## 📌 Overview
Expense Tracker is a full-stack web application built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js). It allows users to track their expenses, manage income, categorize transactions, and visualize spending patterns.

## 🚀 Features
- User authentication (JWT-based login & signup)
- Add, edit, and delete transactions
- Categorize transactions (Food, Travel, Bills, etc.)
- View income vs. expense statistics
- Filter transactions by date and category
- Responsive UI for mobile & desktop
- Dark mode support for better accessibility
- Multi-currency support for international users
- Monthly spending insights and analytics

## 🛠️ Tech Stack
**Frontend:** React.js, Redux Toolkit, Tailwind CSS
**Backend:** Node.js, Express.js, MongoDB, Mongoose, JWT, bcrypt

## 🔧 Installation & Setup

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/yourusername/expense-tracker-mern.git
cd expense-tracker-mern
```

### 2️⃣ Backend Setup
```sh
cd backend
npm install
```
Create a `.env` file inside the `backend` folder and add the following:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```
Run the server:
```sh
npm start
```

### 3️⃣ Frontend Setup
```sh
cd ../frontend
npm install
```
Run the frontend:
```sh
npm start
```

## 🖥️ Usage
1. Register or login
2. Add income and expenses
3. Categorize transactions
4. View expense summary and statistics
5. Switch between light and dark modes
6. Change currency settings in the user profile

## 🛠️ Future Enhancements
- Add budgeting & savings goal features
- Export transactions as CSV
- Implement notifications for due bills
- AI-based expense predictions and suggestions
- Graphical reports for financial planning

## 📲 Mobile Compatibility
The application is fully responsive and optimized for mobile devices. A dedicated mobile app version is planned for future releases.

## 🤝 Contributing
Feel free to submit issues or fork the repository and send pull requests. Contributions are welcome!

## 📜 License
This project is licensed under the MIT License.

## 🌟 Show Your Support
If you like this project, please ⭐ the repository!

## 📧 Contact
For any inquiries, feel free to reach out at **your-email@example.com** or create an issue in the repository.

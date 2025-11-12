# 🌍 Wanderlust – Full Stack Rental Web Application

## 🏠 Overview
**Wanderlust** is a full-stack rental web application inspired by Airbnb.  
It provides a platform where **travelers** can find and book rooms or hotels, and **owners** can list their properties for rent.  
Only **authorized users** can create, edit, or delete listings, ensuring a secure and trustworthy platform.  

This project aims to connect people who want to explore new places with hosts who wish to rent out their rooms or properties.

---

## 🚀 Features

- 🔐 **User Authentication & Authorization** – Secure login and registration system for all users.
- 🏡 **Property Management** – Only authorized users can create, edit, or delete their own listings.
- 🌆 **Explore Listings** – All users can view available rooms and hotels easily.
- 💬 **Review System** – Users can share their experiences by adding reviews.
- 📸 **Image Upload** – Owners can add images to make listings more attractive.
- 🗄️ **MongoDB Integration** – All data, including users, properties, and reviews, is stored securely in MongoDB.
- 🧱 **MVC Architecture** – The project follows a clean Model-View-Controller structure for better maintainability.
- 🧰 **Error Handling & Validation** – Ensures data security and smooth user experience.

---

## 🧱 Tech Stack

- **Frontend:** EJS (Embedded JavaScript Templates), HTML, CSS, JavaScript  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (Mongoose ODM)  
- **Authentication:** Passport.js  
- **File Uploads:** Multer  
- **Environment Management:** dotenv  

---

## ⚙️ Installation and Setup

Follow these steps to set up and run the project locally:

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/wanderlust.git

# 2. Navigate to the project directory
cd wanderlust

# 3. Install all dependencies
npm install

# 4. Create a .env file in the root directory and add the following variables:
# PORT=8080
# MONGO_URL=your_mongodb_connection_string
# SECRET=your_session_secret

# 5. Start the server
node app.js

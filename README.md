# MediMeet

MediMeet is a **full-stack medical appointment booking system** that provides a seamless experience for **patients, doctors, and administrators**. The platform allows patients to book appointments, doctors to manage schedules, and admins to oversee the system efficiently.

## 🌟 Features
- **User-Friendly Interface**: Simple and intuitive design for easy navigation.
- **Authentication & Authorization**: Secure login system for patients, doctors, and admins.
- **Appointment Booking**: Users can schedule and manage their appointments.
- **Doctor Management**: Admin can add, update, and remove doctors.
- **Availability Management**: Doctors can update their availability.
- **Payments**: Integrated Razorpay payment gateway.
- **Admin Dashboard**: Monitor system activity and manage appointments.

## 📌 Technologies Used
- **Frontend**: React.js (Vite)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Token)
- **Styling**: Tailwind CSS
- **Deployment**: (To be updated after deployment)

## 🔥 Project Structure
The project consists of three main modules:

### 1️⃣ **User Panel (Patient Side)**
- Register/Login
- View doctor listings
- Book/cancel appointments
- View appointment history
- Make payments via Razorpay

### 2️⃣ **Doctor Panel**
- Login to access dashboard
- View and manage appointments
- Update profile and availability
- Accept/cancel appointments

### 3️⃣ **Admin Panel**
- Secure admin authentication
- Add, update, and remove doctors
- View all appointments
- Manage users and doctors

## 🚀 Installation & Setup
Follow these steps to run the project locally:

### **Backend Setup**
1. Clone the repository:
   ```sh
   git clone https://github.com/naveenprajapati2308/MediMeet.git
   cd MediMeet
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Configure environment variables:
   - Create a `.env` file in the backend folder
   - Add necessary configurations (MongoDB URL, JWT Secret, Razorpay Keys)

4. Start the backend server:
   ```sh
   npm run dev
   ```

### **Frontend Setup (User & Admin Panels)**
1. Navigate to the frontend folder:
   ```sh
   cd frontend  # or cd admin
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the React frontend:
   ```sh
   npm run dev
   ```

## 🎯 Future Enhancements
- Deployment on cloud (AWS, Vercel, etc.)
- Doctor availability notifications
- Chat feature between patients and doctors

## 📜 License
This project is open-source and available under the **BUIT License**.

## 🤝 Contributors
- **Naveen Prajapati** *(Project Lead)*
- **Arvind Kurmi** *(Full-Stack Developer)*

Feel free to contribute to the project by submitting pull requests! 🚀


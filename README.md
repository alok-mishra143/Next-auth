# 🚀 Fully Functional Login Page with MongoDB and NextAuth

Welcome to the repository! This project showcases a **fully functional login page** built using **MongoDB** and **NextAuth**. It enables users to sign in using their **GitHub** or **Google** accounts, offering a smooth and secure authentication experience.

## 🛠 Features

- **GitHub Authentication**: Sign in using your GitHub account 🧑‍💻.
- **Google Authentication**: Sign in using your Google account 📧.
- **MongoDB Integration**: User data is stored securely in MongoDB for persistence 💾.
- **NextAuth**: Leverages NextAuth.js for secure and customizable authentication flows 🔐.
- **Responsive Design**: Optimized login page for various screen sizes 📱💻.

## 🔧 Technologies Used

- **Next.js**: A React framework for building static and dynamic websites ⚛️.
- **MongoDB**: A NoSQL database to store user data 💾.
- **NextAuth**: A complete authentication solution for Next.js applications 🔑.
- **GitHub API**: Used for GitHub authentication 🐙.
- **Google OAuth**: Used for Google authentication 🔒.

## 🔑 Environment Variables

To run this project locally, you'll need to set up the following environment variables. Create a `.env.local` file in the root of the project and add the details below:

```bash
MONGO_URI="your_mongo_connection_string"
AUTH_SECRET="your_secret_key"

GITHUB_CLIENT_SECRET="your_github_client_secret"
GITHUB_CLIENT_ID="your_github_client_id"

GOOGLE_CLIENT_ID="your_google_client_id"
GOOGLE_CLIENT_SECRET="your_google_client_secret"
```

## ⚡ Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/alok-mishra143/Next-auth.git
   ```

2. **Install the required dependencies**:

   ```bash
   cd Next-auth
   npm install
   ```

3. **Create a `.env.local` file** in the root of the project and add the environment variables as mentioned above.

4. **Run the project locally**:

   ```bash
   npm run dev
   ```

5. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view the login page 🎉.

## 📁 GitHub Link

Check out the GitHub repository for the full code:
[Next-auth GitHub Repository](https://github.com/alok-mishra143/Next-auth.git)

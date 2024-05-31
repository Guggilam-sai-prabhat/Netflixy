# Netflix Clone Application

This project is a simplified front-end clone of Netflix. It's built with React and uses several modern web technologies to provide a dynamic and responsive user interface, mimicking the core functionalities of Netflix.

## Features

- **User Authentication**: Support for user signup, login, and logout using Firebase.
- **Movie Search**: Dynamic search functionality using the TMDB API to find movies.
- **Responsive Design**: Fully responsive web design that adapts to different screen sizes.
- **Protected Routes**: Ensures that certain functionalities are accessible only to authenticated users.

## Technologies Used

- React
- React Router for navigation
- Axios for API requests
- Vite as the build tool
- Tailwind CSS for styling
- Firebase for authentication and backend functions

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them:

- Node.js
- npm (usually comes with Node.js)
- A TMDB API key for fetching movie data

### Installing

A step-by-step series of examples that tell you how to get a development environment running:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/netflix-clone.git
   cd netflix-clone
2. Install NPM packages:
   ```bash
   npm install
3. Create a .env file in the root directory and add your TMDB API key and Firebase configuration :
   VITE_TMDB_KEY
   VITE_FIREBASE_API_KEY
   VITE_FIREBASE_AUTH_DOMAIN
   VITE_FIREBASE_PROJECT_ID
   VITE_FIREBASE_STORAGE_BUCKET
   VITE_FIREBASE_MESSAGING_SENDER_ID
   VITE_FIREBASE_APP_ID

4. Run the application:
   ```bash
   npm run dev
## Deployment
To deploy this project on a live system, consider using Vercel, Netlify, or Firebase Hosting, as they provide seamless integration for projects built with React. I personally deplyed in Firebase

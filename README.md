# Moviexy

This project is inspired by the core functionalities and interface of Netflix. Built with React and incorporating various modern web technologies, it offers a dynamic and responsive user interface. While not a direct clone, this application captures the essence of Netflix's user experience and adapts it into a simplified front-end model.

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
   git clone repository link
   cd Netflixy
2. Install NPM packages:
   ```bash
   npm install
3. Configuration

To configure the environment for your project, you need to set up several environment variables. Follow these steps to correctly configure your development environment:

1. **Create a `.env` file** in the root directory of your project.

2. **Add the following environment variables** to the `.env` file with your specific values:

   - `VITE_TMDB_KEY`: Your TMDB API key, used for fetching movie data.
   - `VITE_FIREBASE_API_KEY`: Your Firebase API key.
   - `VITE_FIREBASE_AUTH_DOMAIN`: Your Firebase authentication domain.
   - `VITE_FIREBASE_PROJECT_ID`: Your Firebase project ID.
   - `VITE_FIREBASE_STORAGE_BUCKET`: Your Firebase storage bucket URL.
   - `VITE_FIREBASE_MESSAGING_SENDER_ID`: Your Firebase messaging sender ID.
   - `VITE_FIREBASE_APP_ID`: Your Firebase app ID.

These keys can be obtained as follows:
- **TMDB API key**: Register an account on [The Movie Database (TMDB)](https://www.themoviedb.org/account/signup), navigate to your account settings, and request an API key.
- **Firebase keys**: Create a Firebase project in the [Firebase console](https://console.firebase.google.com/), set up your application according to Firebase's guidelines, and find your project's specific settings under the project settings.

Setting these variables correctly will allow your application to communicate with external services securely and effectively.

4. Run the application:
   ```bash
   npm run dev
## Deployment
To deploy this project on a live system, consider using platforms such as Vercel, Netlify, or Firebase Hosting, as they offer seamless integration for projects built with React. I personally deployed it on Firebase.


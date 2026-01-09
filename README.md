# NC News - Frontend

## Deployment

The live version of this application can be accessed at: https://ak-ncnews.netlify.app/

## About

NC News is a news aggregation and discussion website where users can:

- Browse and read articles on various topics
- Filter articles by topic using the dropdown menu
- Read comments posted by other users
- Post their own comments on articles
- Vote on articles and comments (upvote/downvote)

## Backend Repository

This project connects to a RESTful API backend. The backend repository can be found at:
https://github.com/ak-naresh/northcoders-news-BE

The backend is hosted on Render at: https://aknaresh-ncnews.onrender.com/api

## Minimum Requirements

- **Node.js**: 'v21.0.0' or higher

## Running the Project Locally

Follow these steps to run the project on your local machine:

### 1. Clone the Repository

```sh
git clone https://github.com/ak-naresh/northcoders-news-FE.git
```

### 2. Navigate to the Project Directory

```sh
cd northcoders-news-FE
```

### 3. Install Dependencies

```sh
npm install
```

### 4. Start the Development Server

```sh
npm run dev
```

The application will be available at the localhost URL provided in your terminal, in the format `http://localhost:####`.

### 5. Build for Production (Optional)

To create a production build:

```sh
npm run build
```

This will generate a `dist` folder which can be deployed to hosting platforms such as Netlify, Vercel, or GitHub Pages.

## Technologies Used

- **React** - JS library for building UI
- **React Router DOM** - For client-side routing
- **Vite** - For building and running development server

---

This portfolio project was created as part of a Digital Skills Bootcamp in Software Engineering provided by https://northcoders.com/.

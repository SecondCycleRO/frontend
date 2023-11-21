# Frontend

This repository contains the frontend React application for the SecondCycle platform, providing the user interface and client-side logic.

## Getting Started

These instructions will help you set up the project locally for development and testing purposes.

### Prerequisites

Make sure you have the following installed:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en/)
- [npm](https://npmjs.com/) (Node Package Manager)

### Installation

To get the frontend running locally:

1. **Clone the repository:**

   ```bash
   git clone git@github.com:SecondCycleRO/frontend.git
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root of the `frontend` directory with the following content, replacing values as appropriate:

   ```env
   REACT_APP_API_BASE_URL=http://localhost:3010/api
   ```

4. **Run the application:**

   ```bash
   npm start
   ```

   This runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

   The page will reload if you make edits. You will also see any lint errors in the console.

## Structure

- `src/`: This folder is the main container of all the code inside your application.
- `src/components/`: Contains all your React components.
- `src/pages/`: Components that represent a page accessible via routing.
- `src/App.tsx`: The main React component that provides the overall page structure.
- `src/index.tsx`: The entry point for your React application.
- `src/types/`: TypeScript interfaces or classes representing your data types.
- `src/api/`: Services and utilities for API requests.
- `src/assets/`: Folder containing assets like images.
- `src/context/`: Folder containing contexts used across the app.
- `src/hooks/`: Folder containing custom hooks.

## Built With

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [TypeScript](https://www.typescriptlang.org/) - Typed superset of JavaScript that compiles to plain JavaScript.
- [Create React App](https://create-react-app.dev/) - An officially supported way to create single-page React applications.

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct.

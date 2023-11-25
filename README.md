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

- `src/`: This directory serves as the primary container for all code within the application.
- `src/components/`: Contains all React components used in the app.
- `src/pages/`: Contains components that represent pages accessible via routing within the app.
- `src/App.tsx`: The main React component of the app, providing the overall structure for each page.
- `src/index.tsx`: The entry point for the React application.
- `src/types/`: Includes TypeScript interfaces or classes that define the app's data types.
- `src/api/`: Comprises services and utilities for handling API requests in the app.
- `src/assets/`: A folder for storing assets such as images used in the app.
- `src/context/`: This directory contains contexts utilized throughout the application.
- `src/hooks/`: A folder dedicated to custom hooks employed in the app.

## Built With

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [TypeScript](https://www.typescriptlang.org/) - Typed superset of JavaScript that compiles to plain JavaScript.

## Contributing

Please read [CONTRIBUTING.md](https://github.com/SecondCycleRO/.github/blob/master/CONTRIBUTING.MD) for details on our code of conduct.

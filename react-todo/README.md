# React Todo List

This project is a simple Todo List application built with React and Vite. It allows users to add, delete, and toggle the completion status of todo items. The application is structured to provide a clean and efficient user experience.

## Project Structure

```
react-todo
├── index.html          # Main HTML entry point
├── package.json        # npm configuration file
├── vite.config.js      # Vite configuration settings
├── jest.config.js      # Jest configuration for testing
├── babel.config.js     # Babel configuration for transpiling JavaScript
├── .gitignore          # Files and directories to ignore by Git
├── src
│   ├── main.jsx        # Entry point for the React application
│   ├── App.jsx         # Main application component
│   ├── index.css       # Global styles for the application
│   ├── components
│   │   ├── TodoList.jsx # Component managing the todo list
│   │   └── TodoItem.jsx  # Component representing an individual todo item
│   ├── hooks
│   │   └── useLocalStorage.js # Custom hook for local storage management
│   └── __tests__
│       ├── TodoList.test.jsx   # Tests for the TodoList component
│       └── TodoItem.test.jsx    # Tests for the TodoItem component
├── jest.setup.js      # Setup for the Jest testing environment
└── README.md          # Project documentation
```

## Getting Started

To get started with the project, follow these steps:

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd react-todo
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the application:**
   ```
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000` to view the application.

## Features

- Add new todo items
- Toggle the completion status of todo items
- Delete todo items
- Todos persist across sessions using local storage

## Running Tests

To run the tests for this project, use the following command:

```
npm test
```

This will execute the tests defined in the `__tests__` directory using Jest and React Testing Library.

## License

This project is open-source and available under the [MIT License](LICENSE).
# 📝 Keeper App

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Challenges and Solutions](#Challenges-and-solutions)
- [Key Learning](#key-learning)
- [Future Enhancements](#future-enhancements)
- [License](#license)

## 📌 Introduction

Keeper App is a React based note taking application inspired by Google Keep. This project was built to practice React fundamentals while creating a simple yet functional app. It allows users to add, view and delete notes dynamically, demonstrating state management, component composition and event handling.
This project is made simple for anyone looking to understand React Hooks (`useState`) and component based UI development.

## 🚀 Features

✅ **Create Notes**: Easily add new notes with a title and content.  
✅ **Delete Notes**: Remove individual notes with a single click.  
✅ **Component-Based UI**: Uses reusable components for modularity.  
✅ **Responsive Design**: Works smoothly on desktops and mobile devices.  
✅ **Minimalistic UI**: Simple and elegant interface with a clean layout.

## 🛠 Technologies Used

| Technology              | Purpose                                    |
| ----------------------- | ------------------------------------------ |
| **_React_**             | Core library for building the UI           |
| **_useState Hook_**     | Manages state for storing notes            |
| **_JSX_**               | Used for component based UI development    |
| **_CSS_**               | Provides styling for a clean and modern UI |
| **_JavaScript (ES6+)_** | Implements core logic and event handling   |

Each technology was chosen to demonstrate practical React skills while maintaining a lightweight and efficient application.

## ⚡Getting Started

1. Clone this repository to your local machine:
   `git clone https://github.com/SadmanKibria/React-Keeper-App.git`

2. Navigate to the project directory:
   `cd react-keeper-app`

3. Install dependencies:
   `npm install`

4. Start the development server:
   `npm start`

## 📖 Usage

1️⃣ **Enter a title and content** in the input fields.  
2️⃣ **Click the "Add" button** to create a new note.  
3️⃣ **View all notes** displayed dynamically on the page.  
4️⃣ **Click the "Delete" button** on any note to remove it.

All updates happen instantly without needing a page refresh, thanks to React's state management.

## 📂 Project Structure

The project directory contains the following files:

- **`App.jsx`**: Main application logic, including state management for the notes and rendering child components.
- **`Header.jsx`**: Displays the title of the Keeper App.
- **`Footer.jsx`**: Simple footer component to display copyright information.
- **`Note.jsx`**: Represents an individual note, providing delete functionality.
- **`CreateArea.jsx`**: Component for adding new notes. It handles form submission and integrates with the parent component via props.
- **`styles.css`**: Contains all custom styles for a clean and responsive UI.

Each component has a specific role, making the code modular, reusable and easy to maintain.

## 🛑 Challenges and Solutions

| Challenge                                  | Solution                                                  |
| ------------------------------------------ | --------------------------------------------------------- |
| **_Managing state for notes_**             | Used React `useState` Hook to dynamically update notes    |
| **_Passing data between components_**      | Implemented props to send data from child to parent       |
| **_Ensuring efficient deletion of notes_** | Assigned a unique `id` and filtered the state accordingly |
| **_Avoiding re-renders on every action_**  | Used functional state updates to optimise performance     |

## 📚 Key Learning

- **React Hooks (`useState`)**: Managing state for dynamic UI updates.
- **Component Composition**: Breaking UI into small, reusable components.
- **Props and Data Flow**: Passing data between parent and child components.
- **Event Handling**: Implementing click events for adding and deleting notes.
- **State Optimisation**: Using functional updates to improve performance.

## 🔮 Future Enhancements

🚀 **Edit Notes**: Allow users to update existing notes.  
🚀 **Persistent Storage**: Save notes in `localStorage` to retain data after refresh. Check [React ToDo List](https://github.com/SadmanKibria/React-ToDo-List) repo where I have implemented persistent storage.
🚀 **Dark Mode**: Add a theme toggle for better user experience.  
🚀 **Animations**: Smooth transitions for adding and deleting notes.  
🚀 **Search Functionality**: Enable users to search for specific notes.

## 📜 Licence

This project is open-source and available under the **MIT License**.  
Feel free to use, modify and contribute.

Have any questions or want to collaborate? Reach out to me!
📧 Email: sadmankibria1@gmail.com

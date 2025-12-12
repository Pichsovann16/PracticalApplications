# First React App – Practice Project

[Live Demo](https://practical-applications.vercel.app/)

## Overview

This is a **React practice project** built with Create React App. It combines several small examples into one page:

- A **navigation bar** built with Bootstrap
- A **course catalog** section showing repeated course cards
- A **class-based counter** component
- A **To-Do list** that stores tasks in `localStorage`
- A **Product list** that fetches data from a public API and displays product cards
- An **Employee directory** that loads data from a local `db.json` file and displays it in a table

The goal is to practice core React concepts (components, props, state, effects) and working with external APIs and browser storage.

---

## Getting Started

### Prerequisites

- Node.js (LTS recommended)
- npm (comes with Node.js)

### Install dependencies

From the project root:

```bash
npm install
```

### Run the development server

```bash
npm start
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

The page will automatically reload when you edit files.

---

## Project Structure (high level)

Key files and folders:

- `package.json` – Project metadata, CRA scripts, and dependencies.
- `public/index.html` – Base HTML template.
- `src/index.js` – React entry point that mounts the app.
- `src/App.js` – Main layout combining all demo components.
- `src/components/navigation/Navbar.js` – Top Bootstrap navigation bar.
- `src/components/course/Course.js` & `CourseCard.js` – Course listing components.
- `src/components/state/Counter.js` – Class-based counter example.
- `src/components/to-do-list/ToDoList.js` – To-do list with `localStorage` persistence.
- `src/components/products/Products.js` – Fetches and displays products from a dummy API.
- `src/components/employees/Employees.js` – Fetches and displays employees from the local `db.json` file.

---

## Features and Components

### 1. Navbar

File: `src/components/navigation/Navbar.js`

- Uses a **Bootstrap navbar** layout.
- Includes simple navigation links (Home, Enroll, Services, About us).
- Contains a search input and button (UI only).

### 2. Course Cards

Files:

- `src/components/course/Course.js`
- `src/components/course/CourseCard.js`

- `Course` defines a single `course` object and renders multiple `CourseCard` components with the same data.
- `CourseCard` receives course data via **props** and displays:
  - Course image
  - Title
  - Subtitle
  - Price
  - “Enroll” button

This demonstrates **props**, **component composition**, and reusing a single component with the same data.

### 3. Counter (State Example)

File: `src/components/state/Counter.js`

- A **class-based React component** with internal state:
  - `this.state = { count: 0 }`
- `increment` method updates state using `this.setState`.
- Renders the current count and a button to increase it.

This demonstrates **class components**, **state**, and **event handling**.

### 4. To-Do List with LocalStorage

File: `src/components/to-do-list/ToDoList.js`

- Functional component using **hooks**:
  - `useState` for tasks and input value
  - `useEffect` to sync tasks with `localStorage`
- Reads initial tasks from `localStorage` on first render.
- Whenever the `tasks` state changes, saves the array back to `localStorage`.
- Allows you to:
  - Add tasks (via button or Enter key)
  - Remove tasks
  - Persist tasks across page reloads

This demonstrates **hooks**, **side effects**, and **browser storage**.

### 5. Products from Dummy API

File: `src/components/products/Products.js`

- Uses `useState` and `useEffect` to fetch data from:
  - `https://fakestoreapi.com/products`
- On mount, it:
  - Calls `fetch(apiUrl)`
  - Converts the response to JSON
  - Updates component state with the product list
- Renders product cards in a responsive grid with:
  - Product image
  - Title
  - Price
  - “View Details” button
- Adds simple hover animation/shadow using Bootstrap utility classes and inline styles.

This demonstrates **data fetching**, **effects**, and rendering lists with `map`.

### 6. Employee Directory from Local JSON

File: `src/components/employees/Employees.js`

- Uses `useState` and `useEffect` to fetch data from a local JSON file:
  - `public/db.json`, accessed via `fetch("/db.json")`.
- Flattens the `employees` array (because the last element in the JSON is itself an array).
- Displays employees in a Bootstrap-styled, responsive table with:
  - ID, name, position, department
  - Email (as a mailto link)
  - Salary
  - Status badge (Active vs Inactive)

This demonstrates **fetching local JSON data**, **basic data transformation**, and **tabular UI**.

---

## Notes

- This codebase is intended for **learning and experimentation** with React.
- You can freely modify components, add new ones, or refactor the layout.
- If you add new examples (e.g., forms, routing, context), you can document them in this README as additional sections.

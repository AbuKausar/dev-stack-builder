# 🚀 My React Web App (DevStore)

A simple, modern, and interactive web application built with React and Tailwind CSS.

---

## 📝 Description

**DevStore** is a responsive React web application designed to browse, filter, and manage items dynamically. It fetches data from a local JSON file, manages active state cleanly, and provides an intuitive, smooth user experience.

---

## 🛠️ Technologies Used

- **React.js** - Frontend Library
- **TypeScript** - Programming Language
- **Daisy UI** - Layout and Component Styling
- **Tailwind CSS** - Utility-first Styling Framework
- **JSON** - Local Data Source
- **Vercel** - Deployment Platform

---

## ✨ Key Features

1. **Dynamic Data Fetching:** Loads data automatically from a local JSON file when the application mounts.
2. **Interactive State Management:** Easily add or remove items from the Your Stack Card with real-time UI updates.
3. **Conditional UI Feedback:** Displays helpful custom messages when no items are selected or available.

---

## 💡 React Questions & Answers

### 1. What is JSX, and why is it used in React?
**Answer:**  
JSX stands for **JavaScript XML**. It allows us to write HTML code inside JavaScript. We use it in React because it makes writing components easier, cleaner, and more readable.

---

### 2. What is the difference between props and state?
**Answer:**  
- **Props:** Data passed into a component from its parent. Props are read-only and cannot be changed by the child component.
- **State:** Data managed inside a component. State can change over time based on user interactions, and when state changes, React re-renders the component.

---

### 3. What does the `useState` hook do, and where did you use it in this project?
**Answer:**  
The `useState` hook allows functional components to store and manage dynamic state.  
**Where used:** I used `useState` to manage the array of selected technologies (e.g., `const [selectedIds, setSelectedIds] = useState<string[]>([]);`).

---

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
**Answer:**  
The `useEffect` hook handles side effects in React, such as fetching data from an API or file after the component renders.  
**Why needed:** I need `useEffect` to fetch item data from the local `data.json` file when the app first loads.

---

### 5. Why does every item in a `.map()` list need a unique `key` prop?
**Answer:**  
React uses the `key` prop to identify which items have changed, been added, or been removed. It helps React render lists efficiently by updating only the changed item rather than re-rendering the whole list.

---

### 6. What is conditional rendering? Show one place you used it.
**Answer:**  
Conditional rendering means rendering different UI elements based on a condition (like `true` or `false`).  
**Example:** Displaying an empty state message when there are no items selected:
```jsx
{cart.length === 0 ? (
  <p>No items in your list!</p>
) : (
  <ItemList items={cart} />
)}
```

---

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
**Answer:**  
- **Parent to Child:** Data is passed down from parent to child as **props** (e.g., `<Child title={itemTitle} />`).
- **Child to Parent:** The parent passes a **function** as a prop to the child, and the child calls that function to send data back to the parent.
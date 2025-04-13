import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  // Step 1: Create a state variable to manage dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Step 2: Determine the class name based on the state
  const appClass = isDarkMode ? "App dark" : "App light";

  // Step 3: Create a function to toggle dark mode
  function handleDarkModeToggle() {
    setIsDarkMode((prevMode) => !prevMode);
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        {/* Step 4: Add an event handler to toggle dark mode */}
        <button onClick={handleDarkModeToggle}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
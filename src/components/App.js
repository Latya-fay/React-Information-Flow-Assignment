import React, { useState } from "react";
import Header from "./Header";
import ShoppingList from "./ShoppingList";

function App() {
  // State for dark mode and selected category
  const [darkMode, setDarkMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Toggle dark mode
  const handleDarkModeToggle = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  // Handle category change
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className={`App ${darkMode ? "dark" : "light"}`}>
      <Header onDarkModeClick={handleDarkModeToggle} />
      <ShoppingList
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
    </div>
  );
}

export default App;

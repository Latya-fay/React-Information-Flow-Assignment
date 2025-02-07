import React from "react";

function Filter({ selectedCategory, onCategoryChange }) {
  const handleChange = (event) => {
    onCategoryChange(event.target.value);
  };

  return (
    <div>
      <label htmlFor="category">Category:</label>
      <select id="category" value={selectedCategory} onChange={handleChange}>
        <option value="All">All</option>
        <option value="Fruit">Fruit</option>
        <option value="Vegetable">Vegetable</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;

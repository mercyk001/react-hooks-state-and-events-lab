import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  // Step 1: Create a state variable for the selected category
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Step 2: Create a function to handle category changes
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  // Step 3: Filter the items based on the selected category
  const itemsToDisplay = items.filter((item) => {
    return selectedCategory === "All" || item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <div className="Filter">
        {/* Step 4: Add an onChange event to the select element */}
        <select name="filter" onChange={handleCategoryChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {/* Step 5: Use the filtered items to render the list */}
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
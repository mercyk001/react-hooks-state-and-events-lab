
import React, { useState } from "react";

function Item({ name, category }) {
  // Step 1: Create a state variable to track if the item is in the cart
  const [isInCart, setIsInCart] = useState(false);

  // Step 2: Create a handler function to toggle the state
  function handleCartToggle() {
    setIsInCart((prevState) => !prevState);
  }

  return (
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      {/* Step 3: Add an event handler to the button */}
      <button onClick={handleCartToggle} className={isInCart ? "remove" : "add"}>
        {isInCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
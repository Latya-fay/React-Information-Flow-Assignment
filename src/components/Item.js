import React, { useState } from "react";

function Item({ item }) {
  const [inCart, setInCart] = useState(false);

  const handleAddToCart = () => {
    setInCart((prevState) => !prevState);
  };

  return (
    <li className={inCart ? "in-cart" : ""}>
      {item.name}
      <button onClick={handleAddToCart}>
        {inCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;

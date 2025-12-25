import { useState } from "react";

function ShoppingCartCounter() {
  const [quantity, setQuantity] = useState(1);
  const price = 29.99;

  const subtotal = quantity * price;
  const discount = quantity >= 5 ? subtotal * 0.1 : 0;
  const total = subtotal - discount;

  return (
    <div>
      <h2>Product Card</h2>
      <p>Unit Price: ${price}</p>

      <button
        onClick={() => setQuantity(q => Math.max(1, q - 1))}
      >
        -
      </button>

      <span style={{ margin: "0 10px" }}>{quantity}</span>

      <button onClick={() => setQuantity(q => q + 1)}>+</button>

      {quantity >= 5 && (
        <p style={{ color: "green" }}>
          🎉 Bulk Discount Applied (10%)
        </p>
      )}

      <p>Total: ${total.toFixed(2)}</p>
    </div>
  );
}

export default ShoppingCartCounter;

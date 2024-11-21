import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { NumericFormat } from "react-number-format"; // Use NumericFormat instead of NumberFormat
import "./Subtotal.css";
import ShoppingContext from "./Context/shopping/shoppingContext";

const Subtotal = () => {
  const navigate = useNavigate();
  const shoppingContext = useContext(ShoppingContext);
  const { basket, getBasketTotal } = shoppingContext;

  const basketTotal = getBasketTotal(basket);

  console.log("Basket Total:", basketTotal);

  return (
    <div className="subtotal">
      <NumericFormat
        value={basketTotal} // Use the basket total
        displayType="text"
        thousandSeparator // Add thousand separator for better formatting
        prefix="$" // Add a prefix for currency
        decimalScale={2} // Set decimal places to 2
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
      />
      <button onClick={() => navigate("/payment")}>Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;

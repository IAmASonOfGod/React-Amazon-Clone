import React from "react";
// import ShoppingContext from "./Context/shopping/shoppingContext";
import "./OrdersProduct.css";

const OrdersProduct = ({ id, image, title, rating, price }) => {
  console.log("Rendering product:", { id, title, price, image });

  // const shoppingContext = useContext(ShoppingContext);
  // const { removeFromBasket } = shoppingContext;

  // const removeFromBasketHandler = () => {
  //   console.log("Removing item with id:", id);
  //   removeFromBasket(id);
  // };

  return (
    <div className="checkout_product">
      <img className="checkout_product_image" src={image} alt={title} />
      <div className="checkout_product_info">
        <p className="checkout_product_title">{title}</p>

        <div className="checkout_product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>

        <p className="checkout_product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        {/* {!hideButton && (
          <button onClick={removeFromBasketHandler}>Remove From Basket</button>
        )} */}
      </div>
    </div>
  );
};

export default OrdersProduct;

import React, { useContext } from "react";
import "./OrdersProduct.css";
import ShoppingContext from "./Context/shopping/shoppingContext";
import OrdersProduct from "./OrdersProduct";
import OrdersTotal from "./OrdersTotal";

const Orders = () => {
  const shoppingContext = useContext(ShoppingContext);
  const { orders } = shoppingContext;

  return (
    <>
      {orders && (
        <div>
          <h1>Your Orders</h1>

          <div>
            {/* <h3>Hello, {user?.email}</h3>
        <h2 className="checkout_title">Your Shopping Basket</h2> */}

            {orders.map(({ item }) => (
              <OrdersProduct
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
          {/* <div className="checkout_right">
        <OrdersTotal />
      </div> */}
          <OrdersTotal />
        </div>
      )}
    </>
  );
};

export default Orders;

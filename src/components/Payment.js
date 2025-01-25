import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import ShoppingContext from "./Context/shopping/shoppingContext";
import { Link, useNavigate } from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { NumericFormat } from "react-number-format";// Replaced CurrencyFormat with NumberFormat
import { db } from "../config/firebase-config";

const Payment = () => {
  const shoppingContext = useContext(ShoppingContext);
  const { basket, user, getBasketTotal, emptyBasket, setOrders } =
    shoppingContext;

  const navigate = useNavigate();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState("");

  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    const getClientSecret = async () => {
      try {
        const response = await axios.post(
          "http://localhost:5001/payment/create",
          {
            total: getBasketTotal(basket) * 100,
          }
        );
        console.log("Server response:", response.data);
        if (response.data.clientSecret) {
          setClientSecret(response.data.clientSecret); // Set client secret only if it's present
        } else {
          console.error("Client secret not found in response");
          setError("Client secret is missing.");
        }
      } catch (error) {
        console.error("Error fetching client secret:", error);
        setError("Error fetching client secret.");
      }
    };

    getClientSecret();
  }, [basket, getBasketTotal]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet
      return;
    }

    console.log("Client secret before payment:", clientSecret);

    if (!clientSecret) {
      setError("Client secret is missing.");
      setProcessing(false);
      return;
    }

    setProcessing(true);

    const { error, paymentIntent } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: user?.email,
          },
        },
      }
    );

    if (error) {
      setError(`Payment failed: ${error.message}`);
    } else {
      if (paymentIntent.status === "succeeded") {
        // db.collection("user")
        //   .doc(user?.uid)
        //   .collection("orders")
        //   .doc(paymentIntent.id)
        //   .set({
        //     basket: basket,
        //     amount: paymentIntent.amount,
        //     created: paymentIntent.created,
        //   });
        setSucceeded(true);
        setError(null);

        setOrders(basket)

        emptyBasket();

        navigate("/orders");
      }
    }

    setProcessing(false);
  };

  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment_container">
        <h1>
          checkout <Link to="/checkout">{basket?.length} items</Link>
        </h1>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment_address">
            <p>{user?.email}</p>
            <p>123 ReactJS Road</p>
            <p>Cape Town, SA</p>
          </div>
        </div>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment_items">
            {basket.map(({ item }, index) => (
              <CheckoutProduct
                key={`${item.id}-${index}`}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment_details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment_price_container">
                <NumericFormat
                  value={getBasketTotal(basket)} // Use the basket total
                  displayType={"text"}
                  thousandSeparator={true} // Add thousand separator
                  prefix={"$"} // Add a prefix for currency
                  decimalScale={2} // Set decimal places to 2
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;

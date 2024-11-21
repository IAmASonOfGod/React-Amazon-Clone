import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Header from "./components/layout/Header";
import Productdetails from "./components/Productdetails";
import Login from "./components/Login";
import Orders from "./components/Orders";
import NotFound from "./components/NotFound";
import { useEffect, useContext } from "react";
import ShoppingContext from "./components/Context/shopping/shoppingContext";
import { auth } from "./config/firebase-config";
import Checkout from "./components/Checkout";
import Payment from "./components/Payment";

// Initialize Stripe outside of a component’s render to avoid recreating the `loadStripe` instance on every render.
const stripePromise = loadStripe(
  "pk_test_51PsDyoFw1mGcKjKvnARTtp1uRDgMqdNOl0r8OtutsOyrhXDjGXUeIar6WW2Bml8xNt33tUdhwhohpqbVIIPyxKrD00eFKHp175"
);

const App = () => {
  const shoppingContext = useContext(ShoppingContext);
  const { setUser } = shoppingContext;

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      console.log("User is ->", authUser);

      if (authUser) {
        setUser(authUser);
      } else {
        setUser({ user: null });
      }
    });
  }, []);

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Productdetails />} />
          <Route
            path="/payment"
            element={
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/Orders" element={<Orders />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
};

export default App;

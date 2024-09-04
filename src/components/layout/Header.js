import { useContext } from "react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import "./Header.css";
import ShoppingContext from "../Context/shopping/shoppingContext";
import { auth } from "../../config/firebase-config";

const Header = () => {
  const shoppingContext = useContext(ShoppingContext);
  const { basket, user, setUser } = shoppingContext;
  const navigate = useNavigate(); // Allows you to programmatically navigate

  const handleAuthentication = async () => {
    if (user) {
      try {
        await auth.signOut();
        setUser(null); // Update user state in global context
        navigate("/login"); // Redirect to login page
      } catch (error) {
        console.error("Sign out failed:", error);
      }
    }
  };

  return (
    <header className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon logo"
        />
      </Link>
      <div className="header_search">
        <input className="header_input" type="text" />
        <SearchIcon className="search_icon" />
      </div>
      <div className="header_nav">
        <Link to={!user ? "/login" : "#"}>
          <div className="header_option" onClick={handleAuthentication}>
            <span className="header_optionOne">
              Hello {user ? user.email : "Guest"}
            </span>
            <span className="header_optionTwo">
              {user ? "Sign out" : "Sign In"}
            </span>
          </div>
        </Link>

        <Link to="/orders">
          <div className="header_option">
            <span className="header_optionOne">Returns</span>
            <span className="header_optionTwo">& Orders</span>
          </div>
        </Link>

        <div className="header_option">
          <span className="header_optionOne">Your</span>
          <span className="header_optionTwo">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header_optionBasket">
            <ShoppingBasketIcon />
            <span className="header_optionTwo header_basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;

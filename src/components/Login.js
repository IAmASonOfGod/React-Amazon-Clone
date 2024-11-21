import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "../config/firebase-config";
import { auth } from "../config/firebase-config";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Hook to programmatically navigate

  // Sign In function
  const signIn = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("User signed in:", userCredential.user);
      navigate("/"); // Redirect after successful sign-in
    } catch (error) {
      console.error("Sign-in error:", error.code, error.message);
      alert(`Sign-in failed: ${error.message}`);
    }
  };

  // Register function
  const register = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("User registered:", userCredential.user);
      navigate("/"); // Redirect after successful registration
    } catch (error) {
      console.error("Registration error:", error.code, error.message);
      alert(`Registration failed: ${error.message}`);
    }
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://logodownload.org/wp-content/uploads/2014/04/amazon-logo.png"
          alt="Amazon_logo"
          className="login_logo"
        />
      </Link>
      <div className="login_container">
        <h1>Sign In</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
          <button type="submit" className="login_signInButton" onClick={signIn}>
            Sign In
          </button>
          <p>
            By signing in, you agree to the AMAZON CLONE Conditions of Use &
            Sale. Please see our Privacy Notice, Cookies Notice, and
            Interest-Based Ads Notice.
          </p>
        </form>
        <button className="login_registerButton" onClick={register}>
          Create Your Amazon Account
        </button>
      </div>
    </div>
  );
};

export default Login;

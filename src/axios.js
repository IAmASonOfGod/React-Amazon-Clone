import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-amazon-clone.onrender.com", // Base URL for your local server
});

export default instance;

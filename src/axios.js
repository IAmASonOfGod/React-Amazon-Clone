import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:5001", // Base URL for your local server
});

export default instance;
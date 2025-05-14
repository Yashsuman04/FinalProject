import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5146", // Your backend API port
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;

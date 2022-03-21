import axios from "axios";

var xApiKey = process.env.REACT_APP_X_API_KEY || '';

const api = axios.create({
  baseURL: "https://unip-back.herokuapp.com/",
  headers: {
    "Content-Type": "application/json",
    "not-api-key": xApiKey,
  }
});

export default api;

import axios from "axios";

const api = axios.create({
  baseURL: "https://unip-back.herokuapp.com/",
});

export default api;

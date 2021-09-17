import axios from "axios";

const baseURL = process.env.REACT_APP_BASE_URL || "http://localhost:8080";

const instance = axios.create({
  // .. congigure axios baseURL
  baseURL: `${baseURL}`
});

export default instance;
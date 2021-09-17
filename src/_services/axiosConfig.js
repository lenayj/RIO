import axios from "axios";

const baseURL = process.env.REACT_APP_BASE_URL || "https://sapi.uniortholab.com";

const instance = axios.create({
  // .. congigure axios baseURL
  baseURL: `${baseURL}`
});

export default instance;
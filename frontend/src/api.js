import axios from "axios";

console.log(process.env.NODE_ENV)

const API_ROOT =
  process.env.NODE_ENV === "production"
    ? "/"
    : "http://localhost:4000/";

export const api = axios.create({ baseURL: API_ROOT });
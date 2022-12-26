import axios from "axios";

const API_ROOT =
  process.env.NODE_ENV === "production"
    ? "/api"
    : "http://localhost:5919/api";

export const api = axios.create({ baseURL: API_ROOT });
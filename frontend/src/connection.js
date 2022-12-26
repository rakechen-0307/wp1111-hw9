import axios from "axios";

const API_ROOT =
  process.env.NODE_ENV === "production"
    ? "/api"
    : "http://localhost:6934/api";

export const api = axios.create({ baseURL: API_ROOT });
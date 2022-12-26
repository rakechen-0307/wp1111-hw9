import axios from "axios";

const API_ROOT = "/api";

console.log(API_ROOT)

export const api = axios.create({ baseURL: API_ROOT });
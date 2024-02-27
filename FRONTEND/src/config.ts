import axios from "axios";

export const _axios = axios.create({
  baseURL: "http://localhost:8082/",
  headers: {
    "Content-Type": "multipart/form-data",
    "Accept": "application/json",
  },
});

import axios from "axios";

export const client = axios.create({
  baseURL: "http://localhost:5000",
});

client.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);

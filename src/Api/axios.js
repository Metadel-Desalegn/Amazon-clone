import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:5001/clone-84cbd/us-central1/api",

  baseURL: "https://amazon-api-deploy-ouha.onrender.com",
});

export { axiosInstance };

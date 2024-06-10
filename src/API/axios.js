import axios from "axios";

const axiosInstance = axios.create({
  // local instance of firebase functions
  // baseURL: "http://127.0.0.1:5002/clone-2024-13eda/us-central1/api",

  // deployed version of amazon server on render
  baseURL: "https://amazon-api-deploy-cbvr.onrender.com",
});

export { axiosInstance };

import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

/**
 * Función para realizar las peticiones al backend 
 */
const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 5000,
  headers: {  
    "Content-Type": "application/json",
    accept: "application/json",
  },
});



export default axiosInstance;
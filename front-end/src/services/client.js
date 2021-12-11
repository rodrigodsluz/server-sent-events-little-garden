import axios from "axios";


const client = axios.create({
    baseURL: `${process.env.REACT_APP_BACKEND_URL}/api/v1`,
    withCredentials: true
  });

export default client;

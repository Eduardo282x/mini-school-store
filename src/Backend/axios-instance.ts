import axios from "axios";

const axiosInstance = axios.create({
    // baseURL: 'https://k6r6v6f5-3004.use2.devtunnels.ms/'
    baseURL: 'http://localhost:3004'
})

export default axiosInstance;
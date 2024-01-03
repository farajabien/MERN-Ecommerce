import axios from 'axios'

// Server URL
const axiosBaseUrl = axios.create({ baseURL: 'http://127.0.0.1:5001/api' })

export default axiosBaseUrl

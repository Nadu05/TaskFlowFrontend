  import axios from "axios";
 const URL = "http://localhost:8000";
  //const URL = "http://57.159.29.179:8080";//cloud url


  const api = axios.create({
    baseURL: URL,
    headers: {
      'Content-Type': 'application/json',
    },
  })

  api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  export const signup = (userData) => api.post('/auth/sign-up', userData);
  export const loginUser = (credentials) => api.post('/auth/sign-in', credentials);


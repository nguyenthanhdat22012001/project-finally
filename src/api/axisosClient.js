import axios from "axios";
import queryString from "query-string"; // .parse, .stringify
import { getToken,handleRefreshToken } from "helper/auth";

const axisosClient = axios.create({
  baseURL: process.env.REACT_APP_URL_SERVER_API,
  headers: {
    'Content-Type': 'application/json',
  },
  paramsSerializer: param => queryString.stringify(param)
})

axisosClient.interceptors.request.use(async (config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `bearer ${token}`;
  }
  return config;
})

axisosClient.interceptors.response.use(async (response) => {
  if (response && response.data) {
    return response.data;
  }
  return response;
},
  async (error)  => {
    try {
      const originalRequest = error.config
      if (error.response && error.response.status === 401 && error.config && !error.config.__isRetryRequest) {
        originalRequest._retry = true
  
        let result = await handleRefreshToken();
          if(result){
            return axios(originalRequest)
          }    
      }
    } catch (error) {
      console.log('error: ',error);
    }
  },
)
export default axisosClient;
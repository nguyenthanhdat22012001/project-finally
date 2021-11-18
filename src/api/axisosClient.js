import axios from "axios";
import queryString from "query-string"; // .parse, .stringify
import { getUserLocalStorage,handleRefreshToken } from "helper/auth";

const axisosClient = axios.create({
  baseURL: process.env.REACT_APP_URL_SERVER_API /*'https://619468539b1e780017ca1f54.mockapi.io'*/,
  headers: {
    'Content-Type': 'application/json',
  },
  paramsSerializer: param => queryString.stringify(param)
})

axisosClient.interceptors.request.use(async (config) => {
  const token = getUserLocalStorage();
  if (token) {
    config.headers.Authorization = `bearer ${token.access_token}`;
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
    //token expired
    const originalConfig = error.config;
    if (originalConfig.url !== "/login" && error.response) {
      if (error.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;

        try {
          let result = await handleRefreshToken();
          if(result){
            return axisosClient(originalConfig);
          }    
        } catch (error) {
          console.log('error: ',error);
        }
      }
    }
  },
)
export default axisosClient;

//https://www.bezkoder.com/redux-refresh-token-axios/
import axios from "axios";
import queryString from "query-string"; // .parse, .stringify

const axisosClient = axios.create({
    baseURL:process.env.REACT_APP_URL_SERVER_API,
    headers: {
        'Content-Type': 'application/json',
        // Authorization: 'Bearer ' + token //the token is a variable which holds the token
    },
    paramsSerializer: param => queryString.stringify(param)
  })

  axisosClient.interceptors.request.use(async (config)=>{
      // handle tokent here...
      return config;
  })

  axisosClient.interceptors.response.use(async (response)=>{
      if(response && response.data){
        return response.data;
      }
      return response;
  },
  (error) =>{
    throw error;
  })
;
export default axisosClient;
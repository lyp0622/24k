import axios from 'axios'
import {AxiosResponse} from 'axios/index';
// create an axios instance
const instance = axios.create({
//   baseURL: /h5.chelun.com/.test(window.location.origin)? 'https://baojia.chelun.com/':'http://baojia-test.chelun.com/',
  baseURL:"http://169.254.12.222:8888" ,  
  // withCredentials: true, // 跨域请求时发送 cookies
  timeout: 5000 // request timeout
})
// 请求拦截器
instance.interceptors.request.use( (config) =>{
  // Do something before request is sent
  return config;
}, (error)=> {
  // Do something with request error
  return Promise.reject(error);
}
);

// 响应拦截器
instance.interceptors.response.use( (response: AxiosResponse<any>) =>{
  // Do something with response data
  return response.data;
},  (error) =>{
  // Do something with response error
  return Promise.reject(error);
}
);

export default instance;
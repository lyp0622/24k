import axios from 'axios'
import {XHRType} from './type'
import {AxiosResponse} from 'axios/index';
// create an axios instance
const instance = axios.create({
//   baseURL: /h5.chelun.com/.test(window.location.origin)? 'https://baojia.chelun.com/':'http://baojia-test.chelun.com/',
  baseURL:"http://169.254.0.62:8888" ,  
  // withCredentials: true, // 跨域请求时发送 cookies
  timeout: 5000 // request timeout
})
// 请求拦截器{}
instance.interceptors.request.use( (config) =>{
  // Do something before request is sent
  config.headers["x-nideshop-token"]="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxNiwiaWF0IjoxNTYzOTUxMjg1fQ.qbMBV1MycS7iq8u0uhtmmH7RjOCwjeLrBSvtNaxGMRk"
  return config;
}, (error)=> {
  // Do something with request error
  return Promise.reject(error);
});

// 请求拦截器
instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);
// 响应拦截器
instance.interceptors.response.use(function (response:AxiosResponse<XHRType>):any {
    // Do something with response data
    // return response;
    if (response.status == 200&&response.data.errno == 0){
        return response.data;
    }else{
        console.log('error...', response.data.errmsg)
    }
    return Promise.resolve(null);
  }, function (error:any) {
    console.log('error...', error)
    return Promise.resolve(null);
    // Do something with response error
    // return Promise.reject(error);
  }
);

export default instance;

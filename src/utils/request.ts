import axios from 'axios'
<<<<<<< HEAD
const instance = axios.create({
  baseURL:'http://169.254.0.62:8888'
})

const getNewHeaders = () =>{
  return {'x-nideshop-token': window.localStorage.getItem('token')}
}
export default class HttpUtil {
  static get (url: string, params = {}) {
    return new Promise((resolve, reject) => {
      instance.get(url, { params, headers: getNewHeaders() },).then(({ data }) => {
        if(data.errno === 0){
          resolve(data.data)
        }else{
          resolve(data)
        }
      }).catch((err) => {
        reject({ err: JSON.stringify(err) })
      })
    })
  }
  static post (url: string, params = {}) {
    return new Promise((resolve, reject) => {
      instance.post(url, { ...params },{headers: getNewHeaders()}).then(({ data }) => {
        resolve(data)
      }).catch((err) => {
        reject({ err: JSON.stringify(err) })
      })
    })
  }
}
=======
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
  config.headers["x-nideshop-token"]="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxNiwiaWF0IjoxNTYzOTUxMjg1fQ.qbMBV1MycS7iq8u0uhtmmH7RjOCwjeLrBSvtNaxGMRk"
  return config;
}, (error)=> {
  // Do something with request error
  return Promise.reject(error);
});

// 响应拦截器
instance.interceptors.response.use( (response: AxiosResponse<any>) =>{
  // Do something with response data
  if(response.status==200){
    return response.data;
  }
},  (error) =>{
  // Do something with response error
  return Promise.reject(error);
});

export default instance;
>>>>>>> lyp

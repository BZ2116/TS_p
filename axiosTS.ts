
interface RequestConfig{
  method:string,
  url:string,
  data:string|object| ArrayBuffer|ArrayBufferView|URLSearchParams
}

//没写完。。。。。。
// interface Interceptor{
//   request?:(config:RequestConfig)=>RequestConfig | Promise<RequestConfig>
//   response?:(response:Response)=>Response | Promise<Response>//库中自带的类型
//   error?:(error:Error)=>Error| Promise<Error>
// }

class tsAxios{
urlts:string;
constructor(urlts:string){
  this.urlts=urlts
}
request(url:string,method:string,data?:any):Promise<any>{//返回一个promise
  const config:RequestInit={//库中自带的类型
    method:method
  }

if(data){//如果有body，传入
  config.body=JSON.stringify(data)
}
return fetch(this.urlts+url,config)//fecth发起请求
.then(response => {
  if(!response.ok){
    throw new Error(response.statusText)//抛出错误，此时的状态消息
  }
  return response.json()//
})
}

get(url:string):Promise<any>{
  return this.request(url,'GET')
}
post(url:string,data:any):Promise<any>{
  return this.request(url,"POST",data)
}
put(url:string,data:any):Promise<any>{
  return this.request(url,"PUT",data)
}
delete(url:string):Promise<any>{
  return this.request(url,"DELETE")
}
}

// const axiosTS = new tsaxios('https://xxxx');
// //调用.then()可以接收响应
// axiosTS.get('/xxx')
// .then((response:Response)=>console.log(response));//调用.then()可以接收响应

// axiosTS.post('/xxx',{xx:xx,xx:xx})
// .then((response:Response)=>console.log(response))
// .catch((error:Error)=>console.error(error));

import axios from "axios";


const TokenObj=JSON.parse(localStorage.getItem("token") || '{}')




const getData=async (url:string)=>{
    const Response=await axios.get(`https://moviesite.iran.liara.run/api/${url}`)
   
    return Response



}
const postData=async (url:string,data:any)=>{
    const Response=await axios.post(`https://moviesite.iran.liara.run/api/${url}`,
        data
    )
   
    return Response


}
const RefrashToken=()=>{
  return axios.post("https://moviesite.iran.liara.run/api/token/refresh/",{
    refresh:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY4OTQ5NjExNiwianRpIjoiM2JkNTAzOGRkYjRiNGEwMGI0OTg3ZGExOTc4NWFkNzUiLCJ1c2VyX2lkIjoxfQ.oeCzjKhGmgk11hDSTNdPmljuoP1A8dQ4U9mR_6gOZmU'
  }).then((res) => {
    console.log(res.data.refresh)
  })
}


const getUser=async (token)=>{
  const User=await axios.get(`https://moviesite.iran.liara.run/api/get-user/${token.access}`).catch((err) => {
    RefrashToken() 
    
  })
return User
}



const LoginService= async(data:any) => {
    const login=await axios.post("https://moviesite.iran.liara.run/api/token/", data).then((res) => {
      localStorage.setItem("token", JSON.stringify(res.data));
    })

    return login
  };
  
const SignUp= (data:any) => {
    return axios.post("https://moviesite.iran.liara.run/api/signup/", data).then((Response:any)=>{
      console.log("RESPONCC",Response.data)
      localStorage.setItem("token", JSON.stringify(Response.data.token));
    })
  };

 const Service= {getData,postData,LoginService,SignUp,getUser}
 export default Service
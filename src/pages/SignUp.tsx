import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// component
import InputForm from "../components/tags/InputForm";
import ButtonSubmit from "../components/tags/ButtonSubmit";
import Button from "../components/tags/Button";
// service
import Service from "../service";

// icons
import { MdOutlinePassword } from "react-icons/md";
import { AiOutlineUser, AiOutlineMail } from "react-icons/ai";

function SignUp() {
  const navigate=useNavigate()
  const [data, setData] = useState({});
  const [progress, setProgress] = useState(false);
  const [password, setPassword] = useState(true);


  const handleChange = (e:any) => {
    setData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  

  const handleSignUp = (e:any) => {
    e.preventDefault();
    Service.SignUp(data).then(() => {
      //  window.location.reload();
      setProgress(false)

    }).then((res)=>{
      navigate("/");
    })
    .catch((er) => {
      setProgress(false)

    });;
  };
 console.log(data)

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="flex flex-col items-center  bg-slate-200 bg-blue-navy p-4	rounded-lg md:w-2/6 h-auto border shadow-lg">
       
        <h1 className="text-3xl text-center text-blue-500 mb-[20px]">فرم ثبت نام</h1>
        <form className="flex flex-col w-full" onSubmit={handleSignUp}>
              <InputForm
                type="text"
                icon={<AiOutlineUser className="text-xl" />}
                placeholder="نام کاربری"
                onChange={handleChange}
                name="username"
                madatory
              />
              <InputForm
                type="password"
                icon={<MdOutlinePassword className="text-xl" />}
                placeholder="رمز ورود"
                onChange={handleChange}
                name="password"
                madatory
              />
              <InputForm
                type="password"
                icon={<MdOutlinePassword className="text-xl" />}
                placeholder="تکرار رمز ورود"
                onChange={handleChange}
                className={password !== true ? "border border-red-600" : ""}
                name="confirm_password"
                madatory
              />
              
             
          <ButtonSubmit className="bg-black" progress={progress}>ثبت نام </ButtonSubmit>
           

          
        </form>
      </div>
    </div>
  );
}

export default SignUp;

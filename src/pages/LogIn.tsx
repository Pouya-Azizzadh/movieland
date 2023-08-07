import React,{useState} from "react"


// components

import InputForm from "../components/tags/InputForm"
import { ToastContainer, toast } from "react-toastify"

import "react-toastify/dist/ReactToastify.css"
// react router dom 
import { Link, useNavigate } from "react-router-dom";


// icons
import { FcGoogle } from "react-icons/fc"
import { MdOutlinePassword } from "react-icons/md"
import { AiOutlineUser } from "react-icons/ai"
import { GoHubot } from "react-icons/go"
import { FiRefreshCcw } from "react-icons/fi"

// servic

import Service from "../service";



const LogIn = () => {

    const [data, setData] = useState({});
    const navigate = useNavigate();
    const notify = (title) => toast(title)

    const handleChange = (e:any) => {
      setData((prev) => {
        return {
          ...prev,
          [e.target.name]: e.target.value,
        };
      });
    };
    const handleSignIn = (event:any) => {
        event.preventDefault();
    
        Service.LoginService(data)
          .then(() => {
            //  window.location.reload()
            navigate("/webapp/home");
          }).then(() => {
            //  window.location.reload()
           navigate("/");
          }).catch(er=>{
            notify("نام کاربری یا رمز عبور اشتباه است")

          })
          
      };

  return (
    <div className="w-full h-screen  flex-center">

<ToastContainer
       position="top-right"
       autoClose={5000}
       hideProgressBar={false}
       newestOnTop={false}
       closeOnClick
       rtl={false}
       pauseOnFocusLoss
       draggable
       pauseOnHover
       theme="dark"
      />


        <div className="flex flex-col items-center bg-blue-navy bg-slate-200 dark:bg-[#0f0f0f] p-4	rounded-lg md:w-2/6 h-auto border shadow-lg">
          <form className="flex flex-col w-full " onSubmit={handleSignIn}>
            <h1 className="text-3xl text-center text-blue-500 mb-[20px]">
              فرم ورود
            </h1>
            <InputForm
              type="text"
              icon={<AiOutlineUser className="text-xl" />}
              placeholder="نام کاربری راوارد کنید"
              onChange={handleChange}
              name="username"
            />
            <InputForm
              type="password"
              icon={<MdOutlinePassword className="text-xl" />}
              placeholder="رمز عبور را وارد کنید"
              onChange={handleChange}
              name="password"
            />
          
            <button
              type="submit"
              className={`w-full rounded-r-full rounded-l-full hover:shadow-inner  my-4  p-2 bg-black font-bold flex items-center justify-center`}
            >
              ورود
            </button>
          </form>

          <div className="flex w-full my-4 text-sm lg:text-md justify-between text-blue-400">
            <Link to="/signup">ساخت اکانت</Link>
          </div>
        </div>
    </div>
  )
}

export default LogIn

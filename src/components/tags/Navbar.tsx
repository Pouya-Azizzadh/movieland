import React, {
  PropsWithChildren,
  FC,
  useState,
  ReactNode,
  useEffect,useLayoutEffect
} from "react"

// icons
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import Logo from "../../assets/zarfilm-logo.png"
import LogoFarsi from "../../assets/Logo-Farsi.png"
import { BsPersonCircle } from "react-icons/bs"
import { BsSearch } from "react-icons/bs"
import Man from "../../assets/man.png"

// components
import ButtonLink from "./ButtonLink"

// service
import Service from "../../service"

const Navbar: FC = () => {
  const [open, setOpen] = useState<boolean>(false)
  const [openSearch, setOpenSearch] = useState<boolean>(false)
  const [search, setSearch] = useState<string>("")
  const [user, setUser] = useState<any>()
  const [token,setToken]=useState(JSON.parse(localStorage.getItem("token")))


  useEffect(() => {
    Service.getUser(token).then((res) => {
      setUser(res?.data)
    })
  },[token])
console.log("name;",token)
  const handleOpen = () => {
    setOpen(true)
  }
  const handleOpenSearch = () => {
    setOpenSearch(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  const handleSearch = (e: any) => {
    setSearch(e.target.value)
  }
  return (
    <div className="w-full flex justify-between items-center mb-10 absolute top-0 z-100 p-4 md:px-10 md:py-8 ">
      <ul
        className="max:hidden list-none flex-center"
        style={{ zIndex: 100000000000000000 }}
      >
        <li>
          <ButtonLink to="/">
            <img src={Logo} alt="zarfilm" />
          </ButtonLink>
        </li>
       
      </ul>
      <div
        onClick={handleOpen}
        className={`bg-blue-navy md:hidden rounded-[10px]  p-2 text-white  ${
          open ? "hidden" : ""
        }`}
        style={{ zIndex: 100000000000000000 }}
      >
        <AiOutlineMenu />
      </div>
      <ul
        className={`max:flex-column list-none md:hidden w-[80%] bg-blue-navy p-4 min-h-screen	fixed top-0 right-0  ${
          open ? "" : "hidden"
        }`}
        style={{ zIndex: 100000000000000000 }}
      >
        <li className="flex-between">
          <ButtonLink to="/">
            <img src={LogoFarsi} alt="zarfilm" />
          </ButtonLink>
          <div
            className="bg-black rounded-[20px]  flex-center  px-4 py-2 text-white"
            onClick={handleClose}
          >
            <AiOutlineClose className="border rounded-[20px] text-2xl" />
          </div>
        </li>
     
        <li>
          <div className="flex-center my-8 text-3xl text-white">
            <ButtonLink to="login/" className="bg-yellow w-full rounded-[20px]">
              ورود/ثبت نام
            </ButtonLink>
          </div>
        </li>
      </ul>
      <div className="z-50 flex">
        {user ? (
          <div className="flex-center mx-4 border p-2 rounded-3xl border-white bg-black opacity-60">
              {user?.user}

            <img
              src={Man}
              alt="person"
              className="mx-4 rounded-full w-[50px]"
            />
          </div>
        ) : (
          <ButtonLink
            to="login/"
            className="bg-yellow ml-4 font-bold md:block hidden z-50 rounded-[20px]"
          >
            ورود/ثبت نام
          </ButtonLink>
        )}
        <div
          className="rounded-[20px] p-2 text-bold flex   items-center cursor-pointer  bg-blue-navy text-white z-50"
          onMouseEnter={handleOpenSearch}
        >
          <input
            type="text"
            onChange={handleSearch}
            className={` bg-blue-navy border-none outline-none ml-2 w-[0px] duration-700 ${
              openSearch ? "md:w-[160px] w-[80px]" : "w-[0px]"
            }`}
          />
          <ButtonLink to={`search/${search}`}>
            <BsSearch />
          </ButtonLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar
{
  /*


 <div
        className={`flex flex-col justify-start max:fixed max:top-0 max:left-0  max:bg-blue-navy  max:items-end max:py-16 right-0 items-center md:justify-start md:flex-row z-[50]  md:p-4  ${
          open
            ? "max:h-full delay-1000 max:bg-blue-100 w-56 duration-500 max:text-black"
            : "max:h-10 max:w-0 delay-1000 max:hidden"
        }`}
        style={{ zIndex: 1000 }}
      >
        <div className="flex ">
          {title ? (
            <h3 className="text-3xl font-extrabold  h-full text-orange">
              {title}
            </h3>
          ) : (
            <img src={logo} alt="zarfilm" className="w-full" />
          )}
          <div className="text-white flex-center text-2xl rounded-[10px] md:hidden border">
            <AiOutlineClose onClick={handleClose} />
          </div>
        </div>

        {children}
      </div>
      <div
        onClick={handleOpen}
        style={{ zIndex: 1001 }}
        className={`${
          open ? "hidden" : ""
        } md:hidden  text-white flex-center z-[30] text-2xl border p-2 border-blue rounded-[10px] m-4 bg-blue-navy text-blue abslout top-0`}
      >
        <AiOutlineMenu />
      </div>
*/
}

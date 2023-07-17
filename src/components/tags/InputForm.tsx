import React from "react"
import { icons } from "react-icons"

interface Props {
  type: string
  placeholder: string
  icon: any
  onChange: any
  madatory?: boolean
  name: string
  className?: string
}

function InputForm(props: Props) {
  const { type, placeholder, icon, onChange, madatory, className, name } = props
  const handleChange = (e: any) => {
    onChange(e)
  }
  return (
    <div
      className={`flex items-center  hover:shadow-inner bg-white  rounded-r-full rounded-l-full border-2 text-black backdrop-blur-lg		 p-2  my-2 ${className}`}
    >
      {madatory ? (
        <>
          {icon}
          <input
            type={type}
            className="outline-none	mr-4 bg-white 	 w-5/6"
            placeholder={placeholder}
            onChange={handleChange}
            name={name}
            required
          />
        </>
      ) : (
        <>
          {icon}
          <input
            type={type}
            className="outline-none	mr-4 bg-white	 w-5/6"
            placeholder={placeholder}
            name={name}
            onChange={handleChange}
          />
        </>
      )}
    </div>
  )
}

export default InputForm

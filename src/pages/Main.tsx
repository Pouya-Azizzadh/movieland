import React from "react"
import { Outlet } from "react-router-dom"

import Navbar from "../components/tags/Navbar"

const Main = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default Main

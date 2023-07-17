import React, { FC, useEffect } from "react"
// service

import Service from "./service"

// routers
import { Routes, Route } from "react-router-dom"
import routes from "./routes"

// component
import Navbar from "./components/tags/Navbar"
import Button from "./components/tags/Button"
import ButtonLink from "./components/tags/ButtonLink"

// css
import "./App.css"

function App() {
  Service.getData("movies/").then((re) => {
    console.log(re)
  })

  return (
    <div style={{ minHeight: "100vh" }} className="text-white w-full bg-black ">
      <div className="bg-black">
        <Navbar />
        <div>
          <Routes>
            {routes.map((route) => {
              if (route.type === "single") {
                return (
                  <Route
                    key={route.path}
                    path={route.path}
                    element={route.component}
                  />
                )
              }
            })}
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App

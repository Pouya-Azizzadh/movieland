import Home from "./pages/Home"
import MovieAndSerice from "./pages/MovieAndSerice"
import MovieSearch from "./pages/MovieSearch"
import LogIn from "./pages/LogIn"
import SignUp from "./pages/SignUp"
import Main from "./pages/Main"
import React, { ReactNode } from "react"




interface Route{
   name: string
  component: ReactNode
  path: string
 }

interface RoutesType {
  name: string
  component: ReactNode
  path: string
  type: "single" | "multiple"
  list?:Route[]
}

const routes: RoutesType[] = [
  {
    name:"main",
    component: <Main />,
    path: "/",
    type: "multiple",
    list:[
      {
        name: "Home",
        component: <Home />,
        path: "/",
      },
    
      {
        name: "movie",
        component: <MovieAndSerice />,
        path: "/:id",
      },
      {
        name: "search",
        component: <MovieSearch />,
        path: "search/:search",
      }
    ]
  },
 

  {
    name: "login",
    component: <LogIn />,
    path: "login/",
    type: "single",
  },
  {
    name: "signup",
    component: <SignUp />,
    path: "signup/",
    type: "single",
  },
]
export default routes

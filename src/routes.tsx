import Home from "./pages/Home";
import MovieAndSerice from "./pages/MovieAndSerice";
import MovieSearch from "./pages/MovieSearch";
import LogIn from "./pages/LogIn";
import SignUp from './pages/SignUp'
import React,{ReactNode} from "react"


	

	interface RoutesType {
        name: string;
		component:ReactNode;
		path: string;
		type:'single'|'multiple'
	}


  
const routes: RoutesType[] = [
  {
    name: "Home",
    component: <Home />,
    path: "/",
    type: "single",
  },
 
  {
    name: "movie",
    component: <MovieAndSerice />,
    path: "/:id",
    type: "single",
  },
  {
    name: "search",
    component: <MovieSearch />,
    path: "search/:search",
    type: "single",
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
  }
];
export default routes;

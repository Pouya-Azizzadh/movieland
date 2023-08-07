
import React, { useEffect, useState } from "react"
// service
import Service from "../../service"

// swiper
import DesktopSwiper from "../../components/siwper/DesktopSwiper"
import MobileSwiper from "../../components/siwper/DesktopSwiper"
import { SwiperSlide } from "swiper/react"

// router
import { Link } from "react-router-dom"

import axios, { AxiosResponse } from "axios"
// components
import Card from "../../components/Card"
import CustomSlider from "../../components/CustomSlider"
// service





function Home() {
  const width = window.innerWidth
  const [movie, setMovie] = useState<AxiosResponse | null | void | any>()

  useEffect(() => {
    async function fetchData() {
      const Movies = await Service.getData("movies/")

      setMovie(Movies.data.results)

    }
    fetchData()
  }, [])
 
  
  return (
    <div className="flex flex-col text-white">
      <div className="md:mb-[120px]">
      <CustomSlider/>

      </div>
     <div className="flex flex-wrap md:justify-between justify-center  w-screen md:p-10 ">

     {
      movie?.map((item:any)=>{
        return(
          <Card {...item}/>
        )
      })
     }
          </div>

    </div>
  );
}







export default Home;




/**/
import React, { useEffect, useState } from "react"
// service
import Service from "../service"

// swiper
import DesktopSwiper from "./siwper/DesktopSwiper"
import MobileSwiper from "./siwper/MobileSwiper"
import { SwiperSlide } from "swiper/react"

// router
import { Link } from "react-router-dom"

import axios, { AxiosResponse } from "axios"



// log
import Imdb from "../assets/imdb.png"

const CustomSlider = () => {
  const width = window.innerWidth
  const [newMonvie, setNewMovie] = useState<AxiosResponse | null | void | any>()
  const [currentMovie, setCurrentMovie] = useState(0)

  useEffect(() => {
    async function fetchData() {
      const Response = await Service.getData("list/5")
      setNewMovie(Response.data.list)
    }
    fetchData()
  }, [])

  const handleMovie = (val: any) => {
    setCurrentMovie(val.activeIndex)

    console.log(val)
  }

  console.log("d", currentMovie)
  const swiperChilderen = newMonvie?.map((item: any) => {
    return (
      <SwiperSlide key={item.id} >
        <Link to={`${item.title}`}>
          <div
            className={`w-[200px] h-[300px] max:w-[150px] max:h-[220px] hover:scale-110	z-40 flex justify-end items-end	duration-700	 p-4 text-white bg-cover	rounded-[10px]`}
            style={{
              backgroundImage: `url('https://movieland.iran.liara.run${item.disk_image}')`,
            }}
          >
            <span>10</span>
            <span className=" text-2xl  font-semibold ">/{item.imdb}</span>
          </div>
        </Link>
      </SwiperSlide>
    )
  })

  return (
    <div className="w-full ">
      <div className="md:w-2/4 w-full md:mt-[200px] mt-[50px] max:py-20">
        {width > 750 ? (
          <DesktopSwiper onChange={handleMovie}>
            {swiperChilderen}
           
          </DesktopSwiper>
        ) : (
          <MobileSwiper>{swiperChilderen}</MobileSwiper>
        )}
      </div>
      {newMonvie && (
        <div
          className="gradient_slider hidden md:block text-white absolute top-0 w-4/5 h-[700px] left-0 rounded-b-[60px]"
          style={{
            backgroundImage: `url('https://movieland.iran.liara.run${newMonvie[currentMovie].poster}')`,
          }}
        >
          <div className="gradient_slider absolute flex-column justify-center p-20 items-end top-0 w-full h-full">
            <h1 className="text-3xl font-bold">
              {newMonvie[currentMovie].title}
            </h1>
            <img src={Imdb} className="w-[80px] mt-10" alt="imdb"/>
            <div>
            <span className=" text-4xl  font-semibold ">{newMonvie[currentMovie].imdb}/</span>
            <span>10</span>

            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CustomSlider

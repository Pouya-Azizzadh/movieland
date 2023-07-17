import React, { FC } from "react"
import { Link } from "react-router-dom";

interface Props {
  disk_image: string
  gener: { id: number; title: string }[]
  id: number
  imdb: number
  poster: string
  story: string
  title: string
  year: number
}

const Card: FC<Props> = ({
  disk_image,
  gener,
  id,
  imdb,
  poster,
  story,
  title,
  year,
}) => {
  return (
    <Link  to={`/${title}`} className="mx-[20px] mt-[30px]">
    <div className=" flex-center flex-col md:w-[200px] w-[300px] h-[420px] md:h-[320px] duration-300 hover:scale-125	">
      <div
        className="rounded-[7px] w-full h-[95%] mx-8 text-white p-2 flex items-end justify-between"
        style={{
          backgroundImage: `url('${disk_image}')`,
          backgroundSize: "cover",
        }}
      >
        {imdb}/10
      </div>
      <span className="font-bold tex-white my-2">{title}</span>
    </div>
    </Link>

  )
}

export default Card

import React,{useEffect,useState}from 'react'
import { useParams } from "react-router-dom"

//service
import Service from '../../service'
import Card from '../../components/Card'

const MovieSearch = () => {
    const { search } = useParams()
    const [movie, setMovie] = useState<any>()
  
    useEffect(() => {
      async function fetchData() {
        const movie = await Service.getData(`movies/?search=${search}`)
  
        setMovie(movie.data.results)
      }
      fetchData()
    }, [])
    console.log(movie)
  return (
    <div className='flex flex-wrap absolute top-[160px] px-10'>
        {movie?.map((item:any)=>{
            return(
                <Card {...item} key={item.id}/>
            )
        })}
    </div>
  )
}

export default MovieSearch
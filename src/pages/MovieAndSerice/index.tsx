import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

// service
import Service from "../../service"

// logo
import Imdb from "../../assets/imdb.png"
import Man from "../../assets/man.png"










function MovieAndSerice() {
  const { id } = useParams()
  const [movie, setMovie] = useState<Movie>({})
  const [comments, setComments] = useState<any>("")
  const [newComment, setNewComment] = useState<any>({})

  useEffect(() => {
    async function fetchData() {
      const movie = await Service.getData(`movie/${id}`)
      const comment = await Service.getData(`comment/${movie.data.id}`)
      console.log("comment", comment)

      setMovie(movie.data)
      setComments(comment.data)
    }
    fetchData()
  }, [])
  console.log("c", comments)
  const handleComment = (e: any) => {
    setNewComment((prev: any) => {
      return {
        movie: movie.id,
        text: e.target.value,
      }
    })
  }
  const sendComment = (e: any) => {
    //e.preventDefault()
    Service.postData("post-comment/", newComment)
  }
  console.log("MOVIE", movie)
  return (
    <>
      {/* movie detail */}
      <div className="w-full flex flex-col  overflow-hidden">
        <div className="w-full flex-center   reflect">
          <img
            className="rounded-[10px] bg-contain h-[400px] mr-[400px] hidden md:block"
            src={`https://moviesite.iran.liara.run${movie?.disk_image}`}
            alt={movie.title}
            style={{ zIndex: 1000 }}
          />

          <div
            className="bg-cover	 text-white  min-w-full md:w-4/5 md:h-[700px]  "
            style={{
              backgroundImage: `url('https://moviesite.iran.liara.run${movie.poster}')`,
              backgroundSize: "cover",

            }}
          >
            <div className="gradient_slider md:block hidden  flex-column justify-center p-[150px] items-end top-0 w-full h-full">
              <div className="flex flex-col w-2/5">
                <h2 className="text-3xl font-bold">دانلود فیلم{movie.title}</h2>
                <div className="flex items-center my-4">
                  ژانرها:
                  <div className="flex">
                    {movie?.gener?.map((val: any) => {
                      return (
                        <div className="border border-gray rounded-[10px] p-2  mx-4">
                          {val.title}
                        </div>
                      )
                    })}
                  </div>
                </div>
                <p className="text-gray my-8">{movie.story}</p>
                <div className="flex items-center">
                  <span className="mx-2 ">{movie.imdb}/10</span>
                  <img src={Imdb} alt="imdb" className="w-[70px]" />
                </div>
              </div>
            </div>
            <div className="gradient_bottom md:hidden block  flex-column text-center justify-center p-20 items-end top-0 w-full h-full">
              <h2 className="text-3xl font-bold">دانلود فیلم{movie.title}</h2>

              <p className="text-gray my-8">{movie.story}</p>
              <div className="flex items-center">
                <span className="mx-2 ">{movie.imdb}/10</span>
                <img src={Imdb} alt="imdb" className="w-[70px]" />
              </div>
              <div className="flex items-center my-4">
                ژانرها:
                <div className="flex ">
                  {movie?.gener?.map((val: any) => {
                    return (
                      <div className="border border-gray text-[12px] flex-center rounded-[10px] px-[8px]  m-4">
                        {val.title}
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* comments */}
        <div className="rounded-[20px] bg-blue-navy mb-8 mt-20 z-50 md:mx-10     p-10">
          <form onSubmit={sendComment} className="mb-10 w-full">
            <textarea
              onChange={handleComment}
              className="w-full bg-black rounded-[30px]  border-1 border-white my-4 p-4"
              placeholder="نظر خود را تایپ کنید ..."
              rows={3}
            />

            <button type="submit">ارسال</button>
          </form>
          {comments != "" ? (
            <>
              {comments.map((val: any) => {
                return (
                  <section className="flex flex-col mb-20" key={val.id}>
                    <div className="flex items-center">
                      <img
                        src={Man}
                        alt="person"
                        className="mx-4 rounded-full w-[50px]"
                      />
                      <span>ناشناس</span>
                    </div>
                    <p className="text-gray text-[22px]">{val.text}</p>
                  </section>
                )
              })}
            </>
          ) : (
            <span className="text-gray w-full text-center">
              کامنتی وجود ندارد
            </span>
          )}
        </div>
      </div>
    </>
  )
}

export default MovieAndSerice

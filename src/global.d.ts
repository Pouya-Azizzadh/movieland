export {}
declare global {
  interface Gener {
    id?: number
    title?: string
  }
  interface Movie {
    disk_image?: string
    gener?: Gener[]
    id?: number
    imdb?: number
    poster?: string
    story?: string
    title?: string
    year?: number
  }
}

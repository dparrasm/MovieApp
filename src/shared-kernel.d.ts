export type MovieId = number

export type MovieApiResponse = Array<{
  id: MovieId
  poster_path: string
  title: string
}>

export type MovieDetailsApiResponse = {
  id: MovieId
  poster_path: string
  title: string
  overview: string
  vote_average: number
}

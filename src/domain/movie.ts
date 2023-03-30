import { type MovieId } from '../shared-kernel'

export interface Movie {
  id: MovieId
  posterPath: string
  title: string
}
export interface MovieDetails extends Movie {
  overview: string
  score: string
}

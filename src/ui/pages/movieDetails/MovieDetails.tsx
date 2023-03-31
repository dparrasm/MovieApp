import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { getMovieDetails } from '../../../application/movieServices'
import { type MovieDetailsApiResponse } from '../../../shared-kernel'
import MovieComponent from '../../components/movie/MovieComponent'
import {
  MovieDetailsContainer,
  MovieDetailsOverviewContainer,
  MovieDetailTitle,
} from './MovieDetailsStyles'

export default function MovieDetails(): JSX.Element {
  const [movie, setMovie] = useState<MovieDetailsApiResponse>()
  const location = useLocation()

  useEffect(() => {
    const id = new URLSearchParams(location.search).get('id')
    if (id !== null) {
      getMovieDetails(Number(id))
        .then((md) => setMovie(md))
        .catch((e) => console.log(e))
    }
  }, [])
  return (
    <MovieDetailsContainer>
      <MovieDetailsOverviewContainer>
        <MovieDetailTitle>{movie?.title}</MovieDetailTitle>
        <span>{movie?.overview}</span>
        <p>
          {movie?.vote_average != null ? Math.round(movie?.vote_average) : 0}
          /10
        </p>
      </MovieDetailsOverviewContainer>
      <MovieComponent posterPath={movie?.poster_path} />
    </MovieDetailsContainer>
  )
}

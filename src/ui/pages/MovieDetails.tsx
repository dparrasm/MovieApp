import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { getMovieDetails } from '../../application/movieServices'
import { type MovieDetailsApiResponse } from '../../shared-kernel'
import MovieComponent from '../components/movie/MovieComponent'

const MovieDetailsOverviewContainer = styled.div`
  width: 50%;
  margin-right: 20px;
  @media (max-width: 767px) {
    width: 80%;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
`
const MovieDetailsContainer = styled.div`
  display: flex;
  margin-top: 10px;
  height: 100vh;
  justify-content: center;
  @media (max-width: 767px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
const MovieDetailTitle = styled.div`
  font-size: 20px;
  font-weight: bolder;
`
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

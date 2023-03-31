import { useState } from 'react'
import { type Movie } from '../../../domain/movie'
import { useLocation, useNavigate } from 'react-router-dom'
import { type MovieId } from '../../../shared-kernel'
import { MovieContainer, MovieTitle } from './MovieComponentStyles'

export default function MovieComponent(props: Movie): JSX.Element {
  const { posterPath, title, id } = props
  const imageBaseUrl = 'https://image.tmdb.org/t/p/original'
  const [showMessage, setShowMessage] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const handleMouseEnter = (): void => {
    setShowMessage(true)
  }

  const handleMouseLeave = (): void => {
    setShowMessage(false)
  }

  const handleOnClick = (id: MovieId): void => {
    if (location.pathname === '/movies') {
      navigate({ pathname: '/movieDetails', search: `?id=${id}` })
    }
  }

  return (
    <MovieContainer
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => handleOnClick(id)}
    >
      <img src={imageBaseUrl + posterPath} alt={title} />
      {showMessage && <MovieTitle>{title}</MovieTitle>}
    </MovieContainer>
  )
}

import { useState } from 'react'
import styled from 'styled-components'
import { type Movie } from '../../../domain/movie'
import { useNavigate } from 'react-router-dom'
import { type MovieId } from '../../../shared-kernel'

const MovieContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    text-align: center;  
    position: relative;  
    img{
      width: 150px;
    }
}`

const MovieTitle = styled.div`
   {
    z-index: 100;
    background: black;
    color: white;
    position: absolute;
    width: 150px;
    bottom: 0;
  }
`

export default function MovieComponent(props: Movie): JSX.Element {
  const { posterPath, title, id } = props
  const imageBaseUrl = 'https://image.tmdb.org/t/p/original'
  const [showMessage, setShowMessage] = useState(false)
  const navigate = useNavigate()

  const handleMouseEnter = (): void => {
    setShowMessage(true)
  }

  const handleMouseLeave = (): void => {
    setShowMessage(false)
  }

  const handleOnClick = (id: MovieId): void => {
    navigate({ pathname: '/movieDetails', search: `?id=${id}` })
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

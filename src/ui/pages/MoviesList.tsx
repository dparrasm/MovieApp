import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { getMovies, searchMovie } from '../../application/movieServices'
import { type MovieApiResponse } from '../../shared-kernel'
import MovieComponent from '../components/movie/MovieComponent'
import Searchbar from '../components/searchbar/Searchbar'

const Body = styled.div`
    display: flex;
    justify-content: center;
    min-height: 100vh;
}`

const SearchbarContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}`
const MoviesListContainer = styled.div`
    margin: 10px;
    width: 70%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    grid-gap: 20px;
}`

export default function MoviesList(): JSX.Element {
  const [moviesList, setMoviesList] = useState<MovieApiResponse>([])
  const location = useLocation()

  useEffect(() => {
    if (location.pathname === '/movies') {
      getMovies()
        .then((ml) => setMoviesList(ml.results))
        .catch((e) => console.error(e))
    } else {
      const query = new URLSearchParams(location.search).get('query')
      searchMovie(query)
        .then((sm) => setMoviesList(sm.results))
        .catch((e) => console.log(e))
    }
  }, [moviesList])

  return (
    <div>
      <SearchbarContainer>
        <Searchbar />
      </SearchbarContainer>
      <Body>
        <MoviesListContainer>
          {moviesList.map((m, index) => (
            <MovieComponent
              key={index}
              id={m.id}
              posterPath={m.poster_path}
              title={m.title}
            />
          ))}
        </MoviesListContainer>
      </Body>
    </div>
  )
}

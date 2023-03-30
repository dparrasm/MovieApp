import {
  type MovieDetailsApiResponse,
  type MovieApiResponse,
  type MovieId,
} from '../shared-kernel'
import axios from 'axios'

const apiKey = import.meta.env.VITE_MOVIE_API_KEY

export const getMovies = async (): Promise<Array<MovieApiResponse>> => {
  try {
    const moviesList = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US`
    )
    if (moviesList.status !== 200) {
      throw new Error('Error: Unexpected response from API')
    }
    return moviesList.data
  } catch (error) {
    throw new Error(`Error: ${error.message}`)
  }
}

export const getMovieDetails = async (
  movieId: MovieId
): Promise<MovieDetailsApiResponse> => {
  try {
    const movieDetails = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`
    )
    if (movieDetails.status !== 200) {
      throw new Error('Error: Unexpected response from API')
    }
    return movieDetails.data
  } catch (error) {
    throw new Error(`Error: ${error.message}`)
  }
}

export const searchMovie = async (
  query: string
): Promise<Array<MovieApiResponse>> => {
  try {
    const results = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${query}`
    )
    if (results.status !== 200) {
      throw new Error('Error: Unexpected response from API')
    }
    return results.data
  } catch (error) {
    throw new Error(`Error: ${error.message}`)
  }
}

import Header from './ui/components/header/Header'
import MoviesList from './ui/pages/MoviesList'
import { Route, Routes, Navigate } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import MovieDetails from './ui/pages/MovieDetails'
import { DarkModeContext } from './context/DarkModeContext'
import { useContext } from 'react'
import styled from 'styled-components'

interface AppContainerProps {
  darkMode: boolean
}
const AppContainer = styled.div<AppContainerProps>`
  background: ${(props) => {
    return props.darkMode ? '#4B5563' : '#FFFFFF'
  }};
  height: 100%;
`

function App(): JSX.Element {
  const { darkMode } = useContext(DarkModeContext)
  return (
    <AppContainer darkMode={darkMode}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/movies' element={<MoviesList />} />
          <Route path='/searchMovie' element={<MoviesList />} />
          <Route path='/movieDetails' element={<MovieDetails />} />
          <Route path='/' element={<Navigate replace to='/movies' />} />
        </Routes>
      </BrowserRouter>
    </AppContainer>
  )
}

export default App

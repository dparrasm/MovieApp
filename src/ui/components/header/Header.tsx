import { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { DarkModeContext } from '../../../context/DarkModeContext'
import ControlledSwitch from '../controlledSwitch/ControlledSwitch'

interface HeaderContainerProps {
  darkMode: boolean
}
const HeaderContainer = styled.header`
  background-color: ${(props: HeaderContainerProps) =>
    props.darkMode ? '#1F2937' : '#60A5FA'}; 
  display: flex;
  h1 {
    margin: 0;
    font-size: 25px;
  }
  ul {
    li {
      list-style: none;
    }
    width: 100%;
    display: flex;
    justify-content: center;
    color: white;
  }
  nav{
    width: 100%;
    display: flex;
    align-items: center;
  }
}`

const HeaderBackButton = styled.div`
  height: 100%;
  font-size: 30px;
  display: flex;
  align-items: center;
  margin-left: 10px;
  color: white;
  cursor: pointer;
`

const Header = (): JSX.Element => {
  const { darkMode } = useContext(DarkModeContext)
  const location = useLocation()
  const showBackButton = location.pathname !== '/movies'

  return (
    <HeaderContainer darkMode={darkMode}>
      <nav>
        {showBackButton && (
          <HeaderBackButton onClick={() => window.history.back()}>
            {'<'}
          </HeaderBackButton>
        )}
        <ul>
          <li>
            <h1>Movies</h1>
          </li>
        </ul>
        <ControlledSwitch />
      </nav>
    </HeaderContainer>
  )
}

export default Header

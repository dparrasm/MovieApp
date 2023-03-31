import { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { DarkModeContext } from '../../../context/DarkModeContext'
import ControlledSwitch from '../controlledSwitch/ControlledSwitch'
import { HeaderBackButton, HeaderContainer } from './HeaderStyles'

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

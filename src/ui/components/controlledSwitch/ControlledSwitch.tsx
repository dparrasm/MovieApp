import { useContext, useState } from 'react'
import Switch from '@mui/material/Switch'
import { DarkModeContext } from '../../../context/DarkModeContext'

export default function ControlledSwitch(): JSX.Element {
  const [checked, setChecked] = useState(true)
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setChecked(event.target.checked)
    toggleDarkMode()
    console.log(darkMode)
  }

  return (
    <Switch
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />
  )
}

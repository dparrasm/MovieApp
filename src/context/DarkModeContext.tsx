import { createContext, useState } from 'react'

interface DarkModeContextType {
  darkMode: boolean
  toggleDarkMode: () => void
}

const DarkModeContext = createContext<DarkModeContextType>({
  darkMode: false,
  toggleDarkMode: () => {},
})

function DarkModeProvider(props: { children: React.ReactNode }): JSX.Element {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = (): void => {
    setDarkMode(!darkMode)
  }

  return (
    <div>
      <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
        {props.children}
      </DarkModeContext.Provider>
    </div>
  )
}

export { DarkModeContext, DarkModeProvider }

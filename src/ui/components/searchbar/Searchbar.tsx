import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CleanButton, SearchbarContainer } from './SearchbarStyles'

export default function Searchbar(): JSX.Element {
  const [text, setText] = useState<string>('')
  const [isInputEmpty, setIsInputEmpty] = useState<boolean>(true)
  const navigate = useNavigate()

  const handleSearch = (): void => {
    navigate({ pathname: '/searchMovie', search: `?query=${text}` })
  }
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setText(event.target.value)
    setIsInputEmpty(event.target.value === '')
  }

  const handleOnClick = (): void => {
    setText('')
    setIsInputEmpty(true)
  }

  return (
    <SearchbarContainer>
      <input
        type='text'
        name='movieSearcher'
        placeholder='Rechercher un film'
        value={text}
        onChange={handleOnChange}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            handleSearch()
          }
        }}
      />
      {isInputEmpty ? null : (
        <CleanButton onClick={handleOnClick}>X</CleanButton>
      )}
    </SearchbarContainer>
  )
}

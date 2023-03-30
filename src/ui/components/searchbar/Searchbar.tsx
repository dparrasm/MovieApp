import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const SearchbarContainer = styled.div`
    background: white;
    display: flex;
    margin: 10px;
    width: 70%;
    height: 25px;
    border: 2px solid #e3e3e3;
    border-radius: 3px;
    align-items: center;
    padding: 3px;

    input{
        width: 95%;
        height: 100%;
        border: none;
        outline: none;
    }
}`

const CleanButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background: white;
    outline: none;
    height: 20px;
    width: 5%;
}`

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

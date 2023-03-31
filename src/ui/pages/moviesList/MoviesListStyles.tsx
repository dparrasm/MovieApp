import styled from 'styled-components'

export const Body = styled.div`
    display: flex;
    justify-content: center;
    min-height: 100vh;
}`

export const SearchbarContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}`
export const MoviesListContainer = styled.div`
    margin: 10px;
    width: 70%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    grid-gap: 20px;
}`

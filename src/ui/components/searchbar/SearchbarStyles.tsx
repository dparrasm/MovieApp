import styled from 'styled-components'

export const SearchbarContainer = styled.div`
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

export const CleanButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background: white;
    outline: none;
    height: 20px;
    width: 5%;
}`

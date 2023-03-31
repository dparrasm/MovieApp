import styled from 'styled-components'

export const MovieContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    text-align: center;  
    position: relative;  
    img{
      width: 150px;
    }
}`

export const MovieTitle = styled.div`
   {
    z-index: 100;
    background: black;
    color: white;
    position: absolute;
    width: 150px;
    bottom: 0;
  }
`

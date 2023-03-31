import styled from 'styled-components'

export const MovieDetailsOverviewContainer = styled.div`
  width: 50%;
  margin-right: 20px;
  @media (max-width: 767px) {
    width: 80%;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
`
export const MovieDetailsContainer = styled.div`
  display: flex;
  margin-top: 10px;
  height: 100vh;
  justify-content: center;
  @media (max-width: 767px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
export const MovieDetailTitle = styled.div`
  font-size: 20px;
  font-weight: bolder;
`

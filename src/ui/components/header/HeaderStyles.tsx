import styled from 'styled-components'

interface HeaderContainerProps {
  darkMode: boolean
}
export const HeaderContainer = styled.header`
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

export const HeaderBackButton = styled.div`
  height: 100%;
  font-size: 30px;
  display: flex;
  align-items: center;
  margin-left: 10px;
  color: white;
  cursor: pointer;
`

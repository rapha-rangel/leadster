import styled  from "styled-components"; 

export const Section = styled.section`
  padding: 2rem 0 2rem;
  background-color: white;
`
export const Container = styled.div`
  display: grid;  
  justify-content: space-around;  
`
export const HeaderMain = styled.div`
  display: flex;  
  align-items: center;
  margin-bottom: 1rem;
`
export const HeaderButtonDiv = styled.div`
  display: flex;  
  align-items: center;
  margin-right: 1rem;
`
export const HeaderButton = styled.button`
  padding: 0.2rem 0.8rem;
  border: 1px solid black;
  color:black;
  border-radius: 10px;
  margin-right: 1rem;
  transition: border 0.5s, color 0.5s;
  cursor: pointer;
  &:hover {
    border: 2px solid blue;
    color:blue;
  &::-moz-selection {
    background-color: blue;
    border: 2px solid blue;
    color: white;
  }
  }
`
export const HeaderSelectDiv = styled.div`
  display: flex;  
  align-items: center;
  justify-content: center;
`
export const HeaderSelectText = styled.p`
  margin-right: 1rem;
  font-weight: 600;
`
export const HeaderSelect = styled.select`
  padding: 0.5rem 0.8rem;
  border-radius: 10px;
`
export const HeaderOptions = styled.option`
  line-height: 80%;
  
`
export const Hr = styled.hr`
  border: 1px solid lightgray;
  border-radius: 5px;
  margin-bottom: 1rem;
`
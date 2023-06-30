import styled  from "styled-components";

export const Section = styled.section`
  padding: 2rem 0 2rem;
  background-color: white;
`
export const Container = styled.div`
  display: grid;  
  align-items: center;
  justify-content: center;
  margin-left: 1rem;
  margin-right: 1rem;
`
export const Header = styled.div`
  display: grid;  
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
`
export const ImageLogo =styled.img`
  
`
export const SubtitleLogo =styled.p`
  font-size: 0.7rem;
`
export const Content =styled.div` 
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
`
export const ContentBox =styled.div`
  margin-bottom: 1rem;
`
export const Title = styled.p`
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 1.5rem
`
export const Options = styled.p`
  color: gray;
  font-size: 0.7rem;
  margin-bottom: 0.7rem
`
export const OptionsLink = styled.div`
  color: black;
  font-size: 0.7rem;
`
export const OptionsBox = styled.div`
  display: flex;  
  justify-content: space-evenly;
  margin-bottom: 0.7rem
`
export const IconsBox = styled.div`
  background-color: #EEEEEE;
  padding: 0.4rem 0.6rem;
  border-radius: 50px;
  border: none;
`
export const Icon = styled.a`
  color:gray;
`
import styled from "styled-components";

export const Section = styled.section`
  padding: 2rem 0 2rem;
  background-color: #E8FAFF ;
  /* #1f76f0; */
`
export const Container = styled.div`
  display: grid;  
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-left: 1rem;
  margin-right: 1rem;
`
export const LogoDiv =styled.div`
display: flex;
justify-content: center;
`
export const Logo =styled.p`
  border: 1px solid #2c83fb;
  padding: 0.2rem 0.8rem ;
  font-size: 0.7rem;
  color: #2c83fb;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  border-top-left-radius: 15px;
`
export const FirstTitle= styled.h3`
  font-size: 1.5rem;
  font-weight: 500;
`
export const SecondTitleDiv=styled.div`
  display: block;
  position: relative;
  width: 300px;
  margin-bottom: 1rem;
`
export const SecondTitle=styled.h2`
  font-size: 2.2rem;
  font-weight: 700;
  color: #2c83fb;

`
export const LogoTitle=styled.img`
  position: absolute;
  transform: scale(0.3);
  right: 0;
  top:0px;
`
export const Subtitle=styled.p`
font-size: 0.7rem;
font-weight: 500;
`
export const SubtitleSpan=styled.span`
font-weight: 700;
`
export const Hr = styled.hr`
  border: 1px solid #EEEEEE;
  border-radius: 5px;
  margin-bottom: 1rem;
`
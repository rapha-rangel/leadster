import styled, {keyframes} from "styled-components";

function animationContent(props) {
  return keyframes`
   0% {
    opacity: 0;
    transform: translate(${props}, 0);
  }

  100% {
    opacity: 1;
    transform: translate(0, 0);
  }
`} 
export const Section = styled.section`
  padding: 1rem  1rem;
  margin-bottom: 2rem;
  transition: background-color 1s ease-in-out;
  background-color:${props => props.isActive ? "#80A1FF" : "#EEEEEE"};
`
export const Container = styled.div`
  display: flex;  
  justify-content: space-between;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  color: ${props => props.isActive ? "white" : " black"};
  cursor: pointer;
  :hover{
    color: blue;
  }
`
export const Title = styled.h3`
  font-size: 1rem;
  font-weight: 500;
`
export const Icon = styled.a`
  font-size: 1rem;
  transform: ${props => props.isActive ? "rotate(-180deg)":"rotate(0deg)" };
  color: ${props => props.isActive ? "white" : " black"};
  transition: transform 1s;
`
export const Content= styled.div`
  display: grid;
  justify-items: center;
  background-color: white;
  overflow: hidden;
  max-height: ${props => props.isActive ? "2000px": "0px" } ;
  transition:${props => props.isActive ? "max-height 1s ease-in-out": "max-height 1s cubic-bezier(0, 1, 0, 1)"};  
`
export const ContentDiv= styled.div`
  position: relative;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  box-shadow:  7px 12px 14px 16px lightgray;
  width: 100%;
  margin-bottom: 1rem;
  animation: ${props => animationContent(props.animation)};
  animation-duration: 3s;
`
export const ContentImage= styled.img`
  width: 100%;
`
export const ContentDescription= styled.p`
  font-size: 0.7rem;
  padding: 1rem;
`
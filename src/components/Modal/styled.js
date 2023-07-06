import styled, {css, keyframes} from "styled-components";
  export const openModalAnimation = keyframes`
  0%{
    transform: scale(0);
    opacity: 0;
  }
  10%{
    transform: scale(0.5);
    opacity: 1;
  }
  100%{
    transform: scale(1);
  }
`

export const Section = styled.section`
  background-color: white;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  animation: ${openModalAnimation} 1s ease-in-out;
`
export const Container = styled.div`
  border-top: 3px solid blue;
  border-radius: 5px;
  max-width: 600px;
  display: grid;
`
export const IconBox = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin: 0.5rem;
`
export const Icon = styled.a`
`
export const Header = styled.div`
  text-align: center;
  margin-left: 3rem;
  margin-right: 3rem;
  margin-bottom: 1rem;
`
export const HeaderTitle = styled.h3`
  font-size: 1rem;
`
export const TitleSpan = styled.span`
  font-size: 1rem;
  color: blue;
`
export const Content = styled.div`
  display: grid;
  margin-top: 1rem;
  margin-left: 1rem;
  margin-right: 1rem;
  gap: 1rem;
`
export const ContentDescription = styled.div`
  display: grid;
  gap: 0.5rem;
`
export const DescriptionTitle = styled.p`
  padding-bottom: 0.5rem;
  border-bottom: 1px solid black;
`
export const DescriptionText = styled.p`
  font-size: 0.7rem;
  text-align: justify;
  text-justify: inter-word;
`
export const ContentDownload = styled.div`
  display: grid;
  gap: 0.5rem;
`
export const DownloadTitle = styled.p`
  padding-bottom: 0.5rem;
  border-bottom: 1px solid black;
`
export const DownloadButtonDiv = styled.div`
  display: grid;
  gap: 0.5rem;
`
export const DownloadButtonBox = styled.div`
  display: flex;
  margin-right: 0.5rem;
`
export const DownloadButton = styled.button`
  font-size: 0.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: lightblue;
  border: none;
  gap: 0.5rem;
  padding:0.3rem ;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
  ${props=>{
    switch(props.titleDownload){
      case "Spreadsheet":
        return css`
        color:#00BC6D;
        background-color: #CBFFE9;
        `
      case "Document":
        return css`
        color:#136DE3;
        background-color: #A0E0FF;
        `
      case "Presentation":
        return css`
        color:#B4A200;
        background-color: #FAF3B9;
        `
      default:
    }}}
`
export const DownloadButtonIcon = styled.a`
  font-size: 0.7rem;
  padding:0.3rem ;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
  ${props=>{
    switch(props.titleDownload){
      case "Spreadsheet":
        return css`
        color:#00BC6D;
        background-color: #A9FFDB;
        `
      case "Document":
        return css`
        color:#136DE3;
        background-color: #65CCFF;
        `
      case "Presentation":
        return css`
        color:#B4A200;
        background-color: #FFF177;
        `
      default:
    }}}
`
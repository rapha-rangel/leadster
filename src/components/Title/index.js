import LogoTitleImage from '../../imagens/asset-header.png';
import {Section, 
        Container, 
        LogoDiv, 
        FirstTitle, 
        SecondTitle, 
        Subtitle, 
        Logo, 
        SecondTitleDiv, 
        LogoTitle,
        Hr,
        SubtitleSpan} from './styled';

const Title = () =>{
  return(
    <Section>
      <Container>
        <LogoDiv>
          <Logo>WEBINARS EXCLUSIVOS</Logo>
        </LogoDiv>
        <FirstTitle>Menos Conversinha,</FirstTitle>
        <SecondTitleDiv>
          <SecondTitle>Mais Conversão</SecondTitle><LogoTitle src={LogoTitleImage} alt="ImagemSobre a logo"/>
        </SecondTitleDiv>
        <Hr/>
        <Subtitle>Conheça as estratégias que <SubtitleSpan>mudaram o jogo</SubtitleSpan> e como aplicá-las no seu negócio</Subtitle>
      </Container>
    </Section>
  )
}

export default Title;
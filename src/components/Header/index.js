import Logo from '../../imagens/logo.png';
import { Section, Container, ImageLogo } from './styled';

const Header =()=>{
  return(
    <Section>
      <Container> 
        <ImageLogo src={Logo} alt="Logo Leadster"/>
      </Container>
      
    </Section>
  )
}

export default Header;
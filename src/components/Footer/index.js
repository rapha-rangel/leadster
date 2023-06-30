import {Section, Container, FooterCopyright, FooterLocation, Icon, Link } from './styled';
import { BiCopyright} from 'react-icons/bi';

const Footer = () =>{
  return(
    <Section>
      <Container>
        <div style={{display: "flex"}}>
        <FooterCopyright>Copyright <Icon><BiCopyright/></Icon> 2015 - 2022 Todos os direitos reservados | <Link>Leadster</Link></FooterCopyright>
        </div>
        <FooterLocation>Rua José Loureiro, 464 - Centro - Curitiba PR - CEP: 80010-000 | Termos de uso</FooterLocation>
      </Container>
    </Section>
  )
}

export default Footer;
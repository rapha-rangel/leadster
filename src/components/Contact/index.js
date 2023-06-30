import {Container, 
        Section, 
        ImageLogo, 
        SubtitleLogo, 
        Header, 
        Content, 
        ContentBox, 
        Title, 
        Options,
        OptionsBox,
        IconsBox,
        Icon,
        OptionsLink} from './styled';
import Logo from '../../imagens/logo.png';
import { BiLogoInstagram, BiLogoLinkedin, BiLogoFacebook} from 'react-icons/bi';


const Contact = () =>{
  return(
    <Section>
      <Container>
        <Header>
          <ImageLogo src={Logo} alt="Logo Image"/>
          <SubtitleLogo>Transformando visitantes em clientes.</SubtitleLogo>
        </Header>
        <Content>
          <ContentBox>
            <Title>Links Principais</Title>
            <Options>Home</Options>
            <Options>Ferramenta</Options>
            <Options>Preços</Options>
            <Options>Contato</Options>
          </ContentBox>
          <ContentBox>
            <Title>Cases</Title>
            <Options>Geração de Leads B2B</Options>
            <Options>Geração de Lead em Software</Options>
            <Options>Geração de Lead em Imobiliária</Options>
            <Options>Cases de Sucesso</Options>
          </ContentBox>
          <ContentBox>
            <Title>Materiais</Title>
            <Options>Blog</Options>
            <Options>Parceira com Agências</Options>
            <Options>Guia Definitivo do Marketing</Options>
            <Options>Materiais Gratuitos</Options>
          </ContentBox>
          <ContentBox>
            <Title>Siga a Leadster</Title>
            <OptionsBox>
              <IconsBox>
                <Icon><BiLogoLinkedin/></Icon>
              </IconsBox>
              <IconsBox>
                <Icon><BiLogoFacebook/></Icon>
              </IconsBox>
              <IconsBox>
                <Icon><BiLogoInstagram/></Icon>
              </IconsBox>
            </OptionsBox>
            <OptionsLink>
              <OptionsLink>E-mail: <Options>contato@leaddter.com.br</Options></OptionsLink>
            </OptionsLink>
            <OptionsLink>
              <OptionsLink>Telefone: <Options>(42) 98828-9851</Options> </OptionsLink>
            </OptionsLink>
          </ContentBox>
        </Content>
      </Container>
    </Section>
  )
}

export default Contact;
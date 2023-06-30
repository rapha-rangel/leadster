import { Section, 
        Container,
        HeaderMain,
        HeaderButtonDiv,
        HeaderButton,
        HeaderSelectDiv,
        HeaderSelectText,
        HeaderSelect,
        HeaderOptions,
        Hr} from "./styled";

const Main = () =>{
  return(
    <Section>
      <Container>
        <HeaderMain>
          <HeaderButtonDiv>
          <HeaderButton>Agências</HeaderButton>
          <HeaderButton>Chatbox</HeaderButton>
          <HeaderButton>Marketing Digital</HeaderButton>
          <HeaderButton>Geração de Leads</HeaderButton>
          <HeaderButton>Midia Paga</HeaderButton>
          </HeaderButtonDiv>
          <HeaderSelectDiv>
            <HeaderSelectText>Ordenar por</HeaderSelectText>
            <HeaderSelect name="select">
                <HeaderOptions value="data" selected>Data de Publicação</HeaderOptions>
                <HeaderOptions value="tempo">Tempo do Video</HeaderOptions>
                <HeaderOptions value="conteudo">Conteudo</HeaderOptions>
            </HeaderSelect>
          </HeaderSelectDiv>
        </HeaderMain>
        <Hr/>
        <p>Suvaco </p>
      </Container>
    </Section>
  )
}

export default Main;

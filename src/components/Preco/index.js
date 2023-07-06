import {Section, 
        Container, 
        Title, 
        TitleBold, 
        Subtitle, 
        SubtitleBold,
        Hr, 
        Content, 
        ButtonDiv, 
        ButtonDemo, 
        SeloDiv, 
        Selo,
        StatusDiv,
        CardDiv,
        CardImg,
        CardInfo,
        RatingDiv,
        RatingImg,
        RatingInfo,
        CardSpan,
        HrVertical,
        ComparativeImg,
        ComparativeDiv} from './styled';
import SeloRD from '../../imagens/selo_RD.png';
import NoCard from '../../imagens/no-card-dark.webp';
import StarRating from '../../imagens/rating.webp';
import Comparative from '../../imagens/comparativo_img_CTA.png';
const Preco =()=>{
  return(
    <Section id='preco'>
      <Container>
        <Title>
          Pronto para triplicar sua
          <TitleBold>
            Geração de Leads?
          </TitleBold>
        </Title>
        <Subtitle>
          Criação e ativação em<SubtitleBold> 4 minutos. </SubtitleBold>
        </Subtitle>
        <Hr/>
        <ComparativeDiv>
          <ComparativeImg src={Comparative} alt="Image Comparative"/>
        </ComparativeDiv>
        <Content>
          <ButtonDiv>
            <ButtonDemo>VER DEMOSTRAÇÃO</ButtonDemo>
            <SeloDiv>
              <Selo src={SeloRD} alt="Selo RD STATION"/>
            </SeloDiv>
          </ButtonDiv>
          <StatusDiv>
            <CardDiv>
              <CardImg src={NoCard} alt="No card image"/><CardInfo><CardSpan>Não</CardSpan> é necessário Cartão de Crédito</CardInfo>
            </CardDiv>
            <HrVertical>|</HrVertical>
            <RatingDiv>
              <RatingImg src={StarRating} alt="RatingStar"/><RatingInfo>4.9/5 média de satisfação</RatingInfo>
            </RatingDiv>
          </StatusDiv>
        </Content>
      </Container>
    </Section>
  )
}

export default Preco;
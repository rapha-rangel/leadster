import React , {useState} from 'react';
import {Section, Container, Title, Icon, Content, ContentImage,ContentDiv, ContentDescription} from './styled';

const Accordion = ({title, content})=>{
  const [isActive, setIsActive] = useState(false);

  return (
    <Section>
      <Container onClick={() => setIsActive(!isActive)}>
        <Title>{title}</Title>
        <Icon>{isActive ? '-' : '+'}</Icon>
      </Container>
      {isActive && 
        <Content>
          
          <ContentDiv>
            <ContentImage src={content} alt="Thumbnail"/>
            <ContentDescription>
            “Um cidadão fez voto de desapego e pobreza. Dispôs de todos os seus bens e propriedades, reservou para si apenas duas tangas, e saiu pelo mundo afora em busca de todos os sábios, medindo na verdade o desapego de cada um. Levava apenas uma tanga no corpo.
            </ContentDescription>
          </ContentDiv>
          <ContentDiv>
            <ContentImage src={content} alt="Thumbnail"/>
            <ContentDescription>
            “Um cidadão fez voto de desapego e pobreza. Dispôs de todos os seus bens e propriedades, reservou para si apenas duas tangas, e saiu pelo mundo afora em busca de todos os sábios, medindo na verdade o desapego de cada um. Levava apenas uma tanga no corpo.
            </ContentDescription>
          </ContentDiv>
        
        </Content>
        
      }
    </Section>
  );
};

export default Accordion;
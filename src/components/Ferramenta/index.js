import {Section, Container} from './styled';
import Accordion from '../Accordion';
import {accordionData} from '../utils/content'

const Ferramenta = ()=>{
  return(
    <Section>
      <Container>
        {accordionData && accordionData.map(({title, content}) =>(
          <Accordion 
          title={title}
          content={content}/>
        ))}
      </Container>
    </Section>
  )
}

export default Ferramenta;
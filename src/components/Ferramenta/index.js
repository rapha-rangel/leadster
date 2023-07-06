import {Section, Container} from './styled';
import Accordion from '../Accordion';
import { connect, useDispatch } from 'react-redux';
import { setList } from '../../redux/reducers';
import { useEffect} from 'react';

const Ferramenta = ()=>{
  const titleArray =["Agências", "Chatbot", "Marketing Digital", "Geração de Leads", "Mídia Paga"];
  const dispatch = useDispatch();

  useEffect(()=>{
    fetch('./data.json',{
      headers:{
        Accept: "application/json"
      }
    }).then(res => res.json())
      .then(res=> {
        dispatch(setList(res.data))
      });
  },[])

  return(
    <Section id="ferramenta">
      <Container>
        {titleArray && titleArray.map((item) =>(
          <Accordion item={item}>
          </Accordion>
          )
        )}
      </Container>
    </Section>
  )
}

const mapStateToProps=(state)=>({
  list: state.modal.list
})


export default connect(mapStateToProps)(Ferramenta);
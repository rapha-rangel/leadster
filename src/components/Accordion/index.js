import React , {useState, useMemo} from 'react';
import {Section, Container, Title, Icon, Content, ContentImage,ContentDiv, ContentDescription} from './styled';
import { IoIosArrowDown} from 'react-icons/io';
import { setDescription, setOpenModal, setUrl} from "../../redux/reducers";
import { useDispatch, connect } from 'react-redux';
import Pagination from '../Pagination';
import thumb from "../../imagens/thumbnail.png"

const Accordion = (props)=>{
  const [isActive, setIsActive] = useState(false);
  const [animationContainer, setAnimationContainer] = useState();
  const dispatch =  useDispatch();
  const PER_PAGE = 2;
  const titlePorItem = props.list.filter(list => (list.title === props.item));
  const [currentPage, setCurrentPage] = useState(1);

  const currentData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PER_PAGE;
    const lastPageIndex = firstPageIndex + PER_PAGE;
    console.log(animationContainer)
    return titlePorItem.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);



  return (
    <Section isActive={isActive}>
    <Container onClick={() => setIsActive(!isActive)} isActive={isActive}>
      <Title>{props.item}</Title>
      <Icon isActive={isActive}><IoIosArrowDown/></Icon>
    </Container>
      <Content isActive={isActive}>
        {currentData.map(list=>{
          return(
        <ContentDiv 
          animation={animationContainer}
          onClick={()=>{
            dispatch(setOpenModal(true))
            dispatch(setDescription(list.description))
            dispatch(setUrl(list.url))
            }}>
          <ContentImage src={thumb} alt="Thumbnail" />
          <ContentDescription>
            {list.description}
          </ContentDescription>
        </ContentDiv>
        )})}
        <Pagination
          setAnimationContainer={setAnimationContainer}
          currentPage={currentPage}
          totalCount={titlePorItem.length}
          pageSize={PER_PAGE}
          onPageChange={page => setCurrentPage(page)}
          />
      </Content>
  </Section>
  );
};

const mapStateToProps=(state)=>({
  list: state.modal.list
})


export default connect(mapStateToProps)(Accordion) ;
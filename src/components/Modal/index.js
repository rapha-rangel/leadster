import {Section, 
        Container, 
        IconBox, 
        Icon, 
        Header, 
        HeaderTitle, 
        ContentDescription, 
        DescriptionTitle, 
        DescriptionText,
        Content, 
        ContentDownload,
        DownloadTitle,
        DownloadButtonBox,
        DownloadButton,
        DownloadButtonIcon,
        DownloadButtonDiv,
        TitleSpan} from "./styled";
import { setOpenModal } from "../../redux/reducers";
import { useDispatch } from "react-redux";
import { SlCloudDownload } from 'react-icons/sl';
import { AiOutlineClose } from 'react-icons/ai';
import { useEffect } from "react";
import { connect } from "react-redux";

const Modal = (props)=>{

  const dispatch= useDispatch();

  useEffect(()=>{
    window.scrollTo(0,0); 
    console.log(props.url);
  },[]);

  return(
    <Section openModal={false}>
      <Container>
        <IconBox>
          <Icon onClick={()=>{dispatch(setOpenModal(false))}}><AiOutlineClose/></Icon>
        </IconBox>
        <Header>
          <HeaderTitle> <TitleSpan>Webnar:</TitleSpan>{props.description}</HeaderTitle>
        </Header>
        <iframe width="320" height="320" src={props.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <Content>
          <ContentDescription>
            <DescriptionTitle> Description</DescriptionTitle>
            <DescriptionText>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using
            </DescriptionText>
          </ContentDescription>
          <ContentDownload>
            <DownloadTitle>Downloads</DownloadTitle>
            <DownloadButtonDiv>
              <DownloadButtonBox>
                <DownloadButtonIcon titleDownload={"Spreadsheet"}>
                  <SlCloudDownload/>
                </DownloadButtonIcon>
                <DownloadButton titleDownload={"Spreadsheet"}>Spreadsheet.xls</DownloadButton>
              </DownloadButtonBox>
              <DownloadButtonBox>
                <DownloadButtonIcon titleDownload={"Document"}>
                  <SlCloudDownload/>
                </DownloadButtonIcon>
                <DownloadButton titleDownload={"Document"}>Document.doc</DownloadButton>
              </DownloadButtonBox>
              <DownloadButtonBox>
                <DownloadButtonIcon titleDownload={"Presentation"}>
                  <SlCloudDownload/>
                </DownloadButtonIcon>
                <DownloadButton titleDownload={"Presentation"}>Presentation.ppt</DownloadButton>
              </DownloadButtonBox>
            </DownloadButtonDiv>
          </ContentDownload>
        </Content>
      </Container>
    </Section>
  )
}
const mapStateToProps=(state)=>({
  url: state.modal.url,
  description: state.modal.description
})


export default connect(mapStateToProps)(Modal);
import Header from '../../components/Header';
import Home from '../../components/Home';
import Ferramenta from '../../components/Ferramenta';
import Preco from '../../components/Preco';
import Footer from '../../components/Footer'
import { connect } from 'react-redux';
import Modal from '../../components/Modal';
import Contato from '../../components/Contato';

const Main =(props)=>{
  return(
    <>
    {props.modal ?
      <>
      <Modal/>
        
      </>
      :
      <>
        <Header/>
        <Home/>
        <Ferramenta/>
        <Preco/>
        <Contato/>
        <Footer/>
      </>
    }
    </>
  )
}

const mapStateToProps =(state)=>({
  modal: state.modal.openModal
});

export default connect(mapStateToProps)(Main);
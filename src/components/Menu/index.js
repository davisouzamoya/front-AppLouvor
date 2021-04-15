import React,{useState} from 'react';
import { Container, MySection, MyAnchor } from "./style";
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom'

function Menu(){
  const [nav,setNav] = useState(false);

  function toggleNav() {
    setNav(!nav);
  }

  return(
    <>
       <Container>
        <MySection 
          $tamanho={nav}
        >
          <a 
            href="#" 
            className="closebtn"
            onClick={toggleNav}
          >
          <AiOutlineCloseCircle size={30}/>
          </a>
          <Link to={`/registerMusic`}>Cadastro</Link>
          <Link to={`/list`}>Lista de músicas</Link>
        </MySection>
      </Container>
    </>
  )}
  
  export default Menu;
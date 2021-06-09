import React,{useContext, useEffect, useState} from 'react';
import { Container, MySection, MyAnchor } from "./style";
import { HiMenu } from 'react-icons/hi';
import { useHistory } from 'react-router-dom'
import { AiOutlineCloseCircle,AiOutlineArrowLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom'
import { AuthContext } from '../../Providers/auth';

function Header() {
  const [nav,setNav] = useState(false);
  const history = useHistory();
  const { currentUser,isLeader,signOut } = useContext(AuthContext)

  function toggleNav() {
    if(currentUser){
      setNav(!nav);
    }else{
      history.push('/')
    } 
  }

  return (
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
        {isLeader &&
          <Link to={`/listaAprovar`}>Aprovar</Link>
        }
        <Link onClick={signOut}>Logout</Link>
      </MySection>
      <header>
        {currentUser ?
          (
            <MyAnchor 
              $tamanho={nav}
              onClick={toggleNav}
            >
              <HiMenu size={35}/>
            </MyAnchor>
          ):(
            <MyAnchor 
              $tamanho={nav}
              onClick={toggleNav}
            >
              <AiOutlineArrowLeft size={35}/>
            </MyAnchor>
          )

        }
      </header>
        <div>
          <h1>Ministério de Louvor</h1>
        </div>
    </Container>
    </>
  );
}

export default Header;
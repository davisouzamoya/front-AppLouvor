import React, { useContext } from 'react';
import { Container } from "./style";
import { backEnd } from "../../service/api";
import { AuthContext } from '../../Providers/auth';
import { useHistory } from 'react-router-dom'

function Button({
    color,
    width,
    children,
    name,
    data,
    lyrinc,
    type
  }){
  const datasUser = localStorage.getItem('@MinLouvor:user');
  const { token } = useContext(AuthContext)
  let history = useHistory();
  debugger
  async function approve(){
    try{

      const headers = { 
        'Authorization': `Bearer ${token}`
     };

     debugger
     const dataApi = {
        artist:data.artist,
        title:data.music,
        approver:JSON.parse(datasUser).name,
        valid:true,
        lyrics:[lyrinc.current.getData().letraMusica]
      }

      const  response = await backEnd.put("music",dataApi,{headers});
      alert(response.data)
      history.push('/listaAprovar');
    }catch(err){
      alert(`Erro no cadastro`)
    }
  }

function actionButton(){
  debugger
  if(name === 'aprovar'){
      approve()
  }else if(name === 'reprovar'){
      disapprove()
  }
}

  return (
    <Container
      $color={color}
      $width={width}
    >
      <button
        onClick={actionButton}
        type={type}
      >
      {children}
      </button>
    </Container>
  );
}

export default Button;
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
  async function approve(){
    try{

      const headers = { 
        'Authorization': `Bearer ${token}`
     };

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

  async function disapprove(){
    try{

      const headers = { 
        'Authorization': `Bearer ${token}`,
        'artist':data.artist,
        'title':data.music,
     };

      const  response = await backEnd.delete("music",{headers});
      alert(response.data)
      history.push('/listaAprovar');
    }catch(err){
      alert(`Erro no cadastro`)
    }
  }

function actionButton(){
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
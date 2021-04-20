import React, { useContext } from 'react';
import { Container } from "./style";
import { backEnd } from "../../service/api";
import { AuthContext } from '../../Providers/auth';
import { useHistory } from 'react-router-dom'

function Button({color,width,children,name,data,lyrinc}) {
  const datasUser = localStorage.getItem('@MinLouvor:user');
  let history = useHistory();
debugger
  async function approve(){
    try{
      const  response = await backEnd.put("music",{
        artist:data.artist,
        title:data.music,
        approver:JSON.parse(datasUser).name,
        valid:true,
        lyrics:[lyrinc]
      });
      alert(response.data)
      history.push('/listaAprovar');
    }catch(err){
      alert(`Erro no cadastro`)
    }
  }

  async function disapprove(){
    try{
        const response = await backEnd.delete("music",{
          headers:{
            artist:data.artist,
            title:data.music
          }
        });
        alert(response.data)
        history.push('/listaAprovar');
    }catch(err){
      alert(`Erro no cadastro`)
    }
  }

function actionButton(){
  console.log(data)
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
      >
      {children}
      </button>
    </Container>
  );
}

export default Button;
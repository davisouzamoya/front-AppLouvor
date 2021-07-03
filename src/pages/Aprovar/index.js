import React, { useContext, useEffect, useRef, useState } from 'react';
import Header from '../../components/header/index'
import { Container } from "./style";
import { backEnd } from "../../service/api";
import Button from '../../components/Button/index'
import Textarea from '../../components/Textarea/index'
import { AuthContext } from '../../Providers/auth';
import { useRouteMatch } from 'react-router-dom'
import { Form } from '@unform/web'

function Aprovar(){
  const [title,setTitle] = useState()
  const [artist,setArtist] = useState()
  const [lyrinc,setLyrinc] = useState()
  const { token } = useContext(AuthContext)
  const { params } = useRouteMatch()
  const formRef = useRef(null)
  
  useEffect(() =>{
    backEnd.get('music',{
      headers:{
        artist:params.artist,
        title:params.music,
        'Authorization': `Bearer ${token}`
      }
  }).then(response => {
    let data = response.data 
    setLyrinc(data[0].lyrics.toString())
  }).catch(error => {
    console.log('deu erro')
  })
    setTitle(params.music)
    setArtist(params.artist)
  },[params.artist])

  function handleSubmit(data) {
    
  }

  
  return (
    <div>
    <Header/>
    <Container>
      <Form 
        ref={formRef}
        onSubmit={handleSubmit}
        >
        <header>
          <img src={`https://www.vagalume.com.br/${artist}/images/${artist}.jpg`}/>
          <h1>{title}</h1>
        </header>
        <section>
          {lyrinc &&
            <Textarea
              name='letraMusica'
              defaultValue={lyrinc}
            /> 
          }
        </section>
        <footer>
          <Button
              color='red'
              width='49'
              name='reprovar'
              data={params}
              type="submit"
            >
              Reprovar
            </Button>
            <Button
              width='49'
              name='aprovar'
              data={params}
              lyrinc={formRef}
              type="submit"
            >
              Aprovar
            </Button>
        </footer>
      </Form>
    </Container>
    </div>
  );
}

export default Aprovar;

import React, { useContext, useEffect, useRef, useState } from 'react';
import Header from '../../components/header/index'
import { Profile } from "./style";
import { backEnd } from "../../service/api";
import Button from '../../components/Button/index'
import Textarea from '../../components/Textarea/index'
import { Form } from '@unform/web'
import { useRouteMatch } from 'react-router-dom'
import { AuthContext } from '../../Providers/auth';

function Profiles(){
  const [title,setTitle] = useState()
  const [artist,setArtist] = useState()
  const [lyrinc,setLyrinc] = useState()
  const { params } = useRouteMatch()
  const { token } = useContext(AuthContext)
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
 
  function GenerateTxt(){
    let data = lyrinc;
    let blob = new Blob([data], { type: 'text/plain;charset=utf-8;' });
    const link= window.document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'export.txt';
    link.click();
    window.URL.revokeObjectURL(link.href);
  }

  return (
    <div>
    <Header/>
    <Profile>
      <Form 
        ref={formRef}
        >
      <header>
        <img src={`https://www.vagalume.com.br/${artist}/images/${artist}.jpg`}/>
        <h1>{title}</h1>
      </header>
      <section>
        {lyrinc &&
        <Textarea
          defaultValue={lyrinc}
          name='letra'
        />
      }
      </section>
      <footer>
        {/* <Button
          width='98'
        >
          Gerar PP
        </Button> */}
      </footer>
      </Form>
    </Profile>
    </div>
  );
}

export default Profiles;

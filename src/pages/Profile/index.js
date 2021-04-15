import React, { useEffect, useState } from 'react';
import Header from '../../components/header/index'
import { Profile } from "./style";
import { backEnd } from "../../service/api";
import Button from '../../components/Button/index'
import Textarea from '../../components/Textarea/index'
import { useRouteMatch } from 'react-router-dom'

function Profiles(){
  const [title,setTitle] = useState()
  const [artist,setArtist] = useState()
  const [lyrinc,setLyrinc] = useState()
  const { params } = useRouteMatch()
  
  useEffect(() =>{
    backEnd.get('music',{
      headers:{
        artist:params.artist,
        title:params.music
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
      <header>
        <img src={`https://www.vagalume.com.br/${artist}/images/${artist}.jpg`}/>
        <h1>{title}</h1>
      </header>
      <section>
        {lyrinc &&
        <Textarea
          value={lyrinc}
        />
      }
      </section>
      <footer>
        <Button
          width='98'
          // func={GenerateTxt}
        >
          Gerar PP
        </Button>
      </footer>
    </Profile>
    </div>
  );
}

export default Profiles;

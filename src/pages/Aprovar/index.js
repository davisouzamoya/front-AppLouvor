import React, { useContext, useEffect, useState } from 'react';
import Header from '../../components/header/index'
import { Profile } from "./style";
import { backEnd } from "../../service/api";
import Button from '../../components/Button/index'
import Textarea from '../../components/Textarea/index'
import { useRouteMatch } from 'react-router-dom'


function Aprovar(){
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
            color='red'
            width='49'
            name='reprovar'
            data={params}
            lyrinc={lyrinc}
          >
            Reprovar
          </Button>
          <Button
            width='49'
            name='aprovar'
            data={params}
            lyrinc={lyrinc}
          >
            Aprovar
          </Button>
      </footer>
    </Profile>
    </div>
  );
}

export default Aprovar;

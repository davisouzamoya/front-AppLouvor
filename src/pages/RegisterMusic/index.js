import React,{useState,useContext} from 'react';
import {base,seachVideoApi,backEnd} from '../../service/api'
import Header from '../../components/header/index'
import Input from '../../components/input/index'
import { Form } from '@unform/web'
import Button from '../../components/Button/index'
import Textarea from '../../components/Textarea/index'
import Select from '../../components/Select';
import { useHistory } from 'react-router-dom'
import { Container, } from "./style";
import makeAnimated from 'react-select/animated';
import { BsSearch } from 'react-icons/bs';
import { ProviderContext } from '../../Providers/contexts';
import { AuthContext } from '../../Providers/auth';

function RegisterMusic() {
  const {artist,value,seachVideo,urlVideo,title,lyrics } = useContext(ProviderContext)
  const { datasUser } = useContext(AuthContext)
  let history = useHistory();
    async function handleRegister(e){
      debugger
      try{
        let lyric =  lyrics.mus.map(data => data.text)
      
        const data = {
          valid:false,
          artist,
          title,
          url:`https://www.youtube.com/embed/${urlVideo}`,
          lyrics:lyric
        }
        const  response = await backEnd.post("music",data);
        alert(response.data)
        history.push("/list");
      }catch(err){
        console.log(err)
        alert(`Erro no cadastro`)
      }
    }  

  return (
    <div>
      <Header/>
      <Container>
        <Form onSubmit={handleRegister}>
          <header>
            <Input 
              type='text'
              name='seachArtist'
              placeholder="Música ou Artista"
              Icon={BsSearch}
            />
          </header>
          
          <section>
          {value &&
            <Select
              name="seachLyrics"
              options={value}
              onChange={(e) =>{seachVideo(e)}}
            />
          }  

          {urlVideo &&
            <iframe 
              src={`https://www.youtube.com/embed/${urlVideo}`}
              ></iframe>
          } 

          {lyrics &&
          
            lyrics.mus.map(data =>( 
              <Textarea
                key={data.id}
                value={data.text}
              />
            ))
            
          } 
          { lyrics  &&
            <Button 
              type="submit"
              width='98'
              >Cadastrar</Button>
          }
          </section>
        </Form>
      </Container>
    </div>
  );
}

export default RegisterMusic;

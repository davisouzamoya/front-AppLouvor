import React,{useContext, useRef, useState} from 'react';
import {backEnd} from '../../service/api'
import Header from '../../components/header/index'
import Input from '../../components/input/index'
import { Form } from '@unform/web'
import Button from '../../components/Button/index'
import Textarea from '../../components/Textarea/index'
import Select from '../../components/Select';
import Loading from '../../components/Loading';
import { useHistory } from 'react-router-dom'
import { Container, } from "./style";
import { BsSearch } from 'react-icons/bs';
import { ProviderContext } from '../../Providers/contexts';
import { AuthContext } from '../../Providers/auth';

function RegisterMusic() {
  const { 
    artist,
    value,
    seachVideo,
    urlVideo,
    title,
    lyrics,
    setValue,
    setUrlVideo,
    setLyrics,
    seachLyrics
   } = useContext(ProviderContext)
   const { isLeader,token } = useContext(AuthContext)
   const formRef = useRef(null)
   const [loading, setLoading] = useState(false);
   const [inputArtist,setInputArtist] = useState('')
   let history = useHistory();
        
    async function handleRegister(data,{ reset }){
      debugger
      try{  
        const dataApi = {
          valid:isLeader ? isLeader :false,
          artist,
          title,
          url:`https://www.youtube.com/embed/${urlVideo}`,
          lyrics:[data.textArea]
        }
  
        const headers = { 
          'Authorization': `Bearer ${token}`
      };
        const response = await backEnd.post("music",dataApi,{headers});
        alert(response.data)
        setValue('')
        setUrlVideo('')
        setLyrics('')
        formRef.current.reset()
      }catch(err){
        console.log(err)
        alert(`Erro no cadastro`)
      }
    } 

    const handleKeyDown = (event) => {
      if(event.key === 'Enter' && event.shiftKey === false) {
        debugger
        seachLyrics(formRef.current.getData().seachArtist)
        event.preventDefault();
      }
    };
    

  return (
    <div>
      <Header/>
      <Container>
        <Form ref={formRef} 
          onSubmit={handleRegister}
          onKeyDown={e => { handleKeyDown(e)}}
          >
            {/* <Loading/> */}
          <header>
            <Input 
              type='text'
              name='seachArtist'
              placeholder="Artista"
              Icon={BsSearch}
              value={e => setInputArtist(e)}
            />
          </header>
          
          <section>
          {value &&(
            <Select
              name="seachLyrics"
              options={value}
              onChange={(e) =>{seachVideo(e)}}
            />
            )}  

          {urlVideo &&
            <iframe 
              src={`https://www.youtube.com/embed/${urlVideo}`}
              name='urlVideo'
              ></iframe>
          } 

          {lyrics &&
            lyrics.mus.map(data =>( 
              <Textarea
                key={data.id}
                defaultValue={data.text}
                name='textArea'
              />
            ))
            
          } 
          { lyrics  &&
            <Button 
              type="submit"
              width='98'
              onClick={e => this.teste(e)}
              >
                Cadastrar
              </Button>
          }
          </section>
        </Form>
      </Container>
    </div>
  );
}

export default RegisterMusic;

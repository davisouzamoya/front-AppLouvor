import React, { useState } from 'react'
import {seachVideoApi,secondURL,base} from '../service/api';
import { backEnd } from '../service/api'
export const ProviderContext = React.createContext({})

export function Provider({children}){
  const [value,setValue] = useState('')
  const [artist,setArtist] = useState([])
  const [title,setTitle] = useState('')
  const [urlVideo,setUrlVideo] = useState('')
  const [lyrics,setLyrics] = useState('')
  const [musicList,setMusicList] = useState('')
  const [musicTrue,setMusicTrue] = useState([])
  const [musicFalse,setMusicFalse] = useState([])
  const [musicApproval,setMusicApproval] = useState('')
  var optionsLyrics = [];

  async function loadingMusic() {
    try{
      debugger
      let token = JSON.parse(localStorage.getItem("@MinLouvor:user")).token
      const response = await backEnd.get("music",{
        headers:{
          'Authorization': `Bearer ${token}`
        }
      });
      setMusicTrue(response.data.filter(data => data.valid))
      setMusicList(response.data.filter(data => data.valid))
      setMusicFalse(response.data.filter(data => data.valid === false))
      setMusicApproval(response.data.filter(data => data.valid === false))
    }catch (err){
      alert('Erro ao listar músicas')
    }
  }

  async function seachLyrics(artist){
    debugger
    artist = artist.replaceAll(' ','-').toLowerCase()
    artist = removeAcento(artist)
    const response = await secondURL.get(`/${artist}/index.js`)

    {response.data.artist.lyrics.item.map(data =>(
      optionsLyrics.push({ value: data.id, label: data.desc })
    ))}

    setArtist(artist)
    setValue(optionsLyrics)
  }

  async function seachVideo(e){
    debugger
    setTitle(e.label)
    if(e){
      const idChannel = await seachVideoApi.get(`youtube/v3/search`,{
        params:{
          type:'channel',
          q:artist
        }
      })

      const idVideo = await seachVideoApi.get(`youtube/v3/search`,{
        params:{
          type:'video',
          q:e.label,
          channelId:idChannel.data.items[0].id["channelId"]
        }
      })


      const Lyrics = await base.get(`/search.php`,{
        params:{
          art:artist,
          song:e.label
        }
      })
      setUrlVideo(idVideo.data.items[0].id.videoId)
      setLyrics(Lyrics.data)
    }else{
      setLyrics('')
      setUrlVideo('')
    }
  }
  
  async function filterMusic(valueInput,id){
    if(!valueInput){
      setMusicApproval(musicFalse)
      setMusicList(musicTrue)
    }else{
      if(id === 'musicaAprovar'){
        const musicasFiltradas = musicFalse.filter(data => data.artist.toLowerCase().includes(valueInput.toLowerCase()))
        setMusicApproval(musicasFiltradas)
      }else{
        const musicasFiltradas = musicTrue.filter(data => data.artist.toLowerCase().includes(valueInput.toLowerCase()))
        setMusicList(musicasFiltradas)
      }
    }
  }
  

  function removeAcento(text){       
    text = text.toLowerCase();                                                         
    text = text.replace(new RegExp('[ÁÀÂÃ]','gi'), 'a');
    text = text.replace(new RegExp('[ÉÈÊ]','gi'), 'e');
    text = text.replace(new RegExp('[ÍÌÎ]','gi'), 'i');
    text = text.replace(new RegExp('[ÓÒÔÕ]','gi'), 'o');
    text = text.replace(new RegExp('[ÚÙÛ]','gi'), 'u');
    text = text.replace(new RegExp('[Ç]','gi'), 'c');
    text = text.replace(new RegExp('[!@#$%^&*(),.<>;:]','gi'), '');
    text = text.replace(new RegExp('[_]','gi'), ' ');
    return text;                 
  }

  return (
    <ProviderContext.Provider value={{
      loadingMusic,
      seachVideo,
      seachLyrics,
      filterMusic,
      artist,
      value,
      title,
      urlVideo,
      lyrics,
      musicList,
      musicApproval,
      setValue,
      setUrlVideo,
      setLyrics
    }}>
      {children}
    </ProviderContext.Provider>
  )
}

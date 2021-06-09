import React,{useCallback, useContext, useEffect, useState} from 'react'
import { useHistory } from 'react-router';
import {backEnd} from '../service/api';
import { ProviderContext } from './contexts';
export const AuthContext = React.createContext({})


export function AuthProvider({children}){
  const { loadingMusic,setLoading,setLyrics,setValue,setUrlVideo } = useContext(ProviderContext)
  const [currentUser, setCurrentUser] = useState(null);
  const [isLeader,setIsLeader] = useState(null);
  const [token, setToken] = useState('')

  useEffect(()=>{
    const isLogin = localStorage.getItem('@MinLouvor:user');
    if(isLogin){
      setCurrentUser(true)
      if(JSON.parse(isLogin).userFunction === "leader") setIsLeader(true)
      setToken(JSON.parse(isLogin).token);
    }
  },[])
  

  const handleLogin = useCallback(async ({ email, password }) => {
    debugger;
    try{
      const response = await backEnd.get("users", {
        headers:{
          email,
          password
        }
      });
  
      const user = response.data

      if(user.userFunction === "leader") setIsLeader(true)

      localStorage.setItem("@MinLouvor:user", JSON.stringify(user));

      setToken(user.token);
      setCurrentUser(true);
      loadingMusic()
      setLoading(false);
      
    }catch (err){
      setCurrentUser(null);
      setLoading(false);
      alert('Validar Email e Senha!')
    }
  }, []);

  const registerUser = useCallback(async (data) => {
    debugger;
    try{
      setLoading(true);
 
      const  response = await backEnd.post("users", data);
      handleLogin({email: data.email.toLowerCase(),password: data.password})

      setLoading(false);
    }catch (err){
      setLoading(false);
      alert('Usuario nao cadastrado!')
    }
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem("@MinLouvor:user");
    
    setLyrics('')
    setValue('')
    setUrlVideo('')
    setCurrentUser(false);
  }, []);


  return (
    <AuthContext.Provider value={{
      handleLogin,
      currentUser,
      signOut,
      isLeader,
      token,
      registerUser
    }}>
      {children}
    </AuthContext.Provider>
  )
}

import React,{useCallback, useContext, useEffect, useState} from 'react'
import {backEnd} from '../service/api';
import { ProviderContext } from './contexts';
export const AuthContext = React.createContext({})


export function AuthProvider({children}){
  const { loadingMusic } = useContext(ProviderContext)
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

      loadingMusic()
      setToken(user.token);
      setCurrentUser(true);
    }catch (err){
      setCurrentUser(null);
      alert('Validar Email e Senha!')
    }
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem("@MinLouvor:user");

    setCurrentUser(false);
  }, []);


  return (
    <AuthContext.Provider value={{
      handleLogin,
      currentUser,
      signOut,
      isLeader,
      token
    }}>
      {children}
    </AuthContext.Provider>
  )
}

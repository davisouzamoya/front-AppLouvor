import React,{useCallback, useContext, useEffect, useState} from 'react'
import {backEnd} from '../service/api';
import { ProviderContext } from './contexts';
export const AuthContext = React.createContext({})


export function AuthProvider({children}){
  const { loadingMusic } = useContext(ProviderContext)
  const [currentUser, setCurrentUser] = useState(null);
  const [isLeader,setIsLeader] = useState(null);
  const [datasUser, setDatastUser] = useState(() => {
    const user = localStorage.getItem("@MinLouvor:user");

    if (user) {
      return { user: JSON.parse(user) };
    }

    return {};
  });

  useEffect(()=>{
    const isLogin = localStorage.getItem('@MinLouvor:user');
    if(isLogin){
      setCurrentUser(true)
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
      datasUser,
      signOut,
      isLeader
    }}>
      {children}
    </AuthContext.Provider>
  )
}

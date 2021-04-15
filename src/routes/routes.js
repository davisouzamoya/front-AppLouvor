import React from 'react'
import {BrowserRouter,Route} from 'react-router-dom'
import Login from '../pages/Login/index'
import Register from '../pages/Register/index'
import Recovery from '../pages/Recovery/index'
import RegisterMusic from '../pages/RegisterMusic/index';
import List from '../pages/List/index';
import ListaAprovar from '../pages/ListaAprovar/index';
import Profile from '../pages/Profile/index';
import Aprovar from '../pages/Aprovar/index';
import { AuthProvider } from "../Providers/auth";
import RoutePrivate from "../Providers/RoutePrivate";

function Routes(){
  return(
    <AuthProvider>
      <BrowserRouter>
        <Route path="/" exact component={Login}/>
        <Route path="/register" component={Register}/>
        <Route path="/recovery" component={Recovery}/>
        <RoutePrivate path="/registerMusic" component={RegisterMusic}/>
        <RoutePrivate path="/listaAprovar" component={ListaAprovar}/>
        <RoutePrivate path="/aprovar/:artist/:music" component={Aprovar}/>
        <RoutePrivate path="/list" component={List}/>
        <RoutePrivate path="/profile/:artist/:music" component={Profile}/>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default Routes;
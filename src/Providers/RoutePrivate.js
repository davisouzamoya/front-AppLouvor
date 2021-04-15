import React,{useContext} from 'react'
import {Route,Redirect} from 'react-router-dom'
import { AuthContext } from './auth'

function RoutePrivate({ component: RouteComponent, ...rest }){
  const { currentUser } = useContext(AuthContext)
  if(currentUser === true ) return <Route {...rest} render={(routeProps) => (<RouteComponent {...routeProps} />)}/>
  else if(currentUser === false ) return <Redirect to="/"/>
  else return null
  };

export default RoutePrivate;
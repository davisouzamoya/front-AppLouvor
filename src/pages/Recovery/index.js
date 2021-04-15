import React from 'react'
import Input from '../../components/input/index'
import Header from '../../components/header/index'
import Button from '../../components/Button/index'
import { Container } from "./style";
import { Form } from '@unform/web'
import { Link } from 'react-router-dom'
import { FiMail } from 'react-icons/fi';

function Recovery(){
  return(
    <>
      <Header/>
      <Container>
        <header>
          <h1>Esqueceu sua senha?</h1>
          <p>Insira o seu e-mail no campo abaixo 
            para enviarmos uma nova senha e as 
            instrucoes pra trocar a mesma.</p>
        </header>
        <div>
          <Form>
            <Input
              placeholder="E-mail"
              name="email"
              Icon={FiMail}
              style="left"
            />
          </Form>
        </div>
        <footer>
        <Button>
            <Link to={`/`}>
              enviar
            </Link>
          </Button>
        </footer>
      </Container>
    </>
    
  )
}

export default Recovery
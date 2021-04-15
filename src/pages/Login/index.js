import React, { useContext, useRef, useState } from 'react'
import Input from '../../components/input/index'
import Logo from '../../assets/images/logo.png'
import Button from '../../components/Button/index'
import * as Yup from 'yup';
import { Container } from "./style";
import { Form } from '@unform/web'
import { Redirect } from "react-router";
import { Link } from 'react-router-dom'
import { BiUser } from 'react-icons/bi';
import { RiLockPasswordLine } from 'react-icons/ri';
import { AuthContext } from '../../Providers/auth';

function Login(){
  const [email,setEmail] = useState()
  const [password,setPassword] = useState()
  const [isFilled,setIsFilled] = useState(false)
  const [isinputsComplete,setIsInputsComplete] = useState(false)
  const { handleLogin,currentUser } = useContext(AuthContext)
  const formRef = useRef(null)

  async function handleSubmit(data,{ reset }){    
    try{
      formRef.current.setErrors({});

      const schema = Yup.object().shape({
        
        email: Yup
              .string()
              .email('Digite um e-mail válido')
              .required('E-mail obrigatório'),
        password: Yup
              .string()
              .required('Senha obrigatório')
              .min(6, 'A senha deve conter no mínimo 6 caracteres'),
      });

      await schema.validate(data,{
        abortEarly:false,
      })
    
      handleLogin({email: data.email,password: data.password})
    }catch (err){
      const validationErrors = {};

      if (err instanceof Yup.ValidationError) {
        err.inner.forEach(error => {
          validationErrors[error.path] = error.message;
        });
        formRef.current.setErrors(validationErrors);
      }

    }
  }

  if(currentUser){
    return <Redirect to="/registerMusic" />;
  }

  return(
    <>
      <Container>
        <header>
          <img src={Logo} width='150px' height='150px'/>
        </header>
        <div>
          <Form 
            ref={formRef} 
            onSubmit={handleSubmit}
            >
            <Input
              placeholder="E-mail"
              type="email"
              name="email"
              Icon={BiUser}
              style='rigth'
            />
            <Input
              placeholder="Senha"
              type="password"
              name='password'
              Icon={RiLockPasswordLine}
              style='rigth'
            />
            <Button>
              acessar
            </Button>
            {
              isFilled && 
              <span>campos nao preenchidos</span>
            }
          </Form>
        </div>
        <footer>
          <span>
          <Link to={`/recovery`}>
              <div>
                  <span>Esqueceu sua senha?</span>
              </div>
            </Link>
            <a>
              
            </a>
          </span>
          <span>
              Não tem uma conta? 
              <Link to={`/register`}>
              Cadastre-se
            </Link>
          </span>
        </footer>
      </Container>
    </>
    
  )
}

export default Login
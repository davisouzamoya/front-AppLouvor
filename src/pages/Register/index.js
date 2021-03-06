import React, { useContext, useRef } from 'react'
import Input from '../../components/input/index'
import Select from '../../components/Select/index'
import Button from '../../components/Button/index'
import Header from '../../components/header/index'
import Loading from '../../components/Loading';
import { Container } from "./style";
import * as Yup from 'yup';
import { Form } from '@unform/web'
import { Redirect, useHistory } from 'react-router-dom'
import { AiOutlineMail,AiOutlineCalendar } from 'react-icons/ai';
import { RiLockPasswordLine,RiContactsBook2Line } from 'react-icons/ri';
import { HiMusicNote } from 'react-icons/hi';
import { BsListNested } from 'react-icons/bs';
import { IoMdContact } from 'react-icons/io';
import { FiUsers } from 'react-icons/fi';
import { ProviderContext } from '../../Providers/contexts';
import { AuthContext } from '../../Providers/auth';

function Register(){
  const formRef = useRef(null)
  let history = useHistory();
  const { registerUser,currentUser } = useContext(AuthContext)
  const { loading,setLoading } = useContext(ProviderContext)
  const optionsIntrumentos = [
    { value: "guitarra", label: "Guitarra" },
    { value: "violao",   label: "Violão" },
    { value: "teclado",  label: "Teclado" },
    { value: "bateria",  label: "Bateria" },
    { value: "baixo",    label: "Baixo" },
    { value: "vocal",    label: "Vocal" }
  ];

  const optionFuncao = [
    { value: "member",    label: "Membro" },
    { value: "leader",    label: "Líder" }
  ]
  

  async function handleSubmit(data,{ reset }){    
    try{
      setLoading(true);
      formRef.current.setErrors({});

      const schema = Yup.object().shape({
        nome: Yup
              .string()
              .required('O nome e obrigatorio'),
        email: Yup
              .string()
              .email('Digite um e-mail válido')
              .required('E-mail obrigatório'),
        instrumento: Yup
              .string()
              .ensure()
              .required('Selecione um instrumento'),    
        funcao: Yup
              .string()
              .ensure()
              .required('Selecione uma função'),         
        phone: Yup
              .string()
              .required('Informar o numero')
              .min(15, 'Número incorreto!'),
        nascimento: Yup
                .string()
                .required('Informe uma data'),
        password: Yup
              .string()
              .required('Senha obrigatório')
              .min(6, 'A senha deve conter no mínimo 6 caracteres'),
        confirmarSenha: Yup
              .string()
              .oneOf([
                null, Yup.ref('password')
              ], 'As senhas precisam ser iguais')
      });

      await schema.validate(data,{
        abortEarly:false,
      })
      delete data.confirmarSenha
      data.active = true
      data.nascimento = data.nascimento.replaceAll('-','')
      data.phone = data.phone.replaceAll('(','').replaceAll(')','').replaceAll(' ','').replaceAll('-','')
      data.email = data.email.toLowerCase()
      
      registerUser(data)
      setLoading(false);
    }catch (err){
      const validationErrors = {};

      if (err instanceof Yup.ValidationError) {
        err.inner.forEach(error => {
          validationErrors[error.path] = error.message;
        });
        setLoading(false);
        formRef.current.setErrors(validationErrors);
        
      }
    }
  }

  if(currentUser){
    return <Redirect to="/registerMusic" />;
  }


  return(
    <>
    {loading ?
      (
        <Loading/>
      ):(
        <>
      <Header/>
        <Container>
          <Form 
            ref={formRef} 
            onSubmit={handleSubmit}
            >
            <div>
              <header>
                <IoMdContact size={150}/>
              </header>
              <section>
                
                  <Input
                    placeholder="Nome e Sobrenome"
                    name='nome'
                    Icon={BsListNested}
                    style='left'
                  />
                
                  <Input
                    placeholder="Email"
                    name='email'
                    Icon={AiOutlineMail}
                    style='left'
                  />
                
                  <Select
                    Icon={HiMusicNote}
                    options={optionsIntrumentos}
                    name='instrumento'
                    placeholder='Instrumento'
                  />
                
                  <Select
                    Icon={FiUsers}
                    options={optionFuncao}
                    name='funcao' 
                    placeholder='Função'
                  />
                
                  <Input
                    placeholder="Contato"
                    name='phone'
                    Icon={RiContactsBook2Line}
                    style='left'
                  />
                
                  <Input
                    type="date"
                    placeholder="Nascimento"
                    name='nascimento'
                    Icon={AiOutlineCalendar}
                    style='left'
                  />
                
                  <Input
                    type='password'
                    name='password'
                    placeholder="Senha"
                    Icon={RiLockPasswordLine}
                    style='left'
                  />
                
                  <Input
                    type='password'
                    name='confirmarSenha'
                    placeholder="Confirmar Senha"
                    Icon={RiLockPasswordLine}
                    style='left'
                  />
                
              </section>
            </div>
            <footer>
            <Button>
                Cadastrar-se
            </Button>          
          </footer>
          </Form>
        </Container>
        </>
      )}
    </>
  )
}

export default Register
import React, { useContext, useState,useEffect,useRef, useCallback } from 'react';
import { Container,ContainerMessage } from "./style";
import { useField } from '@unform/core'
import { ProviderContext } from '../../Providers/contexts';

function Input({
    placeholder,
    Icon,
    style,
    type,
    name,
    id
  }){
  const { seachLyrics,filterMusic,setLoading } = useContext(ProviderContext)
  const {fieldName,registerField,defaultValue,error} = useField(name)
  const inputRef = useRef(null)
  const [isFocused,setIsFocused] = useState(false)

  useEffect(()=>{
    registerField({
      name:fieldName,
      ref:inputRef.current,
      path:'value'
    })
  },[fieldName,registerField])

  function focuInput(){
    setIsFocused(true)
  }

  function changeInput(){
    if(name === 'seachArtist'){
      setLoading(true)
      seachLyrics(inputRef.current.value)
    }

    if(inputRef.current.value){
      setIsFocused(true)
    }else{
      setIsFocused(false)
    }
  }

  const handleKeyUp = useCallback(e => {
      if(name === 'phone'){
        e.currentTarget.maxLength = 15
        let value = e.currentTarget.value
        value = value.replace(/\D/g, "")
        value = value.replace(/^(\d{2})(\d)/g, "($1) $2")
        value = value.replace(/(\d)(\d{4})$/, "$1-$2")
        e.currentTarget.value = value
      }
  },[])

  function inputFilter(){
      filterMusic(inputRef.current.value,id)
  }

  function keyPress(key){
    debugger
    if(key.key === "Enter" && name === 'seachArtist'){
      changeInput()
    }
  }

  return (
    <Container
      $isFocused={isFocused}
    >
      <section>
        <fieldset>
          <legend
          >
            {isFocused &&
              placeholder
            }
            </legend>
            { style ? (
            <div>
                {Icon && <Icon size={20}/>}
              <input
                type={type}
                placeholder={placeholder}
                onFocus={focuInput}
                onBlur={e => changeInput(inputRef)}
                ref={inputRef}
                onKeyUp={handleKeyUp}
                onChange={inputFilter}
                onKeyPress={e => keyPress(e)}
              />
            </div>
          ):(
            <div>
            <input
              type={type}
              placeholder={placeholder}
              onFocus={focuInput}
              onBlur={e => changeInput(inputRef)}
              ref={inputRef}
              onKeyUp={handleKeyUp}
              onChange={inputFilter}
              onKeyPress={e => keyPress(e)}
            />
            {Icon && <Icon onClick={e => changeInput(inputRef)} size={20}/>}
          </div>
          )}
        </fieldset>
          {error &&
            <span>{error}</span>
          }
      </section>
    </Container>
  );
}



export default Input;

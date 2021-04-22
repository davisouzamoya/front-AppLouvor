import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core'
import { ContainerText } from "./style";

function TextArea({value,name}){
  const {fieldName,registerField,defaultValue,error} = useField(name)
  const inputRef = useRef(null);

  useEffect(()=>{
    registerField({
      name:fieldName,
      ref:inputRef.current,
      path:'value'
    })
  },[fieldName,registerField])

  return (
    <>
      <ContainerText
        ref={inputRef}
      >
        {value}
      </ContainerText>
    </>
  );
}

export default TextArea;

import React from 'react';
import { ContainerText } from "./style";

function TextArea({value}){


  return (
    <>
      <ContainerText>
        {value}
      </ContainerText>
    </>
  );
}

export default TextArea;

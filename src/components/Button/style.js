import styled, { css } from "styled-components";
import { shade } from 'polished'

export const Container = styled.div`
  button{
      margin-top:10px;
      border-radius: 5px;
      background: ${(props) => props.$color === 'red' ? `${shade(0.2, props.$color)}`: 'rgba(54, 88, 122)'};
      border: ${(props) => props.$color === 'red' ? `2px solid ${shade(0.2 , props.$color)}`:'2px solid rgba(54, 88, 122)'}; 
      width: ${(props) => props.$color !== '' ? `${props.$width}vw`:'98vw'};
      padding: 16px;
      outline-style:none;
      text-transform: uppercase;
      color:white;
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      letter-spacing: 1px;
  }

  button:hover{    
    background: ${(props) => props.$color === 'red' ? `${shade(0.1,props.$color)}`: `${shade(0.1,'#2c4661')}`};
    border: ${(props) => props.$color === 'red' ? `2px solid ${shade(0.1,props.$color)}`: `2px solid ${shade(0.1,'#2c4661')}`};
  }    
`




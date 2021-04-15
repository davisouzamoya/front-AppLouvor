import styled, { css } from "styled-components";
import { shade } from 'polished'

export const Container = styled.div`
  button{
      margin-top:10px;
      border-radius: 5px;
      background: ${(props) => props.$color === 'red' ? `${props.$color}`: '#56CCF2'};
      border: ${(props) => props.$color === 'red' ? `2px solid ${props.$color}`:'2px solid #56CCF2'}; 
      width: ${(props) => props.$color !== '' ? `${props.$width}vw`:'98vw'};
      padding: 16px;
      outline-style:none;
      text-transform: uppercase;
  }

  button:hover{    
    background: ${(props) => props.$color === 'red' ? `${shade(0.1,props.$color)}`: `${shade(0.1,'#56CCF2')}`};
    border: ${(props) => props.$color === 'red' ? `2px solid ${shade(0.1,props.$color)}`: `2px solid ${shade(0.1,'#56CCF2')}`};
  }    
`




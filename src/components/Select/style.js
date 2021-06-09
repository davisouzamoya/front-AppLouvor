import styled,{css} from 'styled-components'
import { shade } from 'polished'

export const Container = styled.div`
  
    section{
      border-radius: 10px;
       border: 2px solid transparent;     
      background: rgba(161,161,161,0.1);
      display:flex;
      align-items:center;
      font-family: 'Roboto', sans-serif;
            font-weight: 400;

      div{
        margin-left:0.3rem;
        
        color: white;
      }
    }

    span{
       margin-left:0.4rem;
        margin-top:3px;
        display:flex;
        color:red;
        font-weight:bold;
        margin-bottom:0px;
      }
`




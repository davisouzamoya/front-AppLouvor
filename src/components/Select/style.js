import styled,{css} from 'styled-components'
import { shade } from 'polished'

export const Container = styled.div`
  
    section{
      border-radius: 10px;
       border: 2px solid transparent;     
      background: #56CCF2;
      display:flex;
      align-items:center;

      div{
        margin-left:0.3rem;
        color: #666360;
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




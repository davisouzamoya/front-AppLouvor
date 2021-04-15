import styled,{css} from 'styled-components'
import { shade } from 'polished'

export const Container = styled.div`
  section{
      fieldset{
        border-radius: 10px;
        border: 2px solid transparent;
        
        ${(props) =>
          props.$isFocused  &&
            css`
              border: 2px solid black;
            `}
        background: #56CCF2;
    
        div{
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          display:flex;
          align-items: center;
          color: #666360;

          input{
            background: transparent;
            border: 0;
            outline:none;
            font-size:18px;
            width:100%;
          }

          input::placeholder{
            color: ${(props) => props.$isFocused ? 'transparent':'#666360'};
          }
          svg {
            margin-right: 16px;
            cursor:pointer;
        }
    }
  }
          span{
            margin-left:0.4rem;
            margin-top:3px;
            color:red;
            margin-bottom:0px;
          }
}  
`



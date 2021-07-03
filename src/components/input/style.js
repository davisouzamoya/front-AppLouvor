import styled,{css} from 'styled-components'
import { shade } from 'polished'

export const Container = styled.div`
  section{
    font-family: 'Roboto', sans-serif;
          font-weight: 400;
      fieldset{
        legend{
          color: var(--white);
        }
        border-radius: 10px;
        border: 2px solid transparent;
        
        ${(props) =>
          props.$isFocused  &&
            css`
              border: 2px solid var(--white);
            `}
          background: var(--backTransparent);
    
        div{
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          display:flex;
          align-items: center;
          color: var(--white);
          

          input{
            background: transparent;
            border: 0;
            outline:none;
            font-size:18px;
            width:100%;
            color: var(--white);;
          }

          input::placeholder{
            color: ${(props) => props.$isFocused ? 'transparent':'var(--white)'};
          }
          
          input[type="date"]::-webkit-calendar-picker-indicator {
            filter: invert(0.9);
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



import styled,{css} from 'styled-components'
import { shade } from 'polished'

export const Container = styled.div`
  section{
    font-family: 'Roboto', sans-serif;
          font-weight: 400;
      fieldset{
        legend{
          color: white;
        }
        border-radius: 10px;
        border: 2px solid transparent;
        
        ${(props) =>
          props.$isFocused  &&
            css`
              border: 2px solid white;
            `}
          background: rgba(161,161,161,0.1);
    
        div{
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          display:flex;
          align-items: center;
          color: white;
          

          input{
            background: transparent;
            border: 0;
            outline:none;
            font-size:18px;
            width:100%;
            color: white;
          }

          input::placeholder{
            color: ${(props) => props.$isFocused ? 'transparent':'white'};
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



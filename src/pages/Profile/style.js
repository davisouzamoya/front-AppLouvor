import styled from 'styled-components'


export const Container = styled.div`
    margin-top:100px;
  
    header{
      display:grid;
      justify-content:center;
      text-align:center;
      
      img{  
        margin-left: 15%;
        height:180px;
        border-radius:50%;  
      }

      h1{
        color:var(--white);
        font-family: 'Roboto', sans-serif;
        font-weight: 600;
      }
  }

  section{
    width:98VW;    
  }
`




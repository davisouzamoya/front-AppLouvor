import styled from 'styled-components'


export const Container = styled.div`
    display:grid;
    justify-content:center;
    align-items:center;
    width:100vw;
    height:100vh ;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;


  header{
    display:flex;
    justify-content:center;
    align-items:center;
    margin-top:2.5rem;
  }

  div{
    display:grid;
    margin-top:1rem;
  }
  

  footer{
    display:grid;
    justify-content:center;
    align-items:center;
    color:white;
    margin-top:1px;

    p:hover{
      color:#aeafb0;
    }
  }
`
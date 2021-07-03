import styled from "styled-components";

export const Container = styled.div`
  display:flex;
  width:100vw;
  height:100vh;
  position:fixed;
  margin: 0;
  padding:0;  
  top:0;
  right:0;
  z-index: 2;
  align-items:center;
  justify-content:center;
  
  section{
    display:grid;

    p{
      color: var(--white);
      font-size:bold;
    }
  }
`
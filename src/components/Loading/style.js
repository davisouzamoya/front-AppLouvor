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
  background-color:rgba(255,255,255, 0.5);

  section{
    display:grid;

    p{
      color: #027cbf;
      font-size:bold;
    }
  }
`
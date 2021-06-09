import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    a{
      text-decoration: none;
      color: inherit; 
      display:grid
    }

  body {
    background: rgba(31,78,120,255);
    font-family: 'Roboto', sans-serif;
    margin:0; 
    padding:0;
    margin-left: 7px;
    margin-right: 10px;
  }

  textarea{
    background: #F0F2F5 ;
    }

  body, input, button {
    font: 16px "Poppins", sans-serif;
  }

  button {
    cursor: pointer;
  }
  
  body::-webkit-scrollbar,
  textarea::-webkit-scrollbar{
    width: 0px;              
  }

body::-webkit-scrollbar-track,
textarea::-webkit-scrollbar-track{
  background: transparent;       
}

body::-webkit-scrollbar-thumb,
textarea::-webkit-scrollbar-thumb{
  background-color: transparent;    
  border-radius: 20px;       
  border: 0px;  
}
`;

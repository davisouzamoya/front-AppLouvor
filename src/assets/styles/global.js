import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    a{
      text-decoration: none;
      color: inherit; 
      display:grid
    }

  body {
    background: #F0F2F5 ;
    font-family:'Sen',sans-serif;
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

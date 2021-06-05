import { useState } from "react";
import { css }  from "styled-components";
import FadeLoader from "react-spinners/FadeLoader";
import { Container } from "./style";

function App() {
  let [loading, setLoading] = useState(true);
  
  const override = css`
    display: block;
    margin: 0 auto;
  `;

  return (
    <Container>
      <section>
        <FadeLoader 
          color={'#027cbf'} 
          css={override} 
          size={150} 
        />
        <p>Carregando...</p>
      </section>
    </Container>
  );
}

export default App;
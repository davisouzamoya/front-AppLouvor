import React from 'react';
import Routes from './routes/routes';
import GlobalStyle from './assets/styles/global';
import { Provider  } from './Providers/contexts'
import { AuthProvider  } from './Providers/auth'

function App() {
  return (
      <Provider>
        <GlobalStyle />
        <Routes/>
      </Provider>
  );
}

export default App;

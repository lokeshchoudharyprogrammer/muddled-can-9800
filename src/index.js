import { ColorModeScript } from '@chakra-ui/react';
import React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Context from './Comopenets/Context';
import { BrowserRouter } from 'react-router-dom';
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
// Context
root.render(
  <BrowserRouter>
    <ChakraProvider theme={theme}>
      <ColorModeScript />
      <Context>
        <App />
      </Context>
    </ChakraProvider>
  </BrowserRouter>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

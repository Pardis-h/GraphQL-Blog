import React from 'react';
import ReactDOM from 'react-dom/client';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { ThemeProvider } from '@mui/material';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import theme from './mui/theme';

import './styles/index.css';
import './styles/fonts.css'

const client = new ApolloClient({
  uri : process.env.REACT_APP_GRAPHQL_URI, 
  cache : new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </ApolloProvider>
);

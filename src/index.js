import React from 'react';
import ReactDOM from 'react-dom/client';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { ThemeProvider } from '@mui/material';
import App from './App';
import theme from './mui/theme';

import './styles/index.css';
import './styles/fonts.css'

const client = new ApolloClient({
  uri : "https://api-eu-west-2.hygraph.com/v2/clf9c40yv0pxf01ue7r13azxb/master",
  cache : new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </ApolloProvider>
);

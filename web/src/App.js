import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
// import { ApolloProvider } from '@apollo/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main'



function App() {
  return (
    //  <ApolloProvider client={apolloClient}> 
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Main} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
    //  </ApolloProvider>
  );
}

export default App;

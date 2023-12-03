import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createApolloClient } from "./apollo/createApolloClient";
import Main from './pages/Main.jsx';
import Test from './pages/Test.jsx'
import Drink from './pages/Drink.jsx';
import Category from './pages/Category.jsx';
import Glass from './pages/Glass.jsx';
import Ingredient from './pages/Ingredient.jsx';
import DrinkName from "./pages/DrinkName.jsx";
import IngredientName from './pages/IngredientName.jsx';

const apolloClient = createApolloClient();

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path='/' Component={Main} />
            <Route path='/Test' Component={Test} />
            <Route path='/Drink' Component={Drink} />
            <Route path='/Category' Component={Category} />
            <Route path='/Glass' Component={Glass} />
            <Route path='/Ingredient' Component={Ingredient} />
            <Route path='/Drink/:drinkName' Component={DrinkName} />
            <Route path='/Ingredient/:ingredientName' Component={IngredientName} />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </ApolloProvider>
  );
}

export default App;

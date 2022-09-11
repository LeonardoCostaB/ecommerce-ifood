import { ApolloProvider } from '@apollo/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import { client } from './lib/apollo';
import { Router } from "./Router";
import { store } from './store';

export function App() {
  return (
   <ApolloProvider client={client}>
       <Provider store={store}>
         <BrowserRouter>
            <Router />
         </BrowserRouter>
       </Provider>
   </ApolloProvider>
  )
}

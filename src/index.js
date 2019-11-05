import React from 'react';
import ReactDOM from 'react-dom';
import AppContainerComponent from './app_master_component/container_components/AppContainerComponent';

import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-boost';
import { setContext } from 'apollo-link-context';
import { THEME } from './app_utils/js/constants';
import { typeDefs} from './app_type_definitions/typeDefs';


const apiLink = createHttpLink({
  uri: "http://softuni-swapp-212366186.eu-west-1.elb.amazonaws.com/graphql"
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem(process.env.REACT_APP_API_KEY);
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: authLink.concat(apiLink),
  cache,
  typeDefs
});


client.writeData({
  data: {
    isLoggedIn: !!localStorage.getItem(process.env.REACT_APP_API_KEY),
    theme: !localStorage.getItem(THEME) ? 'light' : localStorage.getItem(THEME)
  },
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <AppContainerComponent />
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root'),
);

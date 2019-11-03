import React from 'react';
import ReactDOM from 'react-dom';
import App from './app_master_component/App';

import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';

import { AUTH_TOKEN, THEME } from './app_utils/constants';
import { typeDefs, resolvers } from './app_resolvers/resolvers';

import 'bootstrap/dist/css/bootstrap.min.css';

const httpLink = createHttpLink({
  uri: 'http://softuni-swapp-212366186.eu-west-1.elb.amazonaws.com/graphql'
})

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem(AUTH_TOKEN);
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const cacheApollo = new InMemoryCache();

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cacheApollo,
  typeDefs,
  resolvers
});

client.writeData({
  data: {
    isLoggedIn: !!localStorage.getItem(AUTH_TOKEN),
    theme: !localStorage.getItem(THEME) ? 'light' : localStorage.getItem(THEME)
  },
});


ReactDOM.render(
    <ApolloProvider client={client}> 
        <App /> 
    </ApolloProvider>, document.getElementById('root')
);


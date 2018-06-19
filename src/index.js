import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import gql from 'graphql-tag';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import getAllPosts from './server/queries/getAllPosts';

const client = new ApolloClient({
  uri: `${process.env.REACT_APP_GRAPHCOOL_SIMPLE_URI}`,
});

client
  .query({ query: getAllPosts })
  .then(results => console.log('testing', results.data));

const ApolloWrappedApp = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

ReactDOM.render(<ApolloWrappedApp />, document.getElementById('root'));
registerServiceWorker();

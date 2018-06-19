import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

const client = new ApolloClient({
  uri: `${process.env.REACT_APP_GRAPHCOOL_SIMPLE_URI}`,
});

const ApolloWrappedApp = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

ReactDOM.render(<ApolloWrappedApp />, document.getElementById('root'));
registerServiceWorker();

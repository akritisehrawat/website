import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled, { injectGlobal } from 'styled-components';

import Practice from './containers/Practice';

injectGlobal`
  html, body {
    width: 100vw;
    height: 100vh;

    border: 0;
    margin: 0;

    background-color: ghostwhite;
  }
`;

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Route path="/practice" component={Practice} />
        </Fragment>
      </Router>
    );
  }
}

export default App;

import React, { Component, Fragment } from 'react';
import logo from './logo.svg';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled, { injectGlobal } from 'styled-components';

injectGlobal`
  html, body {
    width: 100vw;
    height: 100vh;

    border: 0;
    margin: 0;
  }
`;

const a = () => <div>a</div>;
const b = () => <div>b</div>;

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Route path="/a" component={a} />
          <Route path="/b" component={b} />
        </Fragment>
      </Router>
    );
  }
}

export default App;

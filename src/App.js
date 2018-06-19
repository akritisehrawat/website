import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { injectGlobal } from 'styled-components';

import Practice from './containers/Practice';
import TIL from './containers/TIL';
import CreatePost from './containers/CreatePost';

injectGlobal`
  html, body, #root {
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
          <Route path="/til" component={TIL} />
          <Route path="/createpost" component={CreatePost} />
        </Fragment>
      </Router>
    );
  }
}

export default App;

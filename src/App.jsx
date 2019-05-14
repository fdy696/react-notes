import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './views/Login';
import LayoutPage from './views/Layout';

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" component={LayoutPage} />
        </Switch>

        {/* <Switch>
          <Redirect from="/" to="layout" exact />
          <Redirect from="/" to="layout" exact />
          <Route path="/login" component={Login} />
          <Route path="layout" component={LayoutPage} />
          <Route path="/notebooks" component={Notebooks} />
          <Route path="/notes" component={Notes} />
          <Route path="/trash" component={Trash} />
          <Route path="/notfind" component={NotFind} />
          <Redirect to="notfind" />
        </Switch> */}
      </div>
    );
  }
}

export default App;

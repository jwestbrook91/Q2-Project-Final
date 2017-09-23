import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './redux/containers/Home';
import CommentContainer from './redux/containers/CommentContainer';
import UserContainer from './redux/containers/UserContainer';
import AddPostContainer from './redux/containers/AddPostContainer';
import { Provider } from 'react-redux';
import setupStore from './redux/setupStore';

const store = setupStore();

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/posts/:postid" component={CommentContainer} />
              <Route exact path="/author/:authorid" component={UserContainer} />
              <Route exact path="/posts/add_post" component={AddPostContainer} />
            </Switch>
          </Router>
        </Provider>
      </div>
    );
  }
}

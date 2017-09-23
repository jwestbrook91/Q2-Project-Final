import React from 'react';
import { Route } from 'react-router';

import Home from './redux/containers/Home';
import AuthorContainer from './redux/containers/AuthorContainer';
import CommentContainer from './redux/containers/CommentContainer';

const routes = (
  <Route path="/" component={Home}>
    <Route path="/author/:id" component={AuthorContainer} />
    <Route path="posts/:id" component={CommentContainer} />
  </Route>
);

export default routes;

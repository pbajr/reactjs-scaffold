import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Posts from '../pages/Posts';

const Router = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/posts" component={Posts} />
    </div>
  </BrowserRouter>
);

export default Router;

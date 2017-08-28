import React                            from 'react';
import ReactDOM                         from 'react-dom';
import { Provider }                     from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise                     from 'redux-promise';

import reducers                         from './reducers';

import Posts                            from './components/posts';
import PostDetail                       from './components/post-detail';
import NewPost                          from './components/new-post';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/posts/new" component={NewPost}></Route>
          <Route path="/posts/:id" component={PostDetail}></Route>
          <Route path="/"          component={Posts}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));

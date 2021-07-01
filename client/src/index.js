import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createStore } from 'redux';
import App from './components/App';
import BaseLayout from './components/layouts/BaseLayout';
import reducer from './reducers';
import Hooks from './template/hooks';
import ClassComponent from './template/classComponent';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <BaseLayout>
          <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/hooks" component={Hooks} />
            <Route exact path="/class" component={ClassComponent} />
          </Switch>
        </BaseLayout>
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
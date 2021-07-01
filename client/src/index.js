import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createStore } from 'redux';
import App from './components/App';
import BaseLayout from './components/layouts/BaseLayout';
import reducer from './reducers';
import ClassComponent from './template/classComponent';
import Hooks from './template/hooks';
import { loadFromLocalStorage, saveToLocalStorage } from './utils/localStorage';

// If you want to load from Local Storage
const persistedState = loadFromLocalStorage();

const store = createStore(reducer, persistedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// If you want to set up saving to Local Storage after each update to store
store.subscribe(() => {
  saveToLocalStorage(store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <BaseLayout>
          <Switch>
            <Route exact path="/" component={App} />
            <Route path="/hooks" component={Hooks} />
            <Route path="/class" component={ClassComponent} />
          </Switch>
        </BaseLayout>
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
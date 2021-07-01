import { combineReducers } from 'redux';
import reducerTemplate from './reducerTemplate';

const rootReducer = combineReducers({
  // state.template.(...)
  template: reducerTemplate
});

export default rootReducer;
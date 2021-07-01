import { INCREMENT } from '../actions/types';

const initialState = {
  counter: 0
}

const reducerTemplate = (state = initialState, action) => {
  switch(action.type){
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + action.data
      };
    default:
      return state;
  }
}

export default reducerTemplate;

import { combineReducers } from 'redux';

var count = ( state = { total: 0 } , action ) => {
  switch (action.type) {
    case 'INCREASE':
      return  { total : action.total + 1 };
    case 'DECREASE':
      return  { total : action.total - 1 };
    default: 
      return state;
  }
}

var rootReducer = combineReducers({count})

export default rootReducer
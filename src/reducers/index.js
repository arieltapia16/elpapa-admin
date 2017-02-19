import {combineReducers} from 'redux';
import SelectionsReducer from './reducer_selection';
import ActiveSelectionReducer from './reducer_active_selection';

const rootReducer = combineReducers({
  selections: SelectionsReducer,
  activeSelection: ActiveSelectionReducer
});

export default rootReducer;

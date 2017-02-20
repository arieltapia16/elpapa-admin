import {combineReducers} from 'redux';
import SelectionsReducer from './reducer_selection';
import ActiveSelectionReducer from './reducer_active_selection';
import ModalReducer from './reducer_modal';

const rootReducer = combineReducers({
  selections: SelectionsReducer,
  activeSelection: ActiveSelectionReducer,
  modal: ModalReducer
});

export default rootReducer;

import {combineReducers} from 'redux';
import students from './students';
import teachers from './teachers';
import utility from './utility';
import schools from './schools';

const appReducer = combineReducers({
    students,
    teachers,
    schools,
    utility,
})

const rootReducer = (state, action) => {
    // when a logout action is dispatched it will reset redux state
    if (action.type === 'RESET_DATA') {
      state = undefined;
    }
  
    return appReducer(state, action);
};
  
  export default rootReducer;
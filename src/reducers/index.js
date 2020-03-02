import {combineReducers} from 'redux';
import students from './students';
import teachers from './teachers';
import utility from './utility';
import schools from './schools';

export default combineReducers({
    students,
    teachers,
    schools,
    utility,
})
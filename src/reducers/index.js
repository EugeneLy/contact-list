import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import abonents from './abonents';

export default combineReducers({
    abonents,
    form: formReducer
});
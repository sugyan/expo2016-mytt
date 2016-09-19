import { combineReducers } from 'redux';

import {
    UPDATE_TIMETABLE,
    FILTER_TOGGLE_CHECKBOX_DAY
} from './actions';

const timetable = (state = {
    items: []
}, action) => {
    switch(action.type) {
    case UPDATE_TIMETABLE:
        return Object.assign({}, state, {
            items: action.data
        });
    default:
        return state;
    }
};

const filter = combineReducers({
    day: (state = {
        '09-24': true,
        '09-25': true
    }, action) => {
        switch(action.type) {
        case FILTER_TOGGLE_CHECKBOX_DAY:
            return Object.assign({}, state, {
                [action.name]: !state[action.name]
            });
        default:
            return state;
        }
    }
});

export default combineReducers({
    timetable,
    filter
});

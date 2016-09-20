import { combineReducers } from 'redux';

import {
    UPDATE_TIMETABLE,
    FILTER_TOGGLE_CHECKBOX, FILTER_CHANGE_KEYWORD
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
        case FILTER_TOGGLE_CHECKBOX:
            return Object.assign({}, state, {
                [action.name]: !state[action.name]
            });
        default:
            return state;
        }
    },
    stage: (state = {
        'ス': true,
        'ブ': true,
        'オ': true,
        'グ': true,
        'キ': true,
        'ピ': true,
        'ト': true,
        '特': false
    }, action) => {
        switch(action.type) {
        case FILTER_TOGGLE_CHECKBOX:
            return Object.assign({}, state, {
                [action.name]: !state[action.name]
            });
        default:
            return state;
        }
    },
    keyword: (state = '', action) => {
        switch(action.type) {
        case FILTER_CHANGE_KEYWORD:
            return action.word;
        default:
            return state;
        }
    }
});

export default combineReducers({
    timetable,
    filter
});

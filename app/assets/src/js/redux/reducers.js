import { combineReducers } from 'redux';

import {
    UPDATE_TIMETABLE, SELECT_ITEM, GENERATE_RESULT,
    FILTER_TOGGLE_CHECKBOX, FILTER_CHANGE_KEYWORD
} from './actions';

const timetable = combineReducers({
    items: (state = [], action) => {
        switch (action.type) {
        case UPDATE_TIMETABLE:
            return action.data;
        default:
            return state;
        }
    },
    selected: (state = {}, action) => {
        const newSelected = Object.assign({}, state);
        switch (action.type) {
        case SELECT_ITEM:
            if (action.checked) {
                newSelected[action.id] = true;
            } else {
                delete newSelected[action.id];
            }
            return newSelected;
        default:
            return state;
        }
    },
    result: (state = null, action) => {
        switch (action.type) {
        case GENERATE_RESULT:
            return action.src;
        default:
            return state;
        }
    }
});

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

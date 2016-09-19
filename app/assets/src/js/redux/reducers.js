import { UPDATE_TIMETABLE } from './actions';

export const expo2016 = (state = {
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

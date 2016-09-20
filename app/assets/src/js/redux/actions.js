export const UPDATE_TIMETABLE = 'UPDATE_TIMETABLE';
export const SELECT_ITEM      = 'SELECT_ITEM';
export const FILTER_TOGGLE_CHECKBOX = 'FILTER_TOGGLE_CHECKBOX';
export const FILTER_CHANGE_KEYWORD  = 'FILTER_CHANGE_KEYWORD';

export const updateTimeTable = (data) => {
    return { type: UPDATE_TIMETABLE, data };
};

export const selectItem = (id, checked) => {
    return { type: SELECT_ITEM, id, checked };
};

export const filterToggleCheckbox = (name) => {
    return { type: FILTER_TOGGLE_CHECKBOX, name };
};

export const filterChangeKeyword = (word) => {
    return { type: FILTER_CHANGE_KEYWORD, word };
};

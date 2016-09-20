export const UPDATE_TIMETABLE = 'UPDATE_TIMETABLE';
export const FILTER_TOGGLE_CHECKBOX = 'FILTER_TOGGLE_CHECKBOX';

export const updateTimeTable = (data) => {
    return { type: UPDATE_TIMETABLE, data };
};

export const filterToggleCheckbox = (name) => {
    return { type: FILTER_TOGGLE_CHECKBOX, name };
};

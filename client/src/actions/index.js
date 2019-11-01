import {SET_ACTIVE_MENU_ID} from '../constants/action-types';
import {EDIT_TITLE} from '../constants/action-types';
import {EDIT_TEXT} from '../constants/action-types';

export const setActiveMenuId = menu_id => ({
    type: SET_ACTIVE_MENU_ID,
    payload: menu_id
});

export const editTitle = (activeMenuId, showComponent) => ({
    type: EDIT_TITLE,
    payload: {
        activeMenuId,
        showComponent
    }
});

export const submitTitle = (activeMenuId, title) => ({
    type: EDIT_TITLE,
    payload: {
        activeMenuId,
        title
    }
});


export const editText = (activeMenuId, showComponent) => ({
    type: EDIT_TEXT,
    payload: {
        activeMenuId,
        showComponent
    }
})

export const submitText = (activeMenuId, value) => ({
    type: EDIT_TEXT,
    payload: {
        activeMenuId,
        value,
    }
})
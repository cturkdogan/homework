import { SET_ACTIVE_MENU_ID, EDIT_TITLE, EDIT_TEXT, FETCH_MENUS_SUCCESS, } from '../constants/action-types';


export function fetchMenusSuccess(menus) {
    return {
        type: FETCH_MENUS_SUCCESS,
        payload: {menus}
    }
}

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
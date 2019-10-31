import {EDIT_TITLE, EDIT_TEXT, SUBMIT_TITLE, SUBMIT_TEXT} from '../constants/action-types';

export default function typing(state='', action){
    switch(action.type){
    case EDIT_TITLE:
        return state=action.payload;
    case SUBMIT_TITLE:
        return state=action.payload.title;    
    case EDIT_TEXT:
        return state=action.payload;
    case SUBMIT_TEXT:
        return state=action.payload.value;
    default:
        return state;
    }    
}
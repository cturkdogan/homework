import {SET_ACTIVE_MENU_ID} from '../constants/action-types';

export default function activeUserId(state=null, action){
    switch(action.type){
        case SET_ACTIVE_MENU_ID:
            return action.payload;
        default:
            return state;
    }
    
}
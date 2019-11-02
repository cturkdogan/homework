import {FETCH_MENUS_SUCCESS} from '../constants/action-types';

export default function menusReducer(state = [], action) {
    switch(action.type) {

        case FETCH_MENUS_SUCCESS:            
            return action.payload;
        default: 
            return state;
    }
}

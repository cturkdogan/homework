import {combineReducers} from 'redux';
import menu from './menu';
import menusReducer from './menusReducer';
import items from './items';
import activeMenuId from './activeMenuId';
import editing from './editing';

export default combineReducers({
    menusReducer,
    menu,
    items,
    activeMenuId,
    editing
});
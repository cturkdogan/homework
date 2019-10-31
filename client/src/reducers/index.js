import {combineReducers} from 'redux';
import menu from './menu';
import items from './items';
import activeMenuId from './activeMenuId';
import editing from './editing';

export default combineReducers({
    menu,
    items,
    activeMenuId,
    editing
});
import {generateMenu} from '../components/static-data';

export default function menu(state = generateMenu(), action) {
    return state;
}
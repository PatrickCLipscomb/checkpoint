import { combineReducers } from 'redux';
import { items, itemsHasErrored, itemsIsLoading, data } from './items';

export default combineReducers({
    data,
    items,
    itemsHasErrored,
    itemsIsLoading
});

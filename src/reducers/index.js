import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { items, itemsHasErrored, itemsIsLoading, data } from './items';

export default combineReducers({
    routing: routerReducer,
    data,
    items,
    itemsHasErrored,
    itemsIsLoading,
});

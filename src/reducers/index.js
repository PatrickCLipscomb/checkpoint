import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { items, itemsHasErrored, itemsIsLoading, data, providers } from './items';

export default combineReducers({
    routing: routerReducer,
    data,
    providers,
    items,
    itemsHasErrored,
    itemsIsLoading,
});

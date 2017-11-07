import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { items, itemsHasErrored, itemsIsLoading, data, providers, customBrokerProviders, airProviders, oceanProviders, providerNumber } from './items';

export default combineReducers({
    routing: routerReducer,
    data,
    providers,
    customBrokerProviders,
    airProviders,
    oceanProviders,
    items,
    itemsHasErrored,
    itemsIsLoading,
    providerNumber
});

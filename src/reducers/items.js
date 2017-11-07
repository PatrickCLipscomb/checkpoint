export function itemsHasErrored(state = false, action) {
    switch (action.type) {
        case 'ITEMS_HAS_ERRORED':
            return action.hasErrored;

        default:
            return state;
    }
}

export function itemsIsLoading(state = false, action) {
    switch (action.type) {
        case 'ITEMS_IS_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export function items(state = [], action) {
    switch (action.type) {
        case 'ITEMS_FETCH_DATA_SUCCESS':
            return action.items;

        case 'ITEMS_REMOVE_ITEM':
          return [
            ...state.slice(0, action.index),
            ...state.slice(action.index + 1)
          ]

        default:
            return state;
    }
}

export function data(state = {}, action) {
  switch (action.type) {
    case 'DATA_FETCH_DATA_SUCCESS':
      return action.data;

    default:
      return state;
  }
}

export function providers(state = [], action) {
  switch (action.type) {
    case 'DATA_FETCH_DATA_SUCCESS_FILTERED':
      return action.providers;

    default:
      return state;
  }
}

export function oceanProviders(state = [], action) {
  switch (action.type) {
    case 'SET_OCEAN_PROVIDERS':
      return action.ocean;

    default:
      return state;
  }
}

export function airProviders(state = [], action) {
  switch (action.type) {
    case 'SET_AIR_PROVIDERS':
      return action.air;

    default:
      return state;
  }
}

export function customBrokerProviders(state = [], action) {
  switch (action.type) {
    case 'SET_CUSTOM_BROKER_PROVIDERS':
      return action.customBroker;

    default:
      return state;
  }
}

export function providerNumber(state = 0, action) {
  switch (action.type) {
    case 'SET_PROVIDER_NUMBER':
      return action.providerNumber;

    default:
      return state;
  }
}

export function itemsHasErrored(bool) {
    return {
        type: 'ITEMS_HAS_ERRORED',
        hasErrored: bool
    };
}

export function itemsIsLoading(bool) {
    return {
        type: 'ITEMS_IS_LOADING',
        isLoading: bool
    };
}

export function itemsRemoveItem(index) {
  return {
    type: 'ITEMS_REMOVE_ITEM',
    index
  };
}

export function itemsFetchDataSuccess(items) {
    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        items
    };
}

export function itemsFetchData(url) {
    return (dispatch) => {
        dispatch(itemsIsLoading(true));

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(itemsIsLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((items) => dispatch(itemsFetchDataSuccess(items)))
            .catch(() => dispatch(itemsHasErrored(true)));
    };
}


function dataFetchDataSuccess(data) {
  return {
    type: 'DATA_FETCH_DATA_SUCCESS',
    data
  };
}

function dataFetchDataSuccessFiltered(data) {
  const providers = standardFilter(data);
  return {
    type: 'DATA_FETCH_DATA_SUCCESS_FILTERED',
    providers
  }
}

function standardFilter(data) {
  var providers = data.providers.filter((provider) => (
    provider.yearStarted > 2010
  ));
  providers.sort((a, b) => {
    var textA = a.companyName.toUpperCase();
    var textB = b.companyName.toUpperCase();
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
  });
  // providers = providers.slice(0, 21);
  return providers
}

function filterByProvider(data, type) {
  var providersByType = {
    ocean: [],
    air: [],
    customBroker: []
  }
  for (var i = 0; i < providers.length; i++) {
    let providerType = providers[i].type;
    let providerCopy = providers[i];
    providersByType[providerType].push(providerCopy);
  }
}

function providerTypeDispatcher(data) {
  var getProviders = standardFilter(data);
  // var ocean = [];
  var air = [];
  // var customBroker = [];
  for (var i = 0; i < getProviders.length; i++) {
    air.push(getProviders[i]);
    // if (getProviders[i].type === 'ocean') {
    //   ocean.push(getProviders[i]);
    // } else if (getProviders[i].type === 'air') {
    //   air.push(getProviders[i]);
    // } else if (getProviders[i].type === 'customBroker') {
    //   customBroker.push(getProviders[i]);
    // }
  }
  dispatch(setAirProviders(air));
  // dispatch(setOceanProviders(ocean));
  // dispatch(setCustomBrokerProviders(customBroker));
}

function setAirProviders(airy) {
  const air = standardFilter(airy)
  return {
    type: 'SET_AIR_PROVIDERS',
    air
  }
}

function setOceanProviders(ocean) {
  return {
    type: 'SET_OCEAN_PROVIDERS',
    action: ocean
  }
}

function setCustomBrokerProviders(customBroker) {
  return {
    type: 'SET_CUSTOM_BROKER_PROVIDERS',
    action: customBroker
  }
}

export const dataIsLoading = (bool) => ({ type: 'DATA_IS_LOADING', isLoading: bool});
export const dataHasErrored = (bool) => ({ type: 'DATA_HAS_ERRORED', hasErrored: bool});

export function dataFetchData(url) {
  return (dispatch) => {
    dispatch(dataIsLoading(true))
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          // dispatch(dataHasErrored(true));
          throw Error(response.statusText);
        }
        dispatch(dataIsLoading(false))
        return response;
      })
      .then((response) => response.json())
      .then((data) => {
        dispatch(dataFetchDataSuccess(data));
        dispatch(dataFetchDataSuccessFiltered(data));
      })
      .catch(() => dispatch(dataHasErrored(true)));
  }
}

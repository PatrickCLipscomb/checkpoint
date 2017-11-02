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
  providers = providers.slice(0, 21);
  return providers
}

export function dataFetchData(url) {
  return (dispatch) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
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

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
// dont need .js extension to include files
// import { itemsFetchData } from '../api/providerApi';
import { itemsFetchData, itemsRemoveItem, dataFetchData } from '../actions/items';

class ItemList extends Component {
    componentDidMount() {
        this.props.fetchData('http://599167402df2f40011e4929a.mockapi.io/items');
        this.props.fetchJSONData('https://raw.githubusercontent.com/Shipstr/react-coding-challenge/master/feed/sample.json');
    }

    render() {
        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the items</p>;
        }

        if (this.props.isLoading) {
            return (
              <div>
                <p>Loading…</p>
              </div>
            );
        }

        return (
            <div>
              <ul>
                  {this.props.items.map((item, index) => (
                      <li key={item.id}>
                          {item.label}
                          <button onClick={() => this.props.removeItem(index)}>Remove</button>
                      </li>
                  ))}
              </ul>
              <button onClick={() => this.props.fetchData('http://599167402df2f40011e4929a.mockapi.io/items')}>Repopulate</button>
                <button onClick={() => this.props.fetchJSONData('https://raw.githubusercontent.com/Shipstr/react-coding-challenge/master/feed/sample.json')}>Get Challenge Data</button>
                <p>{this.props.data.length} bacon</p>
                  <ul>
                    {this.props.data.providers.map((dataPoint, index) => (
                      <li key={index + 1000}>
                        {dataPoint.companyName}
                      </li>
                    ))}

                  </ul>
            </div>
        );
    }
}

ItemList.propTypes = {
    fetchData: PropTypes.func.isRequired,
    removeItem: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
    data: PropTypes.object.isRequired,
    fetchJSONData: PropTypes.func.isRequired,
    hasErrored: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
    return {
        items: state.items,
        data: state.data,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(itemsFetchData(url)),
        removeItem: (index) => dispatch(itemsRemoveItem(index)),
        fetchJSONData: (url) => dispatch(dataFetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);

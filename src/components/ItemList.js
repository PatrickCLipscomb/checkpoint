import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux'
import { itemsFetchData, itemsRemoveItem, dataFetchData } from '../actions/items';

class ItemList extends Component {
    componentDidMount() {
        this.props.fetchData('http://599167402df2f40011e4929a.mockapi.io/items');

    }


    render() {
        let dataCheck = null;
        if (this.props.data.providers) {
          dataCheck = this.props.data.providers.map((dataPoint, index) => (
            <li key={index + 1000}>
              {dataPoint.companyName}
            </li>
          ))
        } else {
          dataCheck = <li>No Data yet</li>
        }


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
              <button onClick={() => this.props.aboutPage()}>Go To About Page</button>
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
                  <div className="data-row">
                    <ul>
                      {this.props.providers.map((provider, index) => (
                        <li key={index + 2056}>
                          {index} - {provider.yearStarted} - {provider.companyName} - {provider.type}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <ul>
                    {dataCheck}
                  </ul>



            </div>
        );
    }
}

ItemList.propTypes = {
    aboutPage: PropTypes.func.isRequired,
    fetchData: PropTypes.func.isRequired,
    removeItem: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
    data: PropTypes.object.isRequired,
    providers: PropTypes.array.isRequired,
    fetchJSONData: PropTypes.func.isRequired,
    hasErrored: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
    return {
        items: state.items,
        data: state.data,
        providers: state.providers,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(itemsFetchData(url)),
        removeItem: (index) => dispatch(itemsRemoveItem(index)),
        fetchJSONData: (url) => dispatch(dataFetchData(url)),
        aboutPage: () => push('/about')
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);

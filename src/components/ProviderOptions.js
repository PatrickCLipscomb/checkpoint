import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux'
import { Link } from 'react-router-dom'
import { itemsFetchData, itemsRemoveItem, dataFetchData } from '../actions/items';
import ProviderOption from './ProviderOption'

import air from '../images/air.svg'
import ocean from '../images/ocean.svg'
import customs from '../images/customs.svg'

class ProviderOptions extends Component {

  componentDidMount() {
    this.props.fetchJSONData('https://raw.githubusercontent.com/Shipstr/react-coding-challenge/master/feed/sample.json')
  }

  render() {
    return (
      <div className="provider-option-container">
        <Link to="/air"><ProviderOption icon={air} optionTitle={'Air'} /></Link>
        <Link to="/air"><ProviderOption icon={ocean} optionTitle={'Ocean'} /></Link>
        <Link to="/air"><ProviderOption icon={customs} optionTitle={'Customs Brokers'} /></Link>
      </div>

    )
  }
}

ProviderOptions.PropTypes = {
  fetchJSONData: PropTypes.func.isRequired,
  providers: PropTypes.array.isRequired
}

const mapStateToProps = (state) => {
  return {
    providers: state.providers
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchJSONData: (url) => dispatch(dataFetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProviderOptions);

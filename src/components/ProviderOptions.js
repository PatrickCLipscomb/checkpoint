import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux'
import { Link } from 'react-router-dom'
import { itemsFetchData, itemsRemoveItem, dataFetchData } from '../actions/items';
import ProviderOption from './ProviderOption'
import TitleBar from './TitleBar'
import MessageScreen from './MessageScreen'

import air from '../images/air.svg'
import ocean from '../images/ocean.svg'
import customs from '../images/customs.svg'
import forbidden from '../images/forbidden.svg'
import loader from '../images/loader.svg'

class ProviderOptions extends Component {

  componentDidMount() {
    this.props.fetchJSONData('https://raw.githubusercontent.com/Shipstr/react-coding-challenge/master/feed/sample.json')

  }

  errorMessageControl() {
    if (this.props.dataHasErrored) {
      return <MessageScreen message="Opps, something went wrong..." messageIcon={forbidden} />
    } else if (this.props.dataIsLoading) {
      return <MessageScreen message="Loading..." messageIcon={loader} />
    } else {
      return(
        <div className="provider-option-container">
          <Link to='/air' ><ProviderOption icon={air} optionTitle={'Air'} /></Link>
          <Link to='/ocean' ><ProviderOption icon={ocean} optionTitle={'Ocean'} /></Link>
          <Link to='/customBroker' ><ProviderOption icon={customs} optionTitle={'Customs Brokers'} /></Link>
        </div>
      )
    }
    }


  render() {
    return (
      <div>
        <TitleBar title={'Popular Services'} />
        {this.errorMessageControl()}

      </div>

    )
  }
}

ProviderOptions.PropTypes = {
  fetchJSONData: PropTypes.func.isRequired,
  providers: PropTypes.array.isRequired,
  dataIsLoading: PropTypes.bool.isRequired,
  dataHasErrored: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => {
  return {
    providers: state.providers,
    dataIsLoading: state.dataIsLoading,
    dataHasErrored: state.dataHasErrored
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchJSONData: (url) => dispatch(dataFetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProviderOptions);

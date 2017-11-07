import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { setProviderNumber } from '../actions/items';

class AirProviders extends Component {

  filterByProviderType(type) {
    var providers = this.props.providers.filter((provider) => (
      provider.type === type
    ));
    providers = providers.slice(0, 21);
    this.props.providerNumberSetter(providers.length)
    return providers
  }

  render() {
    return(
      <div className="provider-list-container">
      <h2>{this.props.providerNumber}</h2>
      <ul>
      {this.filterByProviderType('air').map((provider, index) => (
        <li>{provider.companyName} - {provider.type} - {index}</li>
      ))}
      </ul>
      </div>
    )
  }
}

AirProviders.PropTypes = {
  providers: PropTypes.array.isRequired,
  providerNumber: PropTypes.num.isRequired,
  providerNumberSetter: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    providers: state.providers,
    providerNumber: state.providerNumber
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    providerNumberSetter: (num) => dispatch(setProviderNumber(num))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AirProviders)

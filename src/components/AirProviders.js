import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { setProviderNumber } from '../actions/items';

class AirProviders extends Component {

  filterByProviderType() {
    const type = this.props.location.pathname.slice(1);
    var formattedProviders = [];
    var providers = this.props.providers.filter((provider) => (
      provider.type === type
    ));
    providers = providers.slice(0, 21);
    let safety = providers;
    for (var i = 0; i < (providers.length / 4); i++) {
      var holder = [];
      for (var k = 0; k < 4; k++) {
        holder.push(providers[k]);
      }
      formattedProviders.push(holder);
    }
    return safety;
  }

  render() {
    return(
      <div className="provider-list-container">
      <h2>{this.filterByProviderType().length} Air Providers</h2>
      <div className="provider-grid">
      {this.filterByProviderType().map((provider, index) => (
        <div className={"provider-item " + (index % 4 === 0 ? 'first ' : '') + ((index + 1) % 4 === 0 ? 'last ' : '') + (index > 7 ? 'hidden' : '')}><div className="provider-item-inner"><img src={provider.images['Company Logo'].url}></img> <p>{provider.companyName}</p></div></div>
      ))}
      </div>
      </div>
    )
  }
}

AirProviders.PropTypes = {
  providers: PropTypes.array.isRequired,
  location: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
  return {
    providers: state.providers
  }
}



export default connect(mapStateToProps)(AirProviders)

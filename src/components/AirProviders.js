import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { setProviderNumber } from '../actions/items';
import TitleBar from './TitleBar'

class AirProviders extends Component {
  constructor(props) {
    super()
    this.state = {
      providerNumber: 0,
      initialShown: 0,
      providerType: '',
      initialProviders: [],
      additionalProviders: [],
      showAdditionalProviders: false
    }
  }

  componentDidMount() {
    this.initialProviderDisplay();
  }

  filterByProviderType() {
    const type = this.props.location.pathname.slice(1);
    var formattedProviders = [];
    var providers = this.props.providers.filter((provider) => (
      provider.type === type
    ));
    providers = providers.slice(0, 21);
    return providers;
  }

  formatProviderJSX(provider, index) {
    return <div key={index + 2999} className={"provider-item " + (index % 4 === 0 ? 'first ' : '') + ((index + 1) % 4 === 0 ? 'last ' : '')}><div className="provider-item-inner"><img src={provider.images['Company Logo'].url}></img> <p>{provider.companyName}</p></div></div>;
  }

  initialProviderDisplay = () => {
    var additionalProviders = [];
    var initialProviders = [];
    var providerNumber = 0;
    var providerType = null
    var initialShown = 0;
    this.filterByProviderType().map((provider, index) => {
      if (index < 8) {
        initialProviders.push(this.formatProviderJSX(provider, index));
      } else {
        additionalProviders.push(this.formatProviderJSX(provider, index));
      }
      providerNumber++;
      if (!providerType) { providerType = provider.type.charAt(0).toUpperCase() + provider.type.slice(1); }
    })
    initialShown = initialProviders.length;
    // this.stateSetter([providerNumber, providerType, additionalProviders, initialProviders, initialShown]);
    this.setState({
      providerNumber: providerNumber,
      providerType: providerType,
      additionalProviders: additionalProviders,
      initialProviders: initialProviders,
      initialShown: initialProviders.length
    });
  }

  // stateSetter(state) {
  //   this.setState({...state});
  // }

  showMoreProviders = () => this.setState({
    showAdditionalProviders: true,
    initialShown: this.state.providerNumber
  });

  render() {
    return(
      <div>
        <TitleBar title={this.state.providerType + ' Providers'} />
        <div className="provider-list-container">
          <h2>{this.state.providerNumber} {this.state.providerType} Providers</h2>
          <div className="provider-grid">
            {this.state.initialProviders}
            {this.state.showAdditionalProviders ? this.state.additionalProviders : ''}
          </div>
          <div className="provider-grid-control">
            <button onClick={this.showMoreProviders}>Show More</button>
            <p>Showing {this.state.initialShown} of {this.state.providerNumber}</p>
          </div>
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

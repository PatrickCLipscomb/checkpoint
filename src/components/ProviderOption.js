import React from 'react'

class ProviderOption extends React.Component {
  render() {
    return(
      <div className="provider-option">
        <img src={this.props.icon}></img>
        <h3>{this.props.optionTitle}</h3>
      </div>
    )
  }
}

export default ProviderOption

import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import ItemList from './ItemList'
import about from './about'
import HomePage from './HomePage'
import Footer from './Footer'
import AirProviders from './AirProviders'
import ProviderOptions from './ProviderOptions'
import '../styles/app.css'

class App extends Component {
  render() {
    return (
      <div className="app-body">
        <div className="nav-bar">
          <div className="header-content">
            <Link to="/"><h1>DEMO</h1></Link>
            <a href="#">Log In</a>
          </div>
        </div>
        <main>
          <Route exact path="/air" component={AirProviders} />
          <Route exact path="/ocean" component={AirProviders} />
          <Route exact path="/customBroker" component={AirProviders} />
          <Route exact path="/" component={ProviderOptions} />
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/items" component={ItemList} />
          <Route exact path="/about" component={about} />
        </main>
        <Footer />
      </div>
    )
  }
}

export default App

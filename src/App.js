import {Component} from 'react'
import ConfigurationContext from './context/ConfigurationContext'
import ConfigurationController from './components/ConfigurationController'

import Layout from './components/Layout'

import './App.css'

class App extends Component {
  state = {showLeftNavbar: true, showContent: true, showRightNavbar: true}

  onToggleShowLeftNavbar = () => {
    this.setState(prevState => ({showLeftNavbar: !prevState.showLeftNavbar}))
  }

  onToggleShowContent = () => {
    this.setState(prevState => ({
      showContent: !prevState.showContent,
    }))
  }

  onToggleShowRightNavbar = () => {
    this.setState(prevState => ({showRightNavbar: !prevState.showRightNavbar}))
  }

  render() {
    const {showLeftNavbar, showContent, showRightNavbar} = this.state
    return (
      <ConfigurationContext.Provider
        value={{
          showLeftNavbar,
          showContent,
          showRightNavbar,
          onToggleShowLeftNavbar: this.onToggleShowLeftNavbar,
          onToggleShowContent: this.onToggleShowContent,
          onToggleShowRightNavbar: this.onToggleShowRightNavbar,
        }}
      >
        <div className="app-bg-container">
          <div className="app-container">
            <ConfigurationController />
            <Layout />
          </div>
        </div>
      </ConfigurationContext.Provider>
    )
  }
}

export default App

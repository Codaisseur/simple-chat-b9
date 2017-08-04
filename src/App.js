import React, { Component } from 'react';
import PropTypes from 'prop-types'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import muiTheme from './config/theme'
import NameDialog from './components/NameDialog'
import Chat from './containers/Chat'
import MessageForm from './components/MessageForm'
import './App.css';

class App extends Component {
  static childContextTypes = {
    muiTheme: PropTypes.object.isRequired,
  }

  getChildContext() {
    return { muiTheme }
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="App">
          <h1>Simple Chat</h1>
          <NameDialog />
          <Chat />
          <MessageForm />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App;

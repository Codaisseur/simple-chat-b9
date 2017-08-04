// src/components/MessageForm.js

import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import { sendMessage } from '../actions/messages'
import './MessageForm.css'

class MessageForm extends PureComponent {
  state = {
    message: ''
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const message = this.refs.messageInput.getValue()
    this.props.dispatch(sendMessage(message))
    this.setState({
      message: '',
    })
  }

  handleChange = (event) => {
    this.setState({
      message: event.target.value,
    })
  }

  render() {
    return (
      <div className="MessageForm">
        <form onSubmit={this.handleSubmit}>
          <TextField
            ref="messageInput"
            name="message"
            multiLine={true}
            value={this.state.message}
            onChange={this.handleChange}
            style={{ width: '80%', marginRight: '2rem' }}
            fullWidth={true} />

          <RaisedButton
            type="submit"
            primary={true}
            label="Send" />
        </form>
      </div>
    )
  }
}

export default connect()(MessageForm)

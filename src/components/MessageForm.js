// src/components/MessageForm.js

import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import './MessageForm.css'

class MessageForm extends PureComponent {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    const message = this.refs.messageInput.getValue()

  }

  render() {
    return (
      <div className="MessageForm">
        <form onSubmit={this.handleSubmit}>
          <TextField
            ref="messageInput"
            name="message"
            multiLine={true}
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

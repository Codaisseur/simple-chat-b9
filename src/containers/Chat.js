// src/containers/Chat.js

import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Message from '../components/Message'
import './Chat.css'

class Chat extends PureComponent {
  renderMessage(message, index) {
    return (
      <Message key={index} />
    )
  }

  componentDidUpdate() {
    this.scrollToEnd()
  }

  componentDidMount() {
    this.scrollToEnd()
  }

  scrollToEnd() {
    this.refs.chat.scrollTop = this.refs.endOfList.offsetTop;
  }

  render() {
    return (
      <div ref="chat" className="Chat">
        <ul className="messages">
          {this.props.messages.map(this.renderMessage)}
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <li ref="endOfList">&nbsp;</li>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({ messages }) => ({ messages })

export default connect(mapStateToProps)(Chat)

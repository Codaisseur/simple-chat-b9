// src/containers/Chat.js

import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Message from '../components/Message'
import { fetchMessages, subscribe } from '../actions/messages'
import './Chat.css'

class Chat extends PureComponent {
  renderMessage(message, index) {
    return (
      <Message
        { ...message }
        key={index} />
    )
  }

  componentWillMount() {
    this.props.dispatch(fetchMessages())
    this.props.dispatch(subscribe())
  }

  componentDidMount() {
    this.scrollToEnd()
  }

  componentDidUpdate() {
    this.scrollToEnd()
  }

  scrollToEnd() {
    this.refs.chat.scrollTop = this.refs.endOfList.offsetTop;
  }

  orderedMessages = () => (
    this.props.messages
      .sort((a,b) => (new Date(a.createdAt) - new Date(b.createdAt)))
  )

  render() {
    return (
      <div ref="chat" className="Chat">
        <ul className="messages">
          {this.orderedMessages().map(this.renderMessage)}
          <li ref="endOfList">&nbsp;</li>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({ messages }) => ({ messages })

export default connect(mapStateToProps)(Chat)

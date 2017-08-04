import React from 'react'
import ReactMarkdown from 'react-markdown'
import MessageHeader from './MessageHeader'
import './Message.css'

export default (props) => (
  <li className="Message">
    <MessageHeader
      timestamp={props.createdAt}
      author={props.name} />
    <ReactMarkdown
      className="text"
      source={props.text} />
  </li>
)

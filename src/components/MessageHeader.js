import React from 'react'
import TimeAgo from 'react-timeago'
import './MessageHeader.css'

export default (props) => (
  <div className="MessageHeader">
    <div className="author">{props.author}</div>
    <div className="timestamp">
      <TimeAgo date={props.timestamp} />
    </div>
  </div>
)

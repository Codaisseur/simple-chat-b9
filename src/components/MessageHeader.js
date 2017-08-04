import React from 'react'
import moment from 'moment'
import './MessageHeader.css'

export default (props) => (
  <div className="MessageHeader">
    <div className="author">AUTHOR NAME</div>
    <div className="timestamp">
      {moment('2017-07-24T08:05:58.412+02:00').fromNow()}
    </div>
  </div>
)

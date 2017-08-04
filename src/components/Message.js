import React from 'react'
import ReactMarkdown from 'react-markdown'
import MessageHeader from './MessageHeader'
import './Message.css'

export default (props) => (
  <li className="Message">
    <MessageHeader />
    <ReactMarkdown className="text" source="
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur.

      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
      deserunt mollit anim id est laborum." />
  </li>
)

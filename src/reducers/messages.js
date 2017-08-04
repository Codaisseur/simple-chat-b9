// src/reducers/messages.js

import {
  MESSAGES_FETCHED,
  MESSAGE_CREATED,
  MESSAGE_UPDATED,
  MESSAGE_REMOVED
} from '../actions/messages'

export default (state = [], { type, payload }) => {
  switch (type) {
    case MESSAGES_FETCHED :
      const newIds = payload.map((message) => (message._id))
      return state.filter((old) => (!newIds.includes(old._id)))
        .concat([ ...payload ])

    case MESSAGE_CREATED :
      return state.concat({ ...payload })

    case MESSAGE_UPDATED :
      return state.map((message) => {
        if (message._id === payload._id) {
          return { ...payload }
        }
        return message
      })

    case MESSAGE_REMOVED :
      return state.filter((message) => (message._id !== payload._id))

    default :
      return state
  }
}

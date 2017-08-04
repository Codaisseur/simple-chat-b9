// src/actions/messages.js
import API from '../api'

export const SUBSCRIBED_TO_MESSAGES_SERVICE = 'SUBSCRIBED_TO_MESSAGES_SERVICE'
export const MESSAGE_CREATED = 'MESSAGE_CREATED'
export const MESSAGE_UPDATED = 'MESSAGE_UPDATED'
export const MESSAGE_REMOVED = 'MESSAGE_REMOVED'
export const MESSAGES_FETCHED = 'MESSAGES_FETCHED'

const api = new API()
const messages = api.service('messages')

export const sendMessage = (text) => {
  return (dispatch, getState) => {
    const { name } = getState()
    messages.create({ name, text })
  }
}

export const fetchMessages = () => {
  return (dispatch) => {
    messages.find({
      query: {
        $limit: 10,
        $sort: {
          createdAt: -1
        }
      }
    })
      .then((response) => {
        dispatch({
          type: MESSAGES_FETCHED,
          payload: response.data
        })
      })
  }
}

export const subscribe = () => {
  return (dispatch, getState) => {
    const { subscriptions } = getState()
    if (subscriptions.includes('messages')) return // already subscribed!

    messages.on('created', (message) => { dispatch(createdMessage(message)) })
    messages.on('updated', (message) => { dispatch(updatedMessage(message)) })
    messages.on('patched', (message) => { dispatch(updatedMessage(message)) })
    messages.on('removed', (message) => { dispatch(removedMessage(message)) })

    dispatch({ type: SUBSCRIBED_TO_MESSAGES_SERVICE })
  }
}

const createdMessage = (message) => {
  return {
    type: MESSAGE_CREATED,
    payload: message
  }
}

const updatedMessage = (message) => {
  return {
    type: MESSAGE_UPDATED,
    payload: message
  }
}

const removedMessage = (message) => {
  return {
    type: MESSAGE_REMOVED,
    payload: message
  }
}

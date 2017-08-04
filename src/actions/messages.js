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
    messages.find()
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
    if (subscriptions.includes('messsages')) return // already subscribed!

    messages.on('created', (recipe) => { dispatch(createdRecipe(recipe)) })
    messages.on('updated', (recipe) => { dispatch(updatedRecipe(recipe)) })
    messages.on('patched', (recipe) => { dispatch(updatedRecipe(recipe)) })
    messages.on('removed', (recipe) => { dispatch(removedRecipe(recipe)) })

    dispatch({ type: SUBSCRIBED_TO_MESSAGES_SERVICE })
  }
}

const createdRecipe = (recipe) => {
  return {
    type: MESSAGE_CREATED,
    payload: recipe
  }
}

const updatedRecipe = (recipe) => {
  return {
    type: MESSAGE_UPDATED,
    payload: recipe
  }
}

const removedRecipe = (recipe) => {
  return {
    type: MESSAGE_REMOVED,
    payload: recipe
  }
}

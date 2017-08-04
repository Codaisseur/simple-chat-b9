// src/reducers/name.js

import { STORE_NAME, RESTORE_NAME } from '../actions/name'

export default (state = null, { type, payload }) => {
  switch (type) {
    case RESTORE_NAME :
    case STORE_NAME :
      if (!payload || payload === '') return null
      return payload + ''

    default :
      return state
  }
}

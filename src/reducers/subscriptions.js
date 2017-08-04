import { SUBSCRIBED_TO_MESSAGES_SERVICE } from '../actions/messages'

export default (state = [], { type }) => {
  switch (type) {
    case SUBSCRIBED_TO_MESSAGES_SERVICE :
      return state.concat('messages')

    default :
      return state
  }
}

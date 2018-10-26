import { chat } from '../actions';

const INITIAL_STATE = {
  user: null,
  messages: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case chat.JOIN:
      return {...state, user: action.payload }
    case chat.MESSAGE_RECEIVED:
      return {...state, messages: [...state.messages, action.payload] }
    default:
      return state;
  }
}

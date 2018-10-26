import { combineReducers } from 'redux';
import posts from './posts';
import chat from './chat';

export default combineReducers({
  posts,
  chat,
});

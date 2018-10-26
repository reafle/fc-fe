import { combineEpics } from 'redux-observable';
import chatEpics from './chat';

export default combineEpics( chatEpics );

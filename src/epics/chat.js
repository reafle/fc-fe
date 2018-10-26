import { combineEpics, ofType } from 'redux-observable';

import { fromEvent, EMPTY } from 'rxjs';
import {
  ignoreElements, pluck, tap, map,
  switchMap, mapTo, filter, distinctUntilChanged, startWith
} from 'rxjs/operators';

import { chat } from '../actions';

const noopEpic = actions$ => actions$.pipe(
  ofType('HELLO'),
  ignoreElements(),
);


const connectEpic = (actions$, state$, { io, socket$ }) => socket$.pipe(
  switchMap(sock => (sock !== null ? EMPTY
    : actions$.pipe(
      ofType(chat.CONNECT),
      pluck('payload'),
      map(url => io(url)),
      tap(sock => socket$.next(sock)),
      startWith(null),
      ignoreElements(),
    ))),
);

const joinEpic = (actions$, state$, { socket$ }) => socket$.pipe(
  switchMap(sock => (sock === null ? EMPTY
    : state$.pipe(
      pluck('chat'),
      pluck('user'),
      distinctUntilChanged(),
      filter(v => !!v),
      tap(user => sock.emit('join', { user })),
      ignoreElements(),
    ))),
);

const onMessageReceived = (actions$, state$, { socket$ }) => socket$.pipe(
  switchMap(sock => (sock === null ? EMPTY
    : fromEvent(sock, 'MESSAGE_RECEIVED').pipe(
      map(message => chat.messageReceived(message)),
    ))),
);

const messageSentEpic = (actions$, state$, { socket$ }) => socket$.pipe(
  switchMap(sock => (sock === null ? EMPTY
    : actions$.pipe(
      ofType(chat.MESSAGE_SENT),
      pluck('payload'),
      tap(message => sock.emit('message', { message, user: state$.value.chat.user })),
      ignoreElements(),
    ))),
);


export default combineEpics(
  noopEpic,
  connectEpic,
  joinEpic,
  onMessageReceived,
  messageSentEpic,
);

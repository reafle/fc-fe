import moment from 'moment';

export const SOCKET_ADDRESS = 'http://127.0.0.1:3333';

export const CONNECT = 'CONNECT';
export const JOIN = 'JOIN';
export const MESSAGE_RECEIVED = 'MESSAGE_RECEIVED';
export const MESSAGE_SENT = 'MESSAGE_SENT';

export const connect = () => ({
  type: CONNECT,
  payload: SOCKET_ADDRESS,
});

export const joinChannel = name => ({
  type: JOIN,
  payload: name,
});

export const messageReceived = message => ({
  type: MESSAGE_RECEIVED,
  payload: { ...message, id: createId(), time: currentTime() },
});

export const sendMessage = message => ({
  type: MESSAGE_SENT,
  payload: message,
});

const createId = () => +moment() + Math.floor(Math.random() * 100);
const currentTime = () => moment().format('HH:mm');

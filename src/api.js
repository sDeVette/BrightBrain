import openSocket from 'socket.io-client';
const  socket = openSocket('http://192.168.178.19:8000');

function subscribeToTimer(cb) {
  socket.on('timer', timestamp => cb(null, timestamp));
  socket.emit('subscribeToTimer', 1000);
}

function getUser(players){
  socket.emit('getUser');
  socket.on('user', users => players(null, users));
}

function sendMessage(message){
  console.log(message);
  socket.emit('message', message);
}

function subscribeToChat(cb) {
  socket.on('notify', message => {
    console.log(message);
    cb(null, message);
  });
}

function userJoined(cb) {
  socket.on('playerJoined', player => {
    console.log('PlayerJoined', player);
    cb(null, player);
  });
}



export { subscribeToTimer, getUser, subscribeToChat, sendMessage, userJoined };
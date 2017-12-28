import openSocket from 'socket.io-client';
const  socket = openSocket('http://10.40.4.63:8000');

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

function playersJoined(cb) {
  socket.on('playersJoined', players => {
    console.log('PlayerJoined', players);
    cb(null, players);
  });
}

function gameStart(cb) {
  socket.on('gameStart', (game) => {
    cb(null, game);
  });
}

function pickTeam(cb) {
  socket.on('pickTeam', (id) => {
    cb(null, id);
  });
}



export { subscribeToTimer, getUser, subscribeToChat, sendMessage, playersJoined, gameStart, pickTeam };
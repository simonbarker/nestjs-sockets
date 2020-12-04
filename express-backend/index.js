var app = require('express')();
var server = require('http').createServer(app);
var options={
  cors:true,
  origins:["http://127.0.0.1:3000"],
}
const io = require('socket.io')(server, options);

io.on('connection', (socket) => {
  console.log('a user connected', socket.id);
  
  socket.broadcast.emit('new user connected');

  socket.on('disconnect', (socket) => {
    console.log('a user disconnected', socket.id);
  });

  app.get('/sendPush', (req, res) => {
    console.log('push api hit');
    socket.broadcast.emit('NEW_DATA');
    res.sendStatus(200);
  });
    
});

server.listen(5000, () => {
  console.log('listening on 5000');
});
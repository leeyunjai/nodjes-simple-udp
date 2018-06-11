var dgram = require('dgram');
var server = dgram.createSocket('udp4');

server.on('listening', function(){
  var addr = server.address();
  console.log('UDP Server listening port: ' + addr.port);
});

server.on('message', function(msg, client){
  console.log(client.address, client.port, msg.toString());

  var message = Buffer.from("Hello everyone from server");
  server.send(message, 0, message.length, client.port, '127.0.0.1');

});

server.bind(1234, '127.0.0.1');

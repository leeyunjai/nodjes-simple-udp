var dgram = require('dgram');
var client = dgram.createSocket('udp4');
var message = Buffer.from("Hello everyon from client");

setInterval(function(){
  client.send(message, 0, message.length, 1234, '127.0.0.1', function(err, bytes){
    if(err){
      console.log(err);
      throw err;
    }
  });
}, 1000);

client.on('listening', function(){
  var addr = client.address();
  console.log('UDP Server listening port: ' + addr.port);
});

client.on('message', function(msg, remote){
  console.log("Received message: ", remote.address, remote.port, msg.toString());
});

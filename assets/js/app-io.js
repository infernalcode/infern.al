
(function (io) {
  var socket = io.connect();
  if (typeof console !== 'undefined') {
  // log('Connecting to Sails.js...');
  }

  socket.on('connect', function socketConnected() {
  socket.on('message', function messageReceived(message) {
    log('New comet message received :: ', message);
  });

  log(
  'Socket is now connected and globally accessible as `socket`.\n' + 
  'e.g. to send a GET request to Sails, try \n' + 
  '`socket.get("/", function (response) ' +
  '{ console.log(response); })`'
  );
  ///////////////////////////////////////////////////////////


  });


  // Expose connected `socket` instance globally so that it's easy
  // to experiment with from the browser console while prototyping.
  window.socket = socket;


  // Simple log function to keep the example simple
  function log () {
  if (typeof console !== 'undefined') {
  console.log.apply(console, arguments);
  }
  }
  

})(
  window.io

);
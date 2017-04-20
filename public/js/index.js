let socket = io();

socket.on('connect', function () {
  console.log('Connected to server');
});

socket.on('disconnect', function () {
  console.log('Disconnected from server');
});

socket.on('newMessage', function (message) {
  console.log('New message! ', message);
});

socket.emit('createMessage', {
  from: 'Frank',
  text: 'Hello!'
}, function (data) {
  console.log('Got it!', data);
});

$('#messageForm').on('submit', function (e) {
  e.preventDefault();

  socket.emit('createMessage', {
    from: 'User',
    text: $('[name=message]').val()
  }, function () {

  });
});

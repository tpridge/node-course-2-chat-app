var socket = io();

socket.on('connect', function () {
	console.log('Connected to server.');

	socket.emit('createMessage', {
		from: 'Andrew',
		text: 'test message'
	});
});

socket.on('disconnect', function () {		
	console.log('Disconnectd from server');
});

socket.on('newMessage', function (message) {
	console.log('newMessage', message);
});
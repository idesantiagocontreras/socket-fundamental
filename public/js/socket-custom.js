var socket = io();

socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos conecion con el servidor');
});

socket.emit('enviarMensaje', {
    usuario: 'ivan de santiago',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log('Respuesta servidor: ', resp);
});

socket.on('enviarMensaje', function(resp) {
    console.log(resp);
});
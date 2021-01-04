var socket = io();

var label = $('#lblNuevoTicket');

socket.on('connect', function() {
    console.log("conectado al servidor");
});

socket.on('disconnect', function() {
    console.log("Desconectado del servidor");
});


// 'estadoActual'
socket.on('estadoActual', function(resp) {
    console.log(resp);
    label.text(resp.actual);
})

$('button').on('click', function() {
    socket.emit('siguienteTicket', null, function(siguienteTicket) {
        label.text(siguienteTicket);

    })
})
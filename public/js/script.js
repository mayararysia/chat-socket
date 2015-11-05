var socket = io('http://localhost:3000');

function limpar(){
	$('#msg').val('');
}

$('#formulario').submit(function(){
				
	socket.emit('send-client', $('#msg').val());
	limpar();
	return false;
});

socket.on('send-client', function(msg){
	$('#chat').append($('<li>').text(msg));
});
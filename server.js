/*var express = require('express');

var app = express();
var server = app.listen(3000);

app.use(express.static('public'));

console.log("Server is running");

var socket = require('socket.io');

var io = socket(server);

io.sockets.on('connection', newConnection);

function newConnection(socket){
	console.log('new connection' + socket.id);

	socket.on('mouse', mouseMsg);

	function mouseMsg(data){
		socket.broadcast.emit('mouseStage', data); //emits to everyone but socket
		//io.sockets.emit('mouseStage', data); //emits to everyone
		console.log(data);
	}
}
*/
'use strict';
const app       =     require("express")();
const express   =     require("express");
const http      =     require('http').Server(app);
const io        =     require("socket.io")(http);
const PORT = process.env.PORT || 3000;



// ========== Pages ========== //
// Allows acess to all files inside 'public' folder.
app.use(express.static(__dirname + "/public"));

// Configures each link to a different page.
// e.g. localhost:3000/   will load index.html
// e.g. localhost:3000/led    will load led.html
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/stage.html');
});

// Hosts the page on port 3000
http.listen(PORT,function(){
    console.log("Listening on " + PORT);
});

//======== sock-osc
/*'use strict';

const express = require('express');
const socketIO = require('socket.io');
const path = require('path');


const PORT = process.env.PORT || 3000;
const INDEX = path.join(__dirname, 'public/index.html');





const server = express()
  .use((req, res) => res.sendFile(INDEX) )
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));

const io = socketIO(server);

io.on('connection', (socket) => {
  console.log('Client connected');
  socket.on('disconnect', () => console.log('Client disconnected'));
});*/




//=====
//======== sock-osc
/*var PORT = process.env.PORT || 8080;
app.get('/',function(req,res){
	res.sendFile(__dirname + '/osc.html');
});
http.listen(PORT,function(){
	console.log('Server listen at port %s',PORT);
});*/
//====


// ========== SOCKET.IO ========== //


//var users = [], usersIndex = {}; 


var nsp = io.of('/stage');
nsp.on('connection', function(socket){
  console.log('Stage is up at ' + socket.id);
});
//nsp.emit('hi', 'everyone!');

io.sockets.on('connection', newConnection);

function newConnection(socket){
	console.log('new connection' + socket.id);

	var sockID = socket.id;
	socket.emit('sockID', sockID);



	/////// Setting random color for socket
	function getRandomInt(min, max) {
	  min = Math.ceil(min);
	  max = Math.floor(max);
	  return Math.floor(Math.random() * (max - min)) + min;
	}

	var color = [getRandomInt(0, 255), getRandomInt(0, 255), getRandomInt(0, 255)];
	socket.emit('color', color);
	/////// end Setting random color for socket

	
	//var index3 = undefined;
	
	/////// Recieving data from socket
	socket.on('mouse', mouseMsg);
	function mouseMsg(data){
		//console.log(data.x1);
		nsp.emit('mouseStage', data);
		//socket.broadcast.emit('mouseStage', data); //emits to everyone but socket
		
		//io.sockets.emit('mouseStage', data); //emits to everyone
		//console.log(data);

		//users[socket.id] = [data];
		/*var index2 = undefined;
		addOrReplace(data);
		function addOrReplace(object){
			var index = usersIndex[object.i]; //takes id and assigns an index #
			//console.log(index);
			if(index === undefined){
				index = users.length;
				usersIndex[object.i] = index;
			}
			users[index] = object;
			//console.log(index);
			index2 = index;
			return index2;
		}

		nsp.emit('mouseStage', data);
		nsp.emit('tempPart', data);
		//console.log(index2);
		//console.log(users.length);
		//console.log(users);
		index3 = index2;
		return index3;*/
	}
	/////// end Recieving data from socket

	////// Disconnection
	/*function deleteFromArray(users, index3) {
  		position = users.indexOf(index3);
  		users.splice(position, 1);
	}*/

	socket.on('disconnect', function () {
		//console.log(index3);
		//deleteFromArray(users, index3);
	    //console.log('disconnection' + socket.id);
	    nsp.emit('disconnect', sockID);
	    //console.log(users.length);
	});
	////// end Disconnection

}


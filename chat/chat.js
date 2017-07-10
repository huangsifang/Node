var net = require('net');

var chatServer = net.createServer(),
	clientList = [];

chatServer.on('connection', function(client) {
	client.name = client.remoteAddress + ':' + client.remotePort;
	client.write(client.name + 'joined!\n');

	clientList.push(client);

	client.on('data', function(data) {
		broadcast(data, client);
	})

	client.on('end', function() {
		console.log(client.name + ' quit');
		//clientList.splice(clientList.indexOf(client), 1);
		for (var i=0,n=clientList.length; i<n; i++) {
		 	if (clientList[i] === client) {
			  	clientList.splice(i, 1);
			}
		}
	})

	client.on('error', function(e) {
		console.log(e);
	})
})

function broadcast(message, client) {
	var cleanup = [];
	for(var i=0; i<clientList.length; i+=1) {
		if(client !== clientList[i]) {
			if(clientList[i].writable) {
				//把数据发送给除发送者外的其他客户端
				clientList[i].write(client.name + " says: " + message + '\n');
			} else {
				cleanup.push(clientList[i]);
				clientList[i].destroy();
			}
		}
	}
	for(i=0; i<cleanup.length; i+=1) {
		//clientList.splice(clientList.indexOf(cleanup[i]), 1);
		for (var i=0,n=clientList.length; i<n; i++) {
		 	if (clientList[i] === cleanup[i]) {
			  	clientList.splice(i, 1);
			}
		}
	}
}

chatServer.listen(9000);
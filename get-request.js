const https = require('https');

const options = {
	hostname: process.argv[2],
	path: '/',
	method: 'GET',
	headers:{
		'Accept': '*/*'
	}
};

let count = 0;
const limit = parseInt(process.argv[3]);
const intervalTime = parseInt(process.argv[4]);

function loop(){
	setTimeout(() => {
		let request = https.request( options , (res) => {
			console.log(`Status: ${res.statusCode} , Count: ${++count}`);
			if(count < limit){
				loop();
			}
		});

		request.on('error', (e) => {
			console.log(`Error: ${e.message}`);
		})

		request.end();

	}, intervalTime);
}

loop();




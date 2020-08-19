//without foreach
function parse_default(qs) {
	var queryString = qs.substr(1); //queryString = 'banana=10&apple=20&orange=30'
	var chunks = queryString.split("&"); //[ 'banana=10', 'apple=20', 'orange=30' ] object type
	var result = {};

	for (var i = 0; i < chunks.length; i++) {
		var parts = chunks[i].split("=");
		var key = parts[0];
		var value = parts[1];
		result[key] = value;
	}
	return result;
}

//with foreach
function parse_foreach(qs) {
	const queryString = qs.substr(1); //queryString = 'banana=10&apple=20&orange=30'
	const chunks = queryString.split("&");
	let result = {};

	chunks.forEach((chunk) => {
		const parts = chunk.split("=");
		const key = parts[0];
		const value = parts[1];
		result[key] = value;
	});
	return result;
}

//simple version of foreach
function parse_betterForeach(qs) {
	const queryString = qs.substr(1);
	const chunks = queryString.split("&");
	let result = {};
	chunks.forEach((chunk) => {
		const [key, value] = chunk.split("=");
		result[key] = value;
	});
	return result;
}

var qs = "?banana=10&apple=20&orange=30";
console.log(parse_default(qs)); //{ banana: '10', apple: '20', orange: '30' }
console.log(parse_foreach(qs));
console.log(parse_betterForeach(qs));

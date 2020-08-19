//parse using map
function parse_map(qs) {
	const queryString = qs.substr(1);
	const chunks = queryString.split("&");
	const result = chunks.map((chunk) => {
		const [key, value] = chunk.split("=");
		return { key: key, value: value };
	});
	return result;
}

const qs = "?banana=10&apple=20&orange=30";
console.log(parse_map(qs));

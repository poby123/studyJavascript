//reduce function is used to convert Array([1,2,3,...,9,10]) to Number(or String etc...)
function sum(numbers) {
	// No.01. total : 0, num : 1
	// No.02. total : 1, num : 2
	// No.03. total : 3, num : 3
	//...
	// No.10. total : 55, num : 10
	//return value. total : 55, num : 55

	return numbers.reduce((total, num) => total + num, 0);
	//reduce((cumulative value, value of current index) => body, initializing value for cumulative value)
}

function parse(qs) {
	const queryString = qs.substr(1);
	const chunks = queryString.split("&");
	return (
		chunks
			.map((chunk) => {
				const [key, value] = chunk.split("=");
				return { key, value };
				//  return value :
				//  [
				//     { key: 'banana', value: '10' },
				//     { key: 'apple', value: '20' },
				//     { key: 'orange', value: '30' }
				//   ]
			})
			// [{},{},{}] to {}
			.reduce((result, item) => {
				result[item.key] = item.value;
				console.log("reduce...");
				return result;
				// return value :
				// { banana: '10', apple: '20', orange: '30' }
			}, {})
	);
}

let qs = "?banana=10&apple=20&orange=30";
console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(parse(qs));

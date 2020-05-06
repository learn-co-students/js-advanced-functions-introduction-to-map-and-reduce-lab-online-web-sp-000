// Your code here
function mapToNegativize(array) {
	const newArray = []
	for (let item of array) {
		newArray.push(-item);
	}
	return newArray
}

function mapToNoChange(array) {
	const newArray = []
	for (let item of array) {
		newArray.push(item);
	}
	return newArray
}

function mapToDouble(array) {
	const newArray = []
	for (let item of array) {
		newArray.push(item * 2);
	}
	return newArray
}

function mapToSquare(array) {
	const newArray = []
	for (let item of array) {
		newArray.push(item ** 2);
	}
	return newArray
}

function reduceToTotal(array, startPoint=0) {
	let total = startPoint;
	for (let item of array) {
		total += item;
	}
	return total;
}

function reduceToTotal(array, startPoint=0) {
	let total = startPoint;
	for (let item of array) {
		total += item;
	}
	return total;
}

function reduceToAllTrue(array) {
	let memo = true;
	for (let item of array) {
		if (!!item === false) {
			memo = false;
			return memo
		}
	}
	return memo;
}

function reduceToAnyTrue(array) {
	let memo = false;
	for (let item of array) {
		if (!!item === true) {
			memo = true;
			return memo
		}
	}
	return memo;
}

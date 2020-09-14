// Your code here
function mapToNegativize(sourceArray) {
	return sourceArray.map(x => x * (-1))
}

function mapToNoChange(sourceArray) {
	return sourceArray
}

function mapToDouble(sourceArray) {
	return sourceArray.map(x => x * 2)
}

function mapToSquare(sourceArray) {
	return sourceArray.map(x => x ** 2)
}

function reduceToTotal(sourceArray, startingPoint=0) {
	return sourceArray.reduce(((x, y) => x + y), startingPoint)
}

function reduceToAllTrue(sourceArray) {
	return sourceArray.reduce((x, y) => !!x && !!y)
}

function reduceToAnyTrue(sourceArray) {
	return sourceArray.reduce((x, y) => !!x || !!y)
}

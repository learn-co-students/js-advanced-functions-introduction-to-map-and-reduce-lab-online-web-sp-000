function mapToNegativize(sourceArray) {
	let new_array = []
	for (let i = 0; i < sourceArray.length; i++) {
		new_array[i] = -sourceArray[i]
	}

	return new_array
}

function mapToNoChange(sourceArray) {
	return sourceArray
}

function mapToDouble(sourceArray) {
	let new_array = []
	for (let i = 0; i < sourceArray.length; i++) {
		new_array[i] = 2*sourceArray[i]
	}
	return new_array
}

function mapToSquare(sourceArray) {
	let new_array = []
	for (let i = 0; i < sourceArray.length; i++) {
		new_array[i] = sourceArray[i]**2
	}
	return new_array
}


function reduceToTotal(sourceArray, startingPoint = 0) {
	let total = startingPoint
	for (let i = 0; i < sourceArray.length; i++) {
		total += sourceArray[i]
	}
	return total
}

function reduceToAllTrue(sourceArray) {
	let value = true
	for (let i = 0; i < sourceArray.length; i++) {
		if (sourceArray[i]) {
			value = true
		} else {
			return false
		}
	}
	return value
}

function reduceToAnyTrue(sourceArray) {
	let value = false
	for (let i = 0; i < sourceArray.length; i++) {
		if (!sourceArray[i]) {
			value = false
		} else {
			return true
		}
	}
	return value
}
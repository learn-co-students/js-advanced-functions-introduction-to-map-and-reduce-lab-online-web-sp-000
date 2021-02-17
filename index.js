// const sourceArray = [ 1, 2, 3, -9 ]

function mapToNegativize(sourceArray){
	const newArray = []
	for (let i = 0; i < sourceArray.length; i++){
		const value = sourceArray[i] * -1
		newArray.push(value)
	}
	return newArray
}

function mapToNoChange(sourceArray){
	const newArray = []
	for (let i = 0; i < sourceArray.length; i++){
		const value = sourceArray[i]
		newArray.push(value)
	}
	return newArray
}

function mapToDouble(sourceArray){
	const newArray = []
	for (let i = 0; i < sourceArray.length; i++){
		const value = sourceArray[i] * 2
		newArray.push(value)
	}
	return newArray
}

function mapToSquare(sourceArray){
	const newArray = []
	for (let i = 0; i < sourceArray.length; i++){
		const value = sourceArray[i] ** 2
		newArray.push(value)
	}
	return newArray
}


function reduceToTotal(sourceArray, startingPoint){
	let value = 0
	if (typeof startingPoint === 'number') { value = startingPoint}
	for (let i=0; i<sourceArray.length; i++){
		value += sourceArray[i]
	}
	return value
}

function reduceToAllTrue(sourceArray){
	let value
	for (let i = 0; i < sourceArray.length; i++) {
		if (sourceArray[i]){
			value = true
		}else {
			return false
		}
		
	}
	return true
}


function reduceToAnyTrue(sourceArray){
	let value
	for (let i = 0; i < sourceArray.length; i++){
		if (!sourceArray[i]) {
			value = false
		}else {
			return true
		}
	}
	return value
}
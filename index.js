// Your code here

function mapToNegativize(sourceArray) {
    let newArray = []
    for (const element of sourceArray) {
        let negative = element * -1; 
        newArray.push(negative);
    }
    return newArray
}

function mapToNoChange(sourceArray) {
    let newArray = []
    for (const element of sourceArray) {
        let newNumber = element; 
        newArray.push(newNumber);
    }
    return newArray
}

function mapToDouble(sourceArray) {
    let newArray = []
    for (const element of sourceArray) {
        let newNumber = element * 2; 
        newArray.push(newNumber);
    }
    return newArray
}

function mapToSquare(sourceArray) {
    let newArray = []
    for (const element of sourceArray) {
        let newNumber = element ** 2; 
        newArray.push(newNumber);
    }
    return newArray
}

function reduceToTotal(sourceArray, startingPoint=0) {
    let runningNumber = startingPoint 
    for (const element of sourceArray) {
        runningNumber += element;
    }
    return runningNumber
}

function reduceToAllTrue(sourceArray) {
    for (const element of sourceArray) {
        if (!Boolean(element)) {
            return false
        }
    }
    return true
}

function reduceToAnyTrue(sourceArray) {
    for (const element of sourceArray) {
        if (Boolean(element)) {
            return true
        }
    }
    return false
}
const posArray = [1, 2, 3, 4, 5];

const sourceArray = [1,2,3]
const startingPoint = 100

const allTrue = [1, 2, true, "razmatazz"];

function mapToNegativize(array) {
    let result = []
    for (let i = 0; i < array.length; i++) {
        result.push(-1 * array[i])
    }
    console.log(result);
    return result;
}

function mapToNoChange(array) {
    let result = []
    for (let i = 0; i < array.length; i++) {
         result.push(array[i])
    }
    return result;
}

function mapToDouble(array) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(2* array[i])
    }
    return newArray;
}

function mapToSquare(array) {
    let squareArray = []
    for (let i = 0; i < array.length; i++) {
        squareArray.push(array[i] ** 2)
    }
    return squareArray;
}

function reduceToTotal(sourceArray, startingPoint) {
    let total = 0;
    for (let i = 0; i < sourceArray.length; i++) {
        total = total + sourceArray[i];
    }
    if (startingPoint != undefined) {
        return total + startingPoint;
    } else {
        return total;
    }
}

function reduceToAllTrue(array) {
    for (let i = 0; i < array.length; i++) {
        if (!array[i]) return false;
        }
    return true;
}

function reduceToAnyTrue(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i]) return true;
    }
    return false;
}


/*
function mapToNegativize(array) {
    let result  = array.map(element => {
        return element * -1;
    })
    console.log(posArray);
    console.log(`mapToNegativize: ${mapToNegativize}`)
    return result
}

function mapToNoChange(array) {
    let result = array.map(element => {
        return element;
    })
    console.log(`mapToNoChange: ${mapToNoChange}`)
    return result;
}

function mapToDouble(array) {
    let result = array.map(element => {
        return element * 2;
    })
    console.log(`mapToDouble: ${mapToDouble}`)
    return result;
}

function mapToSquare(array) {
    let result = array.map(element => {
        return element ** 2;
    })
    console.log(`mapToSquare: ${mapToSquare}`)
    return result;
}

function reduceToTotal(sourceArray, startingPoint) {
    let sum = sourceArray.reduce((total, amount) => total + amount)
    if (startingPoint != undefined) {
        sum = startingPoint + sum
        console.log(`sum = ${sum}`);
        return sum;
    } else {
        return sum;
    }
}

function reduceToAllTrue(array) {
    // checks whether an element is false
    for (let element in array)
        if (!array[element]) return false;
        return true;
}

function reduceToAnyTrue(array) {
    // check for any true elements
    for (let element in array)
        if (array[element] === true) return true;
        return false
}

mapToNegativize(posArray);
mapToNoChange(posArray);
mapToDouble(posArray);
mapToSquare(posArray);

reduceToTotal(sourceArray, startingPoint);

*/
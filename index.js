const posArray = [1, 2, 3, 4, 5];

const sourceArray = [1,2,3]
const startingPoint = 100

const allTrue = [1, 2, true, "razmatazz"];

function mapToNegativize(array) {
    let mapToNegativize = array.map(element => {
        return element * -1;
    })
    console.log(posArray);
    console.log(`mapToNegativize: ${mapToNegativize}`)
    return mapToNegativize
}

function mapToNoChange(array) {
    let mapToNoChange = array.map(element => {
        return element;
    })
    console.log(`mapToNoChange: ${mapToNoChange}`)
    return mapToNoChange;
}

function mapToDouble(array) {
    let mapToDouble = array.map(element => {
        return element * 2;
    })
    console.log(`mapToDouble: ${mapToDouble}`)
    return mapToDouble;
}

function mapToSquare(array) {
    let mapToSquare = array.map(element => {
        return element ** 2;
    })
    console.log(`mapToSquare: ${mapToSquare}`)
    return mapToSquare;
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
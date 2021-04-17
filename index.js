// Your code here

function mapToNegativize(array) {
    return array.map(x => x * -1);
}

function mapToNoChange(array) {
    return array.map(x => x);
}

function mapToDouble(array) {
    return array.map(x => x * 2);
}

function mapToSquare(array) {
    return array.map(x => x ** 2);
}

function reduceFunc(total, num) {
    return total + num;
}

function reduceToTotal(array, startingPoint = 0) {
    return array.reduce(reduceFunc, startingPoint)
}


function reduceToAllTrue(array) {
    for (let i = 0; i < array.length; i++) {
        if (!array[i]) return false
    }
    return true 
}

function reduceToAnyTrue(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i]) return true
    }
    return false 
}
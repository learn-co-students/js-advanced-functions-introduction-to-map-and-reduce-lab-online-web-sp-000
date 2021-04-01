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

const reducer = (accumulator, item) => {
    return accumulator + item;
}

function reduceToTotal(array, startingPoint=0){
    return array.reduce(reducer, startingPoint)
}

function turnArrayTrue(x, y) {
    return !!x && !!y;
}

function reduceToAllTrue(array)  {
    return array.reduce(turnArrayTrue);
}

function turnArrayFalse(x, y) {
    return !!x || !!y;
}

function reduceToAnyTrue(array){
    return array.reduce(turnArrayFalse)
}
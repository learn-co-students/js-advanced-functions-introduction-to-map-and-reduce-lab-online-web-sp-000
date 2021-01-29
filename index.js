// Your code here
function mapToNegativize(sourceArray){
const new_array = sourceArray.map(x => x * -1 );
return new_array
}



function mapToNoChange(sourceArray){
    return sourceArray
}


function mapToDouble(sourceArray) {
    const new_array = sourceArray.map(x => x * 2)
    return new_array
}


function mapToSquare(sourceArray) {
    const new_array = sourceArray.map(x => x * x)
    return new_array
}


function reduceToTotal(sourceArray, startingPoint = 0) {
const add = (a, b) => a + b;
return sourceArray.reduce(add, startingPoint)
}


function reduceToAllTrue(sourceArray) {
const reducer = (x, y) => !!(x && y)
return sourceArray.reduce(reducer, true)
}


function reduceToAnyTrue(sourceArray) {
    const reducer = (x, y) => !!(x || y)
    return sourceArray.reduce(reducer)
}

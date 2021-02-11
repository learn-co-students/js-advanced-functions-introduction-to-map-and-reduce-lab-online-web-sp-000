// Your code here
function mapToNegativize(sourceArray) {
    return sourceArray.map(x => x*(-1))
}

function mapToNoChange(sourceArray) {
    return sourceArray.map(x => x)
}

function mapToDouble(sourceArray) {
    return sourceArray.map(x => x*2)
}

function mapToSquare(sourceArray) {
    return sourceArray.map(x => x**2)
}

const reducer = (accumulator, currentVal) => accumulator + currentVal;

function reduceToTotal(sourceArray, startingPoint) {
    if (startingPoint) {
        return sourceArray.reduce(reducer, startingPoint);
    } else {
        return sourceArray.reduce(reducer);
    }
}

function reduceToAllTrue(sourceArray) {
   return sourceArray.reduce((accumulator, currentValue) => {
       if (accumulator) {
        return accumulator = !!currentValue
       }
       return accumulator
   })
}

function reduceToAnyTrue(sourceArray) {
    return sourceArray.reduce((accumulator, currentValue) => {
     console.log("acc", accumulator)
     console.log(currentValue)
     console.log(!!currentValue)
        if (!accumulator) {
         return accumulator = !!currentValue
        }
        return accumulator
    })
 }
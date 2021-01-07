// Your code here

// map assignments

function mapToNegativize(sourceArray) {
    return sourceArray.map((value) => value * -1)
}

function mapToNoChange(sourceArray) {
    return sourceArray.map((value) => value)
}

function mapToDouble(sourceArray) {
    return sourceArray.map((value) => value * 2)
}

function mapToSquare(sourceArray) {
    return sourceArray.map((value) => value * value)
}

// reduce assignments

function reduceToTotal(sourceArray, startingPoint = null) {
    const reducer = (accumulator, value) => accumulator + value;
            return sourceArray.reduce(reducer,startingPoint)
}

function reduceToAllTrue(sourceArray){
    const allAreTrue = (currentValue) => currentValue ? true : false;
    return sourceArray.every(allAreTrue);
  }
  
  function reduceToAnyTrue(sourceArray){
    const someAreTrue = (currentValue) => currentValue ? true : false;
    return sourceArray.some(someAreTrue);
  }
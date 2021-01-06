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
        if (startingPoint === null) {
            return sourceArray.reduce(reducer)
        }
        else {
            return sourceArray.reduce(reducer,startingPoint)
        }
}

function reduceToAllTrue(values){
    const allAreTrue = (currentValue) => currentValue ? true : false;
    return values.every(allAreTrue);
  }
  
  function reduceToAnyTrue(values){
    const someAreTrue = (currentValue) => currentValue ? true : false;
    return values.some(someAreTrue);
  }
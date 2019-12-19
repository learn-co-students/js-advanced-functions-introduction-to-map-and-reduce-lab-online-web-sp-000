// Your code here

// map-like
function mapToNegativize(sourceArray) {
    let newArray = []
    sourceArray.forEach(element => {
        newArray.push(element * -1);
    });
    return newArray;
}
function mapToNoChange(sourceArray) {
    const newArray = []
    sourceArray.forEach(element => {
        newArray.push(element);
    });
    return newArray;
}
function mapToDouble(sourceArray) {
    const newArray = []
    sourceArray.forEach(element => {
        newArray.push(element * 2);
    });
    return newArray;
}
function mapToSquare(sourceArray) {
    const newArray = []
    sourceArray.forEach(element => {
        newArray.push(element ** 2);
    });
    return newArray;
}
// Remember, all map methods return a new Array.

// reduce-like
function reduceToTotal(sourceArray, startingPoint = 0) {
    let total = startingPoint
    for (let i = 0; i < sourceArray.length; i++) {
        total = total + sourceArray[i];
    }
    return total;
}

function reduceToAllTrue(src) {
    for (let i = 0; i < src.length; i++ ) {
      if (!src[i]) return false
    }
    return true
  }
  
  function reduceToAnyTrue(src) {
    for (let i = 0; i < src.length; i++ ) {
      if (src[i]) return true
    }
    return false
  }
// reduceToAllTrue(sourceArray)
// reduceToAnyTrue(sourceArray)
// Remember, all reduce methods return a value.
// Your code here
function mapToNegativize(src) {
    let r = []
    for (let i = 0; i < src.length; i++ ) {
        r.push(-1 * src[i])
    }
    return r
}

function mapToNoChange(src) {
    let r = []
    for (let i = 0; i < src.length; i++ ) {
        r.push(src[i])
    }
    return r
}

function mapToDouble(src) {
    let r = []
    for (let i = 0; i < src.length; i++ ) {
        r.push(2 * src[i])
    }
    return r
}

function mapToSquare(src) {
    let r = []
    for (let i = 0; i < src.length; i++ ) {
        r.push(src[i] ** 2)
    }
    return r
}

function reduceToTotal(src, startingPoint=0) {
    let total = startingPoint
    for (let i = 0; i < src.length; i++ ) {
      total = total + src[i]
    }
    return total
}

function reduceToAnyTrue(src) {
    for (let i = 0; i < src.length; i++ ) {
      if (src[i]) return true
    }
    return false
}
  
function reduceToTotal(values,startingPoint= null) {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    if (startingPoint === null) {
    return values.reduce(reducer)
    } else {
    return values.reduce(reducer,startingPoint)
    }
}
  
function reduceToAllTrue(values) {
    const isBelowThreshold = (currentValue) => currentValue ? true : false;
    return values.every(isBelowThreshold);
}
  
function reduceToAnyTrue(values) {
    const isBelowThreshold = (currentValue) => currentValue ? true : false;
    return values.some(isBelowThreshold);
}
// Your code here
 
function mapToNegativize(sourceArray) {
  let r = []
  for (let i = 0; i < sourceArray.length; i++ ) {
    r.push(-1 * sourceArray[i])
  }
  return r
}
 
function mapToDouble(sourceArray) {
  let r = []
  for (let i = 0; i < sourceArray.length; i++ ) {
    r.push(2 * sourceArray[i])
  }
  return r
}
 
function mapToSquare(sourceArray) {
  let r = []
  for (let i = 0; i < sourceArray.length; i++ ) {
    r.push(sourceArray[i]**2)
  }
  return r
}
 
function mapToNoChange(sourceArray) {
  let r = []
  for (let i = 0; i < sourceArray.length; i++ ) {
    r.push(sourceArray[i])
  }
  return r
}

function reduceToTotal(sourceArray, startingPoint = 0) {
  let r = startingPoint
  for (let i = 0; i<sourceArray.length; i++ ) {
    r = (r + sourceArray[i])
  }
  return r
}

function reduceToAllTrue(sourceArray) {
  let r = true
  for (let i = 0; i < sourceArray.length; i++) {
    if (!!!sourceArray[i]) {
      r = false
      return r
    }
  }
  return r
}

function reduceToAnyTrue(sourceArray) {
  let r = false
  for (let i = 0; i<sourceArray.length; i++) {
    if (!!sourceArray[i]) {
      r = true 
      return r
    }
  }
  return r
}
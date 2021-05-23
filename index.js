// Your code here
function mapToNegativize(sourceArray) {
  let newArray = []
  sourceArray.forEach(e => newArray.push(-e))
  return newArray
}

function mapToNoChange(sourceArray) {
  let newArray = []
  sourceArray.forEach(e => newArray.push(e))
  return newArray
}

function mapToDouble(sourceArray) {
  let newArray = []
  sourceArray.forEach(e => newArray.push(e * 2))
  return newArray
}

function mapToSquare(sourceArray) {
  let newArray = []
  sourceArray.forEach(e => newArray.push(e * e))
  return newArray
}

function reduceToTotal(sourceArray, startingPoint = 0) {
  let total = startingPoint
  sourceArray.forEach(e => {
    total = total + e
  })
  return total
}

function reduceToAllTrue(sourceArray) {
  sourceArray.forEach(e => {
    if (!e) return false
  })
  return true
}

function reduceToAnyTrue(sourceArray) {
  sourceArray.forEach(e => {
    if (e) return true
  })
  return false
}
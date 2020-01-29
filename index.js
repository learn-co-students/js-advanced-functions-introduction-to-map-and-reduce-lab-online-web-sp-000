// Your code here
function mapToNegativize(sourceArray) {
  let ret = []
  for(let element of sourceArray) {
    ret.push(element * (-1))
  }
  return ret
}

function mapToNoChange(sourceArray) {
  return sourceArray
}

function mapToDouble(sourceArray){
  let ret = []
  for(let element of sourceArray) {
    ret.push(element * (2))
  }
  return ret
}

function mapToSquare(sourceArray){
  let ret = []
  for(let element of sourceArray) {
    ret.push(element * element)
  }
  return ret
}

function reduceToTotal(sourceArray, startingPoint = 0) {
  for(let element of sourceArray) {
    startingPoint = startingPoint + element
  }
  return startingPoint
}

function reduceToAllTrue(sourceArray) {
  for(let element of sourceArray) {
    if(!element) {
      return false
    }
  }
  return true
}

function reduceToAnyTrue(sourceArray) {
  for(let element of sourceArray) {
    if(!!element) {
      return true
    }
  }
  return false
}
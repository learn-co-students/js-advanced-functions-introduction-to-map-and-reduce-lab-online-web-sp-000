// Your code here
function mapToNegativize(array) {
  let newA = Array()
  for (let i = 0; i < array.length; i++) {
  newA.push(array[i]*-1)
  }
return newA
}
///
function mapToNoChange(array) {
  let newA = Array()
  for (let i = 0; i < array.length; i++) {
    newA.push(array[i])
  }
  return newA
}
///
function mapToDouble(array) {
  let newA = Array()
  for (let i = 0; i < array.length; i++) {
    newA.push(array[i]*2)
  }
  return newA
}
///
function mapToSquare(array) {
  let newA = Array()
  for (let i = 0; i < array.length; i++) {
    let sq = array[i] * array[i]
    newA.push(sq)
  }
  return newA
}
////
///My Own Reduce Like Methods!
function reduceToTotal(array, start) {
  let sum = 0
  if (start === undefined) {
  for (let i = 0; i < array.length; i++) {
    sum += array[i]
    }
    return sum
  } else {
    for (let i = 0; i < array.length; i++) {
      sum = start += array[i]
      }
      return sum
  }
}
///
function reduceToAllTrue(array) {
  for (let i = 0; i < array.length; i++ ) {
      if (!array[i]) return false
    }
    return true
}

function reduceToAnyTrue(array) {
  for (let i = 0; i < array.length; i++ ) {
      if (array[i]) return true
    }
    return false
}

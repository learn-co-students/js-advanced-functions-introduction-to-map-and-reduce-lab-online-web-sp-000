function mapToNegativize(sourceArray) {
  return sourceArray.map(item => item * -1)
}

function mapToNoChange(sourceArray) {
  return sourceArray.map(item => item)
}

function mapToDouble(sourceArray) {
  return sourceArray.map(item => item * 2)
}

function mapToSquare(sourceArray) {
  return sourceArray.map(item => item * item)
}

function reduceToTotal(sourceArray, startingPoint = 0) {
    let sum = sourceArray.reduce((a, b) => {
      return a + b
    }, 0)
    return sum + startingPoint
}

function reduceToAllTrue(sourceArray) {
  return sourceArray.reduce((a, b) => a && Boolean(b), true)
}

function reduceToAnyTrue(sourceArray) {
  return sourceArray.reduce((a, b) => a || Boolean(b), false)
}


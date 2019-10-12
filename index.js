function mapToNegativize(arr) {
  const newArr = []
  arr.forEach(elem => newArr.push(-elem))
  return newArr
}

function mapToNoChange(arr) {
  return arr.slice()
}

function mapToDouble(arr) {
  const newArr = []
  arr.forEach(elem => newArr.push(elem * 2))
  return newArr
}

function mapToSquare(arr) {
  const newArr = []
  arr.forEach(elem => newArr.push(elem ** 2))
  return newArr
}

function reduceToTotal(arr, startingPoint = 0) {
  arr.forEach(elem => startingPoint += elem)
  return startingPoint
}

function reduceToAllTrue(arr) {
  let returnValue = true
  arr.forEach(elem => {
    if (!elem) {
      returnValue = false
    }
  })
  return returnValue
}

function reduceToAnyTrue(arr) {
  let returnValue = false
  arr.forEach(elem => {
    if (!!elem) {
      returnValue = true
    }
  })
  return returnValue
}
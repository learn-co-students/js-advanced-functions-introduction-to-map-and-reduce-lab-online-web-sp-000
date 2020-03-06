const mapToNegativize = (arr) => {
  let a = []
  for (let i = 0; i < arr.length; i++) {
    a.push(arr[i] * -1)
  }
  return a
}

const mapToNoChange = (arr) => {
  let a = []
  for (let i = 0; i < arr.length; i++) {
    a.push(arr[i])
  }
  return a
}

const mapToDouble = (arr) => {
  let a = []
  for (let i = 0; i < arr.length; i++) {
    a.push(arr[i] * 2)
  }
  return a
}

const mapToSquare = (arr) => {
  let a = []
  for (let i = 0; i < arr.length; i++) {
    a.push(Math.pow(arr[i], 2))
  }
  return a
}

const reduceToTotal = (arr, startingPoint=0) => {
  let total = startingPoint
  for (let i = 0; i < arr.length; i++ ) {
    total = total + arr[i]
  }
  return total
}

const reduceToAllTrue = (arr) => {
  for (let i = 0; i < arr.length; i++ ) {
    if (!arr[i]) return false
  }
  return true
}

const reduceToAnyTrue = (arr) => {
  for (let i = 0; i < arr.length; i++ ) {
    if (arr[i]) return true
  }
  return false
}

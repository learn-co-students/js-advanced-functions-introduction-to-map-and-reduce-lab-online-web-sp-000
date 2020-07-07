// Your code here
const mapToNegativize = arr => {
  const arr2 = []
  for (let i = 0; i < arr.length; i++) {
    arr2[i] = -arr[i]
  }
  return arr2
}

const mapToNoChange = arr => {
  return arr
}

const mapToDouble = arr => {
  const arr2 = []
  for (let i = 0; i < arr.length; i++) {
    arr2[i] = 2 * arr[i]
  }
  return arr2
}

const mapToSquare = arr => {
  const arr2 = []
  for (let i = 0; i < arr.length; i++) {
    arr2[i] = arr[i] * arr[i]
  }
  return arr2
}

const reduceToTotal = (arr, start = 0) => {
  for (let i = 0; i < arr.length; i++) {
    start += arr[i]
  }
  return start
}

const reduceToAllTrue = arr => {
  for (let i = 0; i < arr.length; i++) {
    if (!arr[i]) {
      return false
    }
  }
  return true
}

const reduceToAnyTrue = arr => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      return true
    }
  }
  return false
}

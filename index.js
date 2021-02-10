function mapToNegativize(arr){
  let newArr = []
  for (let i = 0; i < arr.length; i++){
    newArr.push(-1 * arr[i])
  }
  return newArr
}

function mapToNoChange(arr){
  let newArr = []
  for (let i = 0; i < arr.length; i++){
    newArr.push(arr[i])
  }
  return newArr
}

function mapToDouble(arr){
  let newArr = []
  for (let i = 0; i < arr.length; i++){
    newArr.push(2 * arr[i])
  }
  return newArr
}

function mapToSquare(arr){
  let newArr = []
  for (let i = 0; i < arr.length; i++){
    newArr.push(arr[i] * arr[i])
  }
  return newArr
}

function reduceToTotal(arr, start = 0) {
  let total = start
  for (let i = 0; i < arr.length; i++){
    total += arr[i]
  }
  return total
}

function reduceToAllTrue(arr) {
  for (let i = 0; i < arr.length; i++){
    if (arr[i] === false) {
      return false
    }
  }
  return true
}

function reduceToAnyTrue(arr) {
  let value = false;

  for (let i = 0; i < arr.length; i++){
    if (arr[i] === true){
      value = true
    }
  }
  return value
}

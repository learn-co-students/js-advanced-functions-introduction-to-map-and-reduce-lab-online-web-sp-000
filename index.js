function mapToNegativize (arr) {
  let newArr = []
  arr.forEach(num => newArr.push(num * -1))
  return newArr
}

function mapToNoChange (arr){
  return arr
}

function mapToDouble (arr){
  let newArr = []
  arr.forEach(num => newArr.push(num * 2))
  return newArr
}

function mapToSquare (arr){
  let newArr = []
  arr.forEach(num => newArr.push(num ** 2))
  return newArr
}

function reduceToTotal (arr, start=0){
  let starting = start
  arr.forEach(num => {starting = starting + num})
  return starting
}

function reduceToAllTrue(arr){
  let start = true
  arr.forEach(val => {
    if (!!val === false) {
      start = false
    }
  })
  return start
}

function reduceToAnyTrue(arr){
  let start = false
  arr.forEach(val => {
    if (!!val === true) {
      start = true
    }
  })
  return start
}

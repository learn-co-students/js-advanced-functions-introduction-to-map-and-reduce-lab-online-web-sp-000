// Your code here
function mapToNegativize(arr) {
    let answer = []
    for (let i = 0; i < arr.length; i++ ) {
        answer.push(-1 * arr[i])
    }
    return answer
  }
  
  function mapToNoChange(arr) {
    let answer = []
    for (let i = 0; i < arr.length; i++ ) {
        answer.push(arr[i])
    }
    return answer
  }
  
  function mapToDouble(arr) {
    let answer = []
    for (let i = 0; i < arr.length; i++ ) {
        answer.push(2 * arr[i])
    }
    return answer
  }
  
  function mapToSquare(arr) {
    let answer = []
    for (let i = 0; i < arr.length; i++ ) {
        answer.push(arr[i] * arr[i])
    }
    return answer
  }
  
  function reduceToTotal(arr, startingPoint=0) {
    let answer = startingPoint
    for (let i = 0; i < arr.length; i++ ) {
        answer = answer + arr[i]
    }
    return answer
  }
  
  function reduceToAllTrue(arr) {
    for (let i = 0; i < arr.length; i++ ) {
      if (!arr[i]) return false
    }
    return true
  }
  
  function reduceToAnyTrue(arr) {
    for (let i = 0; i < arr.length; i++ ) {
      if (arr[i]) return true
    }
    return false
  }
// Your code here
function mapToNegative(arr) {
    r = []
    for(let i = 0; i < arr.length; i++) {
        r.push(-1 * arr[i])
    }
    return r
}

function mapToNoChange(arr) {
    r = []
    for(let i = 0; i < arr.length; i++) {
        r.push(arr[i])
    }
    return r
}

function mapToDouble(arr) {
    r = []
    for(let i = 0; i < arr.length; i++) {
        r.push(2 * arr[i])
    }
    return r
}

function mapToSquare(arr) {
    r = []
    for(let i = 0; i < arr.length; i++) {
        r.push(arr[i] * arr[i])
    }
    return r
}

function reduceToTotal(src, startingPoint=0) {
    let total = startingPoint
    for (let i = 0; i < src.length; i++ ) {
      total = total + src[i]
    }
    return total
  }
  
  function reduceToAllTrue(src) {
    for (let i = 0; i < src.length; i++ ) {
      if (!src[i]) return false
    }
    return true
  }
  
  function reduceToAnyTrue(src) {
    for (let i = 0; i < src.length; i++ ) {
      if (src[i]) return true
    }
    return false
  }
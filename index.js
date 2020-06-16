// Your code here
function mapToNegativize(src) {
    let r = []
    for (let i = 0; i < src.length; i++ ) {
      r.push(-1 * src[i]) // Unique work
    }
    return r
  }
   
  function mapToNoChange(src) {
    let r = []
    for (let i = 0; i < src.length; i++ ) {
      r.push(src[i]) // Unique work
    }
    return r
  }
   
  function mapToDouble(src) {
    let r = []
    for (let i = 0; i < src.length; i++ ) {
      r.push(2 * src[i]) // Unique work
    }
    return r
  }
   
  function mapToSquare(src) {
    let r = []
    for (let i = 0; i < src.length; i++ ) {
      r.push(src[i] * src[i]) // Unique work
    }
    return r
  }

function reduceToTotal(sourceArray, startingPoint=0) {
    let total = startingPoint
    for (let i = 0; i < sourceArray.length; i++) {
        total += sourceArray[i];
    }
    return total
}

function reduceToAllTrue(sourceArray) {
    for (const el of sourceArray) {
        if (!el) {
            return false
        } 
    }   
    return true
}

function reduceToAnyTrue(sourceArray) {
    for (const el of sourceArray) {
        if (!!el) {
            return true 
        }
    }
    return false
}


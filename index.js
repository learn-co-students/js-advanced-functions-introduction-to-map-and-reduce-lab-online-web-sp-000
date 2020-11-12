// Your code here

let mapToNegativize = function(sourceArray) {
    let newArray = []
    sourceArray.forEach(number => {
        number *= -1
        newArray.push(number)
        
    });
    return newArray
}

let mapToNoChange = function(sourceArray) {
    let newArray = []
        sourceArray.forEach(a => {
            newArray.push(a)
        })
        return newArray
}

let mapToDouble = function(sourceArray) {
    let newArray = []
        sourceArray.forEach(a => {
            newArray.push(a * 2)
        })
        return newArray
}

let mapToSquare = function(sourceArray) {
    let newArray = []
        sourceArray.forEach(a => {
            newArray.push(a**2)
        })
        return newArray
    
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
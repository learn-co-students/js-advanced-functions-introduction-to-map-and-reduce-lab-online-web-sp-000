// Your code here

const mapToNegativize = function(sourceArray){
    let newArray = []
    sourceArray.map(item => {
       newArray.push(  item * -1) 
    })
    return newArray
}

const mapToNoChange = function(sourceArray){
    return sourceArray
}

const mapToDouble = function(sourceArray){
    let newArray = []
    sourceArray.map(item => {
       newArray.push(  item * 2) 
    })
    return newArray
}

const mapToSquare = function(sourceArray){
    let newArray = []
    sourceArray.map(item => {
       newArray.push(  item * item) 
    })
    return newArray
}

 const reduceToTotal = function(sourceArray, startingPoint=0){
    let total = startingPoint
    for(let i=0; i< sourceArray.length; i++){
        total = total + sourceArray[i]
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




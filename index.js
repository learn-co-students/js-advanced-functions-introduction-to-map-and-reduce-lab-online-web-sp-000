// Your code here
function mapToNegativize(sourceArray) {
     let x = []
     for (let i = 0; i < sourceArray.length; i ++) {
          x.push(-1 * sourceArray[i])
     }
     return x
}

function mapToNoChange(sourceArray) {
     let x = []
     for (let i = 0; i < sourceArray.length; i ++) {
          x.push(sourceArray[i])
     }
     return x
}

function mapToDouble(sourceArray) {
     let x = []
     for (let i = 0; i < sourceArray.length; i++) {
          x.push(2 * sourceArray[i])
     }
     return x
}

function mapToSquare(sourceArray) {
     let x = []
     for (let i = 0; i < sourceArray.length; i++) {
          x.push(sourceArray[i] * sourceArray[i])
     }
     return x
}

function reduceToTotal(sourceArray, startingPoint=0) {
     let x = startingPoint
     for (let i = 0; i < sourceArray.length; i++) {
          x = x + sourceArray[i]
     }
     return x
}

function reduceToAllTrue(sourceArray) {
     for (let i =0; i < sourceArray.length; i ++) {
     if (!sourceArray[i]) return false
     }
     return true
}

function reduceToAnyTrue(sourceArray) {
     for (let i =0; i < sourceArray.length; i++) {
          if (sourceArray[i]) return true

     }
     return false
}
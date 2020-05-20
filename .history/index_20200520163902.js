// Your code here
function mapToNegativize(arr){
let negativeArray = []
for(let i =0; i < arr.length; i++){
    let each = -1 * arr[i]
    negativeArray.push(each)
}
return negativeArray
}

function mapToNoChange(sourceArray){
    return sourceArray
}

function mapToDouble(sourceArray){
    let dubArray = []
    for (let i = 0; i < sourceArray.length; i++) {
    //! ?  let each = sourceArray[i] *= 2
     let each = 2 * sourceArray[i]
     dubArray.push(each)
    }
    // console.log(dubArray)
    return dubArray
}
console.log(mapToDouble([2, 7, 5]))

function mapToSquare(arr){
    let squaredBox = []
    for (let i = 0; i < arr.length; i++) {
        let each = arr[i] * arr[i]
        squaredBox.push(each)
    }
    return squaredBox
}

function reduceToTotal(arr, startingPoint=0) {
let total = startingPoint
    for (let i = 0; i < arr.length; i++) {
        total = total + arr[i]
        // for (i of arr){
        // total = total + i
}
console.log(total)
    return total
}

// reduceToTotal([3,4,5], startingPoint=0)



/* 
    reduceToAllTrue returns true when all values are truthy
      1) reduces correctly
    reduceToAllTrue returns false when any value is falsy
      2) reduces correctly      
*/
// function reduceToAllTrue(arr){
//     for (each of arr){
//         if (!each) 
//             return false
        
//     }
//     return true
// }

// reduceToAllTrue([-1,10,15])

function reduceToAllTrue(src) {
  for (let i = 0; i < src.length; i++ ) {
    if (!src[i]) return false
    console.log(!src[i])
  }
  return true
}

function reduceToAnyTrue(src) {
  for (let i = 0; i < src.length; i++ ) {
    if (src[i]) return true
  }
  return false
}


/*
reduceToTotal(sourceArray, startingPoint)
reduceToAllTrue(sourceArray)
reduceToAnyTrue(sourceArray)
*/
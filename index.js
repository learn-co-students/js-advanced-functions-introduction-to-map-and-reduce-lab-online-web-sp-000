// Your code here
//with map
// function mapToNegativize(sourceArray){
//     return sourceArray.map(function(indexValue) {
//         return indexValue * -1
//     })
// }


//lab goal to reproduce
//since map makes new array, make new array 
function mapToNegativize(array) {
    let newArray = []
    for (let i = 0; i < array.length; i++ ) {
      newArray.push(array[i] * -1)
    }
    return newArray
  }

// function mapToNoChange(array){
//     return array
// }
function mapToNoChange(array) {
    let newArray = []
    for (let i = 0; i < array.length; i++ ) {
      newArray.push(array[i])
    }
    return newArray
  }

// function mapToDouble(array){
//     return array.map(function(indexValue){
//         return indexValue * 2;
//     })
// }
function mapToDouble(array) {
    let newArray = []
    for (let i = 0; i < array.length; i++ ) {
      newArray.push(array[i] * 2)
    }
    return newArray
  }

// function mapToSquare(array){
//     return array.map(function(indexValue){
//         return indexValue * indexValue;
//     })
// }
function mapToSquare(array) {
    let newArray = []
    for (let i = 0; i < array.length; i++ ) {
      newArray.push(array[i] * array[i])
    }
    return newArray
  }

//approximate
// function reduceToTotal(array){

//     return array.reduce((acc, var, start) => {
//         return acc + var;
//     }, start);
// }
function reduceToTotal(array, start=0) {
    let total = start
    for (let i = 0; i < array.length; i++ ) {
      total = array[i] + total
    }
    return total
  }

//unsure of reduceToAllTrue and reduceToAnyTrue for .reduce
function reduceToAllTrue(array) {
    for (let i = 0; i < array.length; i++ ) {
      if (!array[i]) return false
    }
    return true
  }

  function reduceToAnyTrue(array) {
    for (let i = 0; i < array.length; i++ ) {
      if (array[i]) return true
    }
    return false
  }






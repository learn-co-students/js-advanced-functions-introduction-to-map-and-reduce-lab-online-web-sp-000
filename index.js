// Your code here
function mapToNegativize(array) {
  return array.map(x => x * -1)
  // we are returning the transformed array by negative value
  ;
  console.log( mapToNegativize )
  // we then display sed array
}


function mapToNoChange(array){
  return array.map(x => x );

  console.log(mapToNoChange)
}

function mapToDouble(array){
  return array.map(x => x*2 );

  console.log (mapToDouble)
 }

 function mapToSquare(array){
  return array.map(x => x*x );

  // console.log (mapToSquare)
 }
 function reduceToTotal(array){
   let sum = 0

   array.reduce(reducer(accumulator,currentValue[,index[,array]])[,sum])



   return sum
 }

 // arr.reduce(callback( accumulator, currentValue[, index[, array]] )[, initialValue])

// reduce
 // takes all elements within an array and returns that sum total

//   const array1 = [1, 4, 9, 16];
//
// // pass a function to map
// const map1 = array1.map(x => x * 2);
//
// console.log(map1);
// // expected output: Array [2, 8, 18, 32]

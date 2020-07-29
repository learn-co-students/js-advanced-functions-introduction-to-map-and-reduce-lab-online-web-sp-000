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
 function reduceToTotal(array,total = 0 ){
   let sum = total
   // the inital
      for (let i = 0; i < array.length; i++ ){
        // itereate throughout the array
      sum += array[i]
      // currentValue = array[i]
      // adding the index[i] plus the prior value
      // adding each element into the array

      }



   return sum
 }

 // [1, 2, true, "razmatazz"] == true
 // [1, 2, true, "razmatazz", false] == false

 function reduceToAllTrue(array){

   for (let i = 0; i < array.length; i++ ){
   // we want to access the elements in the array instead of the entire array

   if( !array[i]  ) return false
   // if we expect one line return we can put conditional statement on one line

 }
  return true


 }
  // intergers, booleans, string = array
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


function reduceToAnyTrue(array){
  for (let i = 0; i < array.length; i++ ){

    if (!!array[i]) return true
  }
  return false
}

 function mapToNegativize (sourceArray) {
 let newNegative = []
 sourceArray.forEach(element => {
    element * -1
    newNegative.push (element * -1)
 });
return newNegative 
  }
 
  function mapToNoChange(sourceArray) {

     sourceArray.forEach(element => {
      
   })
     return sourceArray
  }

  function mapToDouble(sourceArray) {
     let newDouble = []
     sourceArray.forEach(element => {
        element * 2
      newDouble.push(element * 2)
     })
     return newDouble

  }


  function mapToSquare(sourceArray) {
   let newSquare = []
   sourceArray.forEach(element => {
      element * element
    newSquare.push(element * element)
   })
   return newSquare

}

// function reduceToTotal(sourceArray, startingPoint) {
//    const reducer = (sourceArray, startingPoint) => sourceArray + startingPoint;
//    return (sourceArray.reduce(reducer))
  
// }




function reduceToTotal(sourceArray, startingPoint = 0) {
   
   let accum =  startingPoint 
// we are saying here if we dont have starting point we will add 0 in first number 
// if they give us starting point number start from there 
   sourceArray.forEach(element=>{
     accum += element 
   
   //we adding accum value for each element in the array 
   
})
   return accum 
   }
   //Notes:
   /// so we set up starting point default = 0, so if we dont give starting point to reduce 
   //it will start iterating from number 0 not index what ever number is matching the number of sating point 
   // then it will add from that number and add next value in the array an so on 
   // let pretend like reduce total array like below 
   // reduceTotal([1,2,3,4], 1)
   // so accum is =1 now (on the test accum=0)
   // starting point will start from number 1 in array (element value(1))
   // so first is 1+1 = 2 then its goes second element in array (element value2)
   //so accum is = 2 now 
   //so 2+element value in array 2 =4
   //so accum is =4 now 
   //so 4+element value in array 3 =7
   //so accum is =7 now 
   ////so 7+element value in array 4 =11
   // so return accum = 11




function reduceToAllTrue(sourceArray) {
   let accum = true 
      sourceArray.forEach(element=>{
         console.log(element)
         console.log(accum)
      accum = accum && element 
      
         

      
   })
      
    return !!accum
   
}

function reduceToAnyTrue(sourceArray) {
   let accum = false  
      sourceArray.forEach(element=>{
         console.log(element)
         console.log(accum)
      accum = accum || element 
      
         

      
   })
      
    return !!accum
   
}


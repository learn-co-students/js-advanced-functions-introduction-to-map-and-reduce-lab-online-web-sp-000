// Your code here

function mapToNegativize(array){
    // let negativeArray = []
    // for(let i = 0; i<array.length; i++){
    //   negativeArray.push(array[i]*-1)
    // }
    // return negativeArray
    return array.map(e => e * -1)
}

function mapToNoChange(array){
    // let newArray = []
    // for(let i = 0; i<array.length; i++){
    //   newArray.push(array[i])
    // }
    // return newArray
    return array.map(e => e)

}


function mapToDouble(array){
    // let newArray = []
    // for(let i = 0; i<array.length; i++){
    //   newArray.push(array[i]*2)
    // }
    // return newArray

    return array.map(e => e * 2)
}

function mapToSquare(array){
    // let newArray = []
    // for(let i = 0; i<array.length; i++){
    //   newArray.push(array[i]**2)
    // }
    // return newArray

    return array.map(e => e ** 2)
}

 function reduceToTotal(array, startingPoint = 0){
  for(let i = 0; i < array.length; i++){
      startingPoint += array[i]
  }
   return startingPoint
 }

 
 function reduceToAllTrue(array){
   let name =  true
  for(let i = 0; i < array.length; i++){
     name=  name && array[i]
  }
   return !!name
 }

 function reduceToAnyTrue(array){
  let name = false
  for( let i = 0; i < array.length; i++ ){
 debugger
   name = name || array[i]
 }
    return !!name
 }

 


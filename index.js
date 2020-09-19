// Your code here

//our own veresion of collection processing methods 

//character of collection processing: visit each member of a collection 

//map produces a new array after applying work to each element 

//reduce: start w/ an initial value (aggregator or memo), do work, work updates aggregator or memo

//map functions: all return an ARRAY.
function mapToNegativize(sourceArray){
    const new_array = []
    for (let i=0; i < sourceArray.length; i++){
      new_array[i] = -sourceArray[i]
    }
    return new_array
  }

  function mapToNoChange(sourceArray){
    return sourceArray
  }

  function mapToDouble(sourceArray){
    const new_array = []
    for (let i=0; i< sourceArray.length; i++){
      new_array[i] = 2*sourceArray[i]
    }
    return new_array
  }

  function mapToSquare(sourceArray){
    const new_array = []
    for (let i=0; i< sourceArray.length; i++){
      new_array[i] = sourceArray[i]**2
    }
    return new_array
  }


  //reduce functions: all return a value 
  function reduceToTotal(sourceArray, startingPoint = 0){
    let total = startingPoint
    for(let i = 0; i < sourceArray.length; i++){
      total += sourceArray[i]
    }
    return total
  }

  function reduceToAllTrue(sourceArray){
    let value = true
    for(let i = 0; i < sourceArray.length; i++){
      if (sourceArray[i]){
        value = true}
      else {
        return false
      }
    }
    return value
  }
  
  function reduceToAnyTrue(sourceArray){
    let value = false
    for(let i=0; i<sourceArray.length; i++){
      if (!sourceArray[i]){
        value = false
      }
      else {
        return true
      }
    }
    return value
  }

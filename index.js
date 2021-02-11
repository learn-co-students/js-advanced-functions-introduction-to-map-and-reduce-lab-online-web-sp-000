function mapToNegativize(sourceArray){
  let newArray = []
  for (const element of sourceArray){
    newArray.push(element * -1)
  }
  return newArray
}
function mapToNoChange(sourceArray){
  return sourceArray
}
function mapToDouble(sourceArray){
  let newArray = []
  for (const element of sourceArray){
    newArray.push(element * 2)
  }
  return newArray
}
function mapToSquare(sourceArray){
  let newArray = []
  for (const element of sourceArray){
    newArray.push(element ** 2)
  }
  return newArray
}
function reduceToTotal(sourceArray, startingPoint = 0){
  for (const element of sourceArray){
    startingPoint += element
  }
  return startingPoint
}
function reduceToAllTrue(sourceArray){
  let truthiness = []
  for (const element of sourceArray){
    truthiness.push(!!element)
  }
  return !truthiness.includes(false)
}
function reduceToAnyTrue(sourceArray){
  let truthiness = []
  for (const element of sourceArray){
    truthiness.push(!!element)
  }
  return truthiness.includes(true)
}

// Your code here
function mapToNegativize(array){
  let newArray = []
  for(let num of array){
    newArray.push(num*-1)
  }
  return newArray
}

function mapToNoChange(array){
  return array
}

function mapToDouble(array){
  let newArray = []
  for(const num of array){
    newArray.push(num*2)
  }
  return newArray
}

function mapToSquare(array){
  let newArray = []
  for(const num of array){
    newArray.push(num ** 2)
  }
  return newArray
}

//reduce Methods
function reduceToTotal(array, startingpoint = 0){
  let total = startingpoint
  for(const num of array){
    total += num
  }
  return total
}

function reduceToAllTrue(array, startingpointvalue = true){
  let total = Boolean(startingpointvalue)
  for(const bool of array){
    total = total && Boolean(bool);
  }
  return total
}

function reduceToAnyTrue(array, startingpointvalue = false){
  let total = Boolean(startingpointvalue)
  for(const bool of array){
    total = total || Boolean(bool);
  }
  return total
}
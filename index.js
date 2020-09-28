// Your code here
function mapToNegativize(numbers){
 let negativeNumbers = []
  for( var element of numbers){
    negativeNumbers.push(element * -1)
  }
  return negativeNumbers
}

function mapToNoChange(collection){
  return Object.assign([], collection)
}

function mapToDouble(numbers){
 let doubleNumbers = []
  for( var element of numbers){
    doubleNumbers.push(element * 2)
  }
  return doubleNumbers
}

function mapToSquare(numbers){
 let squareNumbers = []
  for( var element of numbers){
    squareNumbers.push(element * element)
  }
  return squareNumbers
}

function total(numbers){
  let total =  0
  for( var element of numbers){
    total = element + total
  }
  return total
}

function reduceToTotal(numbers, start = null){
  if (!start){
    return total(numbers)
  }else{
    return total(numbers) + start
  }
}

function reduceToAllTrue(collection){
  for( var element of collection){
    if (element === false){
      return false
    }
  }
  return true
}

function reduceToAnyTrue(collection){
  for( var element of collection){
    if (element === true){
      return true
    }
  }
  return false
}

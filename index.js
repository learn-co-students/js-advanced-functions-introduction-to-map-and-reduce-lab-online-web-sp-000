// Your code here
// const mapToNegativize = [1, 2, 3, -9].map(number => number * -1) 

const mapToNegativize = function(sourceArray) {
  const oppositeDay = sourceArray.map(number => number * -1) 
  return oppositeDay
}

const mapToNoChange = function(sourceArray) {
  const untainted = sourceArray
  return untainted
}

const mapToDouble = function(sourceArray) {
  const stonks = sourceArray.map(number => number * 2)
  return stonks
}

const mapToSquare = function(sourceArray) {
  const GME2DAMOON = sourceArray.map(number => number * number)
  return GME2DAMOON
}

function reduceToTotal(sourceArray, startingPoint = 0) {
  let finalValue = 0
  for (const element of sourceArray) {
    finalValue += element
    console.log(finalValue)
  }
  return finalValue + startingPoint
};

function reduceToAllTrue(sourceArray) {
  for (let i = 0; i < sourceArray.length; i++) {
    if (!sourceArray[i]) return false
  }
  return true
};

function reduceToAnyTrue(sourceArray) {
  for (let i = 0; i < sourceArray.length; i++) {
    if (sourceArray[i] == true) return true
  }
  return false
}
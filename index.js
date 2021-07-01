// Your code here
// MAP-LIKE FUNCTIONS
// returns an array with all values made negative
function mapToNegativize(sourceArray) {
  let negativizedArray = []
  sourceArray.forEach(num => negativizedArray.push(num * -1));
  return negativizedArray;
};

// returns an array with the original values
function mapToNoChange(sourceArray) {
  return sourceArray;
};

// returns an array with the original values multiplied by 2
function mapToDouble(sourceArray) {
  let newArray = [];
  for (const num of sourceArray) {
    newArray.push(num * 2)
  };
  return newArray;
};

// returns an array with the original values squared
function mapToSquare(sourceArray) {
  let newArray = [];
  for (const num of sourceArray) {
    newArray.push(num ** 2)
  };
  return newArray;
};

// REDUCE-LIKE METHODS
// returns a running total when given/ not given a starting point
function reduceToTotal(sourceArray, startingPoint=0){
  let total = startingPoint; 
  for (const num of sourceArray) {
    total += num;
  };
  return total;
};

// returns true when all values are truthy
// returns false when any value is falsy
function reduceToAllTrue(sourceArray) {
  let trueOrFalse = true;
  for (const ele of sourceArray) {
    trueOrFalse = (trueOrFalse && !!ele)
  };
  return trueOrFalse;
}; 

// returns true when a true value is present
// returns false when no true value is present
function reduceToAnyTrue(sourceArray) {
  // let trueOrFalse = false;
  for (const ele of sourceArray) {
    // trueOrFalse = (trueOrFalse || !!ele)
    if (!!ele) { return true }
  };
  // return trueOrFalse;
  return false;
};    
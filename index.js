let state;
// Your code here
function mapToNegativize(sourceArray) {
  return Array.from(sourceArray, x => x * -1)
}

function mapToNoChange(sourceArray) {
  return sourceArray.slice()
}

function mapToDouble(sourceArray) {
  return Array.from(sourceArray, x => x * 2)
}

function mapToSquare(sourceArray) {
  return Array.from(sourceArray, x => x ** 2)
}

function reduceToTotal(sourceArray, startingPoint = 0) {
  let total = startingPoint;
  sourceArray.forEach(function(el) {
    total += el;
  })
  return total;
}

function reduceToAllTrue(sourceArray) {
  for(const element of sourceArray) {
    if (element == false) {
      return false;
    }
  }
  return true;
}

function reduceToAnyTrue(sourceArray) {
  for(const element of sourceArray) {
    if (element == true) {
      return true;
    }
  }
  return false;
}

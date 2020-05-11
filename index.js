// Your code here
function mapToNegativize(numbers) {
  return numbers.map(n => -n )
}

function mapToNoChange(numbers) {
  return numbers.map(n => n)
}

function mapToDouble(numbers) {
  return numbers.map(n => n * 2)
}

function mapToSquare(numbers) {
  return numbers.map(n => n * n)
}

function reduceToTotal(numbers, startingPoint = 0) {
  return numbers.reduce(
    function(total, currentValue) {
      return total + currentValue}, startingPoint)
}

function reduceToAllTrue(numbers) {
    return numbers.reduce(function(total, currentValue) {
        if (currentValue) {
            return true
        } else {
            return false
        }
    })
}

function reduceToAnyTrue(numbers) {
    return numbers.reduce(function(total, currentValue) {
        if (currentValue) {
            return true
        } else {
            return false
        }
    })
}

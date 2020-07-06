// Your code here
function mapToNegativize(array){
    return array.map(x => x * -1);
}

function mapToNoChange(array){
    return array.map(x => x);
}

function mapToDouble(array){
    return array.map(x => x*2);
}

function mapToSquare(array){
    return array.map(x => x*x);
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
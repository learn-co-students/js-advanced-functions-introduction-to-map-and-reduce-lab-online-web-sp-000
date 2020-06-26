// Your code here
const mapToNegativize = (arr) => {
    let result = []
    for(const number of arr){
        result.push(number - number - number)
    }
    return result;
}

const mapToNoChange = (arr) => {
    let result = []
    for(const number of arr){
        result.push(number)
    }
    return result;
}

const mapToDouble = (arr) => {
    let result = []
    for(const number of arr){
        result.push(number * 2)
    }
    return result;
}

const mapToSquare = (arr) => {
    let result = []
    for(const number of arr){
        result.push(number * number)
    }
    return result;
}

const reduceToTotal = (arr, start=0) => {
    let result = start;
    for(const element of arr){
        result += element
    }

    return result;
}
function reduceToAllTrue(arr) {
    for (let i = 0; i < arr.length; i++ ) {
      if (!arr[i]) return false
    }
    return true
  }

  function reduceToAnyTrue(arr) {
    for (let i = 0; i < arr.length; i++ ) {
      if (arr[i]) return true
    }
    return false
  }
// Your code here

let numbers = [4, 9, 16, 25];
function mapToNegativize(array) {
    return array.map(x => x - x*2);
}
function mapToNoChange(array) {
    let arr = []
    for (let index = 0; index < array.length; index++) {
        arr.push(array[index]);
    }
    return arr
}
function mapToDouble(array) {
    return array.map(x => x*2);
}
function mapToSquare(array) {
    return array.map(x => x*x);
}
function reduceToTotal(array, start=0) {
    let total = start
    for (let i = 0; i < array.length; i++ ) {
      total = total + array[i]
    }
    return total
  }
  //had to find help for last two. had no idea what is asked from me to do 
  function reduceToAllTrue(src) {
    for (let i = 0; i < src.length; i++ ) {
      if (!src[i]) return false
    }
    return true
  }
  
  function reduceToAnyTrue(src) {
    for (let i = 0; i < src.length; i++ ) {
      if (src[i]) return true
    }
    return false
  }
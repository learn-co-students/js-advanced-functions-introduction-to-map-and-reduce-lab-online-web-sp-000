// Your code here
 function mapToNegativize(source){
     return source.map(x => x - (x*2))
 }

 function mapToNoChange(source){
     return source
 }

 function mapToDouble(source){
     return source.map(x => x*2)
 }

 function mapToSquare(source){
     return source.map(x => x * x)
 }

 function reduceToTotal(array, start= 0) {
    const reducer = (accumulator, item) => {
        return accumulator + item;
      };
    return array.reduce(reducer, start)
}

function reduceToAllTrue(array) {
    return array.reduce((acc, element) => {
        if (element === false) {
            return false
        } else {
            return true
        }
    })
}

function reduceToAnyTrue(array) {
    return array.reduce((acc, element) => {
        if (element === true) {
            return true
        } else {
            return false
        }
    })
}
// Your code here
// array1.map(x => x * 2)
function mapToNegativize(array) {
    return array.map(x => x * -1)
}

function mapToNoChange(array) {
    return array
}

function mapToDouble(array) {
    return array.map(x => x * 2)
}

function mapToSquare(array) {
    return array.map(x => x * x)
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
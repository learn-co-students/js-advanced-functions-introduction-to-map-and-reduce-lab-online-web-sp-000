// Your code here
const mapToNegativize = function(array) {
    let new_array = array.map(x => -x)
    return new_array
}

const mapToNoChange = function(array) {
    let new_array = array.map(x => x)
    return new_array
}

const mapToDouble = function(array) {
    let new_array = array.map(x => x*2)
    return new_array
}

const mapToSquare = function(array) {
    let new_array = array.map(x => x**2)
    return new_array
}

const reduceToTotal = function(array, start="0") {
    let total = array.reduce((total, amount) => total + amount, parseInt(start));
    return total
}

const reduceToAllTrue = function(array) {
    let output = array.reduce((accumulator, currentValue) => !!currentValue);
    return output
}

const reduceToAnyTrue = function(array) {
    let output = array.reduce((accumulator, currentValue) => {
        if (!!currentValue == true) {
            return true
        } else {
            return false
        }
    });
    return output
}

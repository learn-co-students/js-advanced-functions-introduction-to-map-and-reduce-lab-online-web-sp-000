function mapToNegativize(array) {
    let newArray = []
    for (let el of array) {
        el *= -1;
        newArray.push(el);
    }
    return newArray;
}

function mapToNoChange(array) {
    return array.slice();
}

function mapToDouble(array) {
    let newArray = [];
    array.forEach(function(el){
        newArray.push(el * 2)
    })
    return newArray;
}

function mapToSquare(array) {
    let newArray = [];
    let squareMe = function(num) {
        newArray.push(num ** 2);
    }
    array.forEach(squareMe);
    return newArray;
}

function reduceToTotal(array, start=0) {
    let result = 0;
    for (let num of array) {
        result += num;
    }
    return result += start;
}

function reduceToAllTrue(array) {
    let result = true;
    let callback = function(num) {
        if (Boolean(num) === false){
            result = false;
        };
    }
    array.forEach(callback);
    return result;
}

function reduceToAnyTrue(array) {
    let result = false;
    for (let num of array) {
        if (!!num === true) {
            result = true;
        };
    };
    return result;
}
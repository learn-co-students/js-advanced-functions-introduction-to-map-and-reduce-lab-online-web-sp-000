// Your code here
function mapToNegativize(arr) {
    const newArr = [];
    arr.forEach(n => newArr.push(n * -1));
    return newArr;
}

function mapToNoChange(arr) {
    const newArr = [];
    arr.forEach(i => newArr.push(i));
    return newArr;
}

function mapToDouble(arr) {
    const newArr = [];
    arr.forEach(n => newArr.push(n*2));
    return newArr;
}

function mapToSquare(arr) {
    const newArr = [];
    arr.forEach(n => newArr.push(n*n));
    return newArr;
}

function reduceToTotal(arr, total = 0) {
    arr.forEach(n => total += n);
    return total;
}

function reduceToAllTrue(arr) {
    let result = true;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]) {result = true}
        else {result = false}
    }
    return result;
}

function reduceToAnyTrue(arr) {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]) {return true}
    }
    return false;
}


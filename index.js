// Your code here
function mapToNegativize(array) {
    let i = 0; 
    let newArray = []
    while (i < array.length) {
        newArray.push(array[i] * -1);
        i++;
    }
    return newArray;
}

function mapToNoChange(array) {
    return array;
}

function mapToDouble(array) {
    let i = 0; 
    let newArray = []
    while (i < array.length) {
        newArray.push(array[i] * 2);
        i++;
    }
    return newArray;
}

function mapToSquare(array) {
    let i = 0; 
    let newArray = []
    while (i < array.length) {
        newArray.push(array[i] * array[i]);
        i++;
    }
    return newArray;
}

function reduceToTotal(array, point) {
    let accu = 0;
    let i = 0; 
    if (point) {
        accu = point;
    } 
    while (i < array.length) {
        accu += array[i];
        i++;
    }
    return accu;
}

function reduceToAllTrue(array) {
    let accu = true;
    let flag = 0;
    let i = 0;
    while (i < array.length) {
        if (array[i]) {
            flag = 0;
        } else {
            flag += 1;
        }
        i++
    }
    if (flag > 0) {
        accu = false;
    }
    return accu;
}

function reduceToAnyTrue(array) {
    let accu = false;
    let flag = 0;
    let i = 0;
    while (i < array.length) {
        if (array[i]) {
            flag = 1;
        } else {
            flag += 0;
        }
        i++
    }
    if (flag > 0) {
        accu = true;
    }
    return accu;
}
// Your code here
function mapToNegativize(array) {
    let returnArray = [];
    array.forEach(element => {
        returnArray.push(element * -1)
    });
    return returnArray
}

function mapToNoChange(array) {
    return array
}

function mapToDouble(array) {
    let returnArray = [];
    array.forEach(element => {
        returnArray.push(element * 2)
    });
    return returnArray
}

function mapToSquare(array) {
    let returnArray = [];
    array.forEach(element => {
        returnArray.push(element * element)
    });
    return returnArray
}

function reduceToTotal(array, num = 0) {
    array.forEach(element => {
        num += element
    })
    return num;
}

function reduceToAllTrue(array) {
    let results;
    array.forEach(element => {
        if (!element === true) {
            results = false
        }
    })
    return results === false ? false : true
}

function reduceToAnyTrue(array) {
    let results;
    array.forEach(element => {
        if (!!element === true) {
            results = true;
        }
    })
    return results === true ? true : false
}
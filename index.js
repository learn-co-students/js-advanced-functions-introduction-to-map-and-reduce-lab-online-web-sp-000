// Your code here
function mapToNegativize(sourceArray) {
    let r = [];
    for (let i = 0; i < sourceArray.length; i++) {
        r.push(sourceArray[i]*(-1))
    };
    return r
}

function mapToNoChange(sourceArray) {
    let r = [];
    for (let i = 0; i < sourceArray.length; i++) {
        r.push(sourceArray[i])
    };
    return r
}

function mapToDouble(sourceArray) {
    let r = [];
    for (let i = 0; i < sourceArray.length; i++) {
        r.push(sourceArray[i] * 2)
    };
    return r
}

function mapToSquare(sourceArray) {
    let r = [];
    for (let i = 0; i < sourceArray.length; i++) {
        r.push(sourceArray[i]**2)
    };
    return r
}

const reducer = (accumulator, currentVal) => accumulator + currentVal;

function reduceToTotal(sourceArray, startingPoint=0) {
    let total = startingPoint;
    for (let i = 0; i < sourceArray.length; i++) {
      total = total + sourceArray[i];
    };
    return total;
}

function reduceToAllTrue(sourceArray) {

    for (let i = 0; i < sourceArray.length; i++) {
        if (!sourceArray[i]) {
            return false
        }
    }
    return true;
//    return sourceArray.reduce((accumulator, currentValue) => {
//        if (accumulator) {
//         return accumulator = !!currentValue
//        }
//        return accumulator
//    })
}

function reduceToAnyTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++) {
        if (sourceArray[i]) {
            return true;
        }
    }
    return false;
    // return sourceArray.reduce((accumulator, currentValue) => {
    //  console.log("acc", accumulator)
    //  console.log(currentValue)
    //  console.log(!!currentValue)
    //     if (!accumulator) {
    //      return accumulator = !!currentValue
    //     }
    //     return accumulator
    // })
 }
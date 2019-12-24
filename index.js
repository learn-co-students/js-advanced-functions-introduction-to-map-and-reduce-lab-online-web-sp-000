// Your code here

// map-like

function mapToNegativize (sourceArray) {
    const newArray = []
    sourceArray.forEach(element => {
        newArray.push(element * -1);
    });
    return newArray;
};

function mapToNoChange (sourceArray){
    const newArray = [];
    sourceArray.forEach(element => {
        newArray.push(element);
    });
    return newArray;
};

function mapToDouble(sourceArray) {
    const newArray = [];
    sourceArray.forEach(element => {
        newArray.push(element * 2);
    });
    return newArray;
}

function mapToSquare(sourceArray) {
    const newArray = [];
    sourceArray.forEach(element => {
        newArray.push(element ** 2);
    });
    return newArray;
}


// reduce-like

//reduceToTotal returns a running total when not given a starting point
//reduceToTotal returns a running total when given a starting point
function reduceToTotal(sourceArray, startingPoint=0) {
    let total = startingPoint;
    for (let i = 0; i < sourceArray.length; i++) {
        total = total + sourceArray[i];
    }
    return total;
}

//reduceToAllTrue returns true when all values are truthy
//reduceToAllTrue returns false when any value is falsy
function reduceToAllTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++) {
        if (!sourceArray[i]) return false
    }
    return true
}

//reduceToAnyTrue returns true when a true value is present
//reduceToAnyTrue returns false when no true value is present
function reduceToAnyTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++) {
        if (sourceArray[i]) return true
    }
    return false
}
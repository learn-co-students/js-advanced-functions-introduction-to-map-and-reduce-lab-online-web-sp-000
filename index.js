function mapToNegativize(sourceArray) {
    return sourceArray.map(x => x * -1)
}

 function mapToNoChange(sourceArray) {
    return sourceArray.map(x => x)
 }

function mapToDouble(sourceArray) {
    return sourceArray.map(x => x * 2)
}

function mapToSquare(sourceArray) {
    return sourceArray.map(x => x * x)
}

function reduceToTotal(sourceArray, startingPoint=0) {
    return sourceArray.reduce(function(a, b) {
        return a + b
    }, startingPoint);
}

function reduceToAllTrue(sourceArray) {
    return sourceArray.reduce(function(, a) {
    
    })

}

function reduceToAnyTrue(sourceArray) {

}
function mapToNegativize(sourceArray) {
    let result = sourceArray.map(function(num) {
        return num * -1;
    });
    return result;
}; 

function mapToNoChange(sourceArray) {
    let result = sourceArray.map(function(num) {
        return num;
    });
    return result;
};

function mapToDouble(sourceArray) {
    let result = sourceArray.map(function(num) {
        return num * 2;
    });
    return result;
};

function mapToSquare(sourceArray) {
    let result = sourceArray.map(function(num) {
        return num * num;
    });
    return result;
};

function reduceToTotal(sourceArray, startingPoint){
    let answer = sourceArray.reduce(
        (accumulator, currentValue) => (currentValue * 2) + startingPoint,
    startingPoint
  )
};


function reduceToAllTrue(sourceArray){

};

function reduceToAnyTrue(sourceArray){

};
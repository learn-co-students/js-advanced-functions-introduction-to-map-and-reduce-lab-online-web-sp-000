// Your code here
function mapToNegativize(sourceArray){
    return sourceArray.map(x => x * -1);
}

function mapToNoChange(sourceArray){
    return sourceArray.map(x => x);
}

function mapToDouble(sourceArray){
    return sourceArray.map(x => x * 2);
}

function mapToSquare(sourceArray){
    return sourceArray.map(x => x ** 2);
}

function reduceToTotal(sourceArray, startingPoint=0){

    const reducer = (accumulator, item) =>{
        return accumulator + item;
    }
    return sourceArray.reduce(reducer, startingPoint);

}

function reduceToAllTrue(sourceArray){

    const reducer = (accumulator, item) =>{
        return  accumulator && !!item;
    }    
    return sourceArray.reduce(reducer, true);
}


function reduceToAnyTrue(sourceArray){

    const reducer = (accumulator, item) =>{
        return  !!accumulator || !!item;
    }    
    return sourceArray.reduce(reducer, false);
}
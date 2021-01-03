// Your code here

function mapToNegativize(array){
      return array.map(x => x * -1);
}

function mapToNoChange(array){
    return array.map(x => x );
}

function mapToDouble(array){
    return array.map(x => x * 2);
}

function mapToSquare(array){
    return array.map(x => x*x);
}

function reduceToTotal(array, startingPoint = 0){
    const reducer = function(accumulator, currentValue){ return accumulator + currentValue }

    return array.reduce(reducer, startingPoint)
}

function reduceToAllTrue(array){

    const reducer = function(accumulator, currentValue){  
        if(!!accumulator == true && !!currentValue == true){
            return true;
        } else {
            return false;
        }
    }
    return array.reduce(reducer, true)
}

function reduceToAnyTrue(array){
    const reducer = function(accumulator, currentValue){  
        if(accumulator == true){
            return true
        } else {
            return !!currentValue
        } 
    }
    return array.reduce(reducer, false)
}
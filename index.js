// Your code here
const mapToNegativize = function(sourceArray){
    const arr = [];
    
    for(let i = 0; i < sourceArray.length; i++){
        arr[i] = sourceArray[i] * -1;
    }
    return arr;
};
const mapToNoChange = function(sourceArray){
    const arr = [];
    for (const x of sourceArray){
        arr.push(x);
    }
    return arr;
};
const mapToDouble = function(sourceArray){
    const arr = [];
    for(const x of sourceArray){
        arr.push(x*2);
    }
    return arr;
};
const mapToSquare = function(sourceArray){
    const arr = [];
    for (const x of sourceArray){
        arr.push(x ** 2);
    }
    return arr;
};

const reduceToTotal = function(sourceArray, startingPoint = 0){
    let total = startingPoint;
    for( const x of sourceArray){
        total += x;
    }
    return total;
};
const reduceToAllTrue = function(sourceArray){
    for ( const x of sourceArray){
        if (!x) return false;  // return false if any value if falsey
    }
    return true; 
};
const reduceToAnyTrue = function(sourceArray){
    for ( const x of sourceArray ){
        if (x) return true;  
    }
    return false; 
};
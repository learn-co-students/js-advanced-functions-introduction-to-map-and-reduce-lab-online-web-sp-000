// Your code here
//`mapToNegativize(sourceArray)`
//`mapToNoChange(sourceArray)`
//`mapToDouble(sourceArray)`
//`mapToSquare(sourceArray)`
 
function mapToNegativize(sourceArray){
    let newArray = [];
    sourceArray.forEach(function(element){
        newArray.push(element * -1);
    })
    return newArray;
}

function mapToNoChange(sourceArray){
    let newArray = [];
    sourceArray.forEach(function(element) {
        newArray.push(element);
    });
    return newArray;
}

function mapToDouble(sourceArray){
    let newArray = [];
    sourceArray.forEach(function(element) {
        newArray.push(element * 2)
    })
    return newArray
}

function mapToSquare(sourceArray){
    let newArray = [];
    sourceArray.forEach(function(element){
        newArray.push(element ** 2);
    });
    return newArray
}

function reduceToTotal(sourceArray, startingPoint){
    let value = 0;
    if(startingPoint){
        value = startingPoint;
    }   
    sourceArray.forEach(function(element){
      value = value + element;  
    });
    return value
}

function reduceToAllTrue(sourceArray){
    let result = true;
    sourceArray.forEach(function(element){
        if(!element){
            result = false;
        }
    })
    return result;
}

function reduceToAnyTrue(sourceArray){
    let result = false;
    sourceArray.forEach(function(element){
        if(!!element){
            result = true;
        }
    })
    return result;
}

//(sourceArray, startingPoint)`
//- `reduceToAllTrue(sourceArray)`
//- `reduceToAnyTrue(sourceArray)

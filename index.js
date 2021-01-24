function mapToNegativize(sourceArray) {
    let result = []
for (const e of sourceArray) {
    result.push(e * -1);
    
}
return result;
}


function mapToNoChange(sourceArray) {
    let result = []
    for (const e of sourceArray) {
        result.push(e);
        
    }
    return result;
}
function mapToDouble(sourceArray) {
    let result = []
    for (const e of sourceArray) {
        result.push(e * 2);
        
    }
    return result;
}
function mapToSquare(sourceArray) {
    let result = []
    for (const e of sourceArray) {
        result.push(e ** 2);
        
    }
    return result;
}

function reduceToTotal(sourceArray, startingPoint = 0) {
let result = startingPoint
for (const e of sourceArray) {
    result += e;
}
return result;

}
function reduceToAllTrue(sourceArray) {
    let result = true;
    for (const e of sourceArray) {
        e == false ? result = false : result = true;
    }
    return result;


}
function reduceToAnyTrue(sourceArray) {
    let result = false;
    for (const e of sourceArray) {
        e == true ? result = true : result = false;
    }
    return result;



}
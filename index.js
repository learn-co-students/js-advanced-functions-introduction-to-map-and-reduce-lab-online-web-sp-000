// Your code here
const sourceArray = [1,2,3,4,5];

function mapToNegativize(sourceArray) {
    let r = []
    for (let i = 0; i < sourceArray.length; i++ )
    {
      r.push(-1 * sourceArray[i])
    }
   return r
};

mapToNegativize(sourceArray);

function mapToNoChange(sourceArray) {
    let r = []
    for (let i = 0; i <sourceArray.length; i++)
{
    r.push(sourceArray[i])
}
    return r
};

mapToNoChange(sourceArray);

function mapToDouble(sourceArray) {
    let r = []
    for (let i = 0; i < sourceArray.length; i++)
    {
        r.push(sourceArray[i] * 2)
    }
    return r
};

mapToDouble(sourceArray);

function mapToSquare(sourceArray) {
    let r = []
    for (let i = 0; i < sourceArray.length; i++)
    {
        r.push(sourceArray[i] * sourceArray[i])
    }
    return r 
}; 

mapToSquare(sourceArray);

function reduceToTotal(sourceArray, startingPoint=0) {
    let total = startingPoint
    for (let i = 0; i <sourceArray.length; i++)
    {
        total = total + sourceArray[i]
    }
    return total
 
};

reduceToTotal(sourceArray, startingPoint=0);

function reduceToAllTrue(sourceArray) {
    debugger;
    for (let i = 0; i <sourceArray.length; i++)
    {
        if (!sourceArray[i]) return false
    }
    return true
};

reduceToAllTrue(sourceArray);

function reduceToAnyTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++)
    {
        
        if (sourceArray[i]) return true
    } 
    return false
};

reduceToAnyTrue(sourceArray);
function mapToNegativize(arr) {
    let newArr = [];
    for(let i=0; i < arr.length; i++) {
        newArr.push(arr[i] * -1);
    }
    return newArr;

    // return arr.map((e)=> {return e * -1; });
}

function mapToNoChange(arr) {
    let newArr = [];
    for(let i=0; i < arr.length; i++) {
        newArr.push(arr[i]);
    }
    return newArr;

    // return arr;
    // return arr.map((e) => { return e; })
}

function mapToDouble(arr) {
    let newArr = [];

    for(let i=0; i < arr.length; i++) {
        newArr.push(arr[i] * 2);
    }
    return newArr;

    // return arr.map((e) => { return e * 2; })
}

function mapToSquare(arr) {
    let newArr = [];

    for(let i = 0; i < arr.length; i++) {
        newArr.push(arr[i] * arr[i]);
    }
    return newArr;

    // return arr.map((e) => { return e ** 2; })
}

function reduceToTotal(arr, initialValue=0) {
    let total = initialValue;

    for(let i = 0; i < arr.length; i++) {
        // console.log(total)
        total += arr[i]
    }
    return total
    
    // return arr.reduce(function(p, c) {
    //     return p + c;
    // }, 0);
}
// reduceToTotal([2, 4, 6])
// reduceToTotal([2, 4, 6], 10)

function reduceToAllTrue(arr){
    for(let i = 0; i < arr.length; i++) {
      if(!arr[i]) { return false }
      }
    return true
}
// reduceToAllTrue([2,3,null])


function reduceToAnyTrue(arr) {
for(let i = 0; i < arr.length; i++) {
    if(arr[i]) { return true}
}
return false
}
//   reduceToAnyTrue([NaN,"",null]);
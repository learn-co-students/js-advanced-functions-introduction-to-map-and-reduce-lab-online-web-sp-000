
function mapToNegativize(array) {
    let newArray = [];

    for ( let i = 0; i < array.length; i++ ) {
        newArray.push(-array[i])
    };
    return newArray;
};



function mapToNoChange(array) {
    let newArray = [];

    for ( let i = 0; i < array.length; i++ ) {
        newArray.push(array[i])
    };
    return newArray;

};



  function mapToDouble(array) {
    let newArray = [];

    for ( let i = 0; i < array.length; i++ ) {
        newArray.push(2 * array[i])
    };
    return newArray;

};

function mapToSquare(array) {
    let newArray = [];

    for ( let i = 0; i < array.length; i++ ) {
        newArray.push( array[i] ** 2)
    };
    return newArray;

};



    function reduceToTotal(array, startingPoint = 0) {
        let sumSoFar = startingPoint;
    
        for ( let i = 0; i < array.length; i++ ) {
            sumSoFar += array[i]
        };
        return sumSoFar;
    
    };
    

    // describe("reduceToAllTrue returns true when all values are truthy", function() {
    //     it("reduces correctly", function(){
    //       sourceArray = [1, 2, true, "razmatazz"]
    //       expect(reduceToAllTrue(sourceArray)).to.be.true
    //     })
    //   })

      

function reduceToAllTrue(array) {

    for ( let i = 0; i < array.length; i++ ) {
        if ( !!array[i] === false ) {
            return false
        }
    };
    return true;
}


function reduceToAnyTrue(array) {
    for ( let i = 0; i < array.length; i++ ) {
        if ( !!array[i] === true ) {
            return true
        }
    };
    return false;
}


// Your code here
let myMap =
  fun =>
  sourceArray => {
    let newArray = []
    for ( let n of sourceArray ) {
      newArray.push( fun( n ) )
    }
    return newArray
  }

let mapToNegativize = myMap( x => -x )
let mapToNoChange = myMap( x => x )
let mapToDouble = myMap( x => 2 * x )
let mapToSquare = myMap( x => x * x )

let myReduce =
  fun =>
  ( sourceArray, memo = 0 ) => {

    for ( let n of sourceArray ) {
      memo = fun ( memo, n )
    }
    return memo
  }

let reduceToTotal = myReduce(( m, x ) => m + x )


let reduceToAllTrue = sourceArray => {
  let memo = true
  for ( let n of sourceArray ) {
    memo = !!n || false
  }
  return memo
}

let reduceToAnyTrue = sourceArray => {
  let memo = false
  for ( let n of sourceArray ) {
    memo = memo || !!n
  }
  return memo
}

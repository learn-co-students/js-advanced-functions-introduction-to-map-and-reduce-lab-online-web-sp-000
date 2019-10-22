// Your code here

function mapToNegativize(src) {
    let r = []
    for (let i = 0; i < src.length; i++ ) {
      r.push(-1 * src[i]) // Unique work
    }
    return r
  }
   
  function mapToNoChange(src) {
    let r = []
    for (let i = 0; i < src.length; i++ ) {
      r.push(src[i]) // Unique work
    }
    return r
  }
   
  function mapToDouble(src) {
    let r = []
    for (let i = 0; i < src.length; i++ ) {
      r.push(2 * src[i]) // Unique work
    }
    return r
  }
   
  function mapToSquare(src) {
    let r = []
    for (let i = 0; i < src.length; i++ ) {
      r.push(src[i] * src[i]) // Unique work
    }
    return r
  }

  function reduceToTotal(src) {
      let r = [] 
      for (let i = 0; i < src.length; i++) {
          r.push(src[i] < 6 ) 
      }
      return r 
  }

  function reduceToAllTrue(src) {
    let r = []
    for (let i = 0; i < src.length; i++) {
        r.push(src[i]) 
    }
    return r
  }

  function reduceToAnyTrue(src) {
      let r = [] 
      for (let i = 0; i < src.length; i++) {
          r.push(src[i])
      }
      return r 
  }
   
 


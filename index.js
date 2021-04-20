// Your code here
function mapToNegativize(num){
    let a= []
    for (let i=0; i< num.length; i++){a.push(-1 * num[i]
        )
    } return a
}

function mapToNoChange(num) {
  let a = []
  for (let i = 0; i < num.length; i++ ) {
    a.push(num[i])
  }
  return a
}
function mapToDouble(num) {
  let a = []
  for (let i = 0; i < num.length; i++ ) {
    a.push(2 * num[i])
  }
  return a
}

function mapToSquare(num) {
  let a = []
  for (let i = 0; i < num.length; i++ ) {
    a.push(num[i] * num[i])
  }
  return a
}

function reduceToTotal(num, startingPoint=0) {
  let total = startingPoint
  for (let i = 0; i < num.length; i++ ) {
    total = total + num[i]
  }
  return total
}

function reduceToAllTrue(num) {
  for (let i = 0; i < num.length; i++ ) {
    if (!num[i]) return false
  }
  return true
}

function reduceToAnyTrue(num) {
  for (let i = 0; i < num.length; i++ ) {
    if (num[i]) return true
  }
  return false
}
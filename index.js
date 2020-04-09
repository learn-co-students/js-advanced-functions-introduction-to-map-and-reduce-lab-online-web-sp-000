// mapping a value in the domain to a value in the range
function mapToNegativize(sourceArray) {
  let array = []
  for (const element of sourceArray) {
    array.push(element * -1)
  }
  return array
}

function mapToNoChange(sourceArray) {
  let array = sourceArray
  return array
}

function mapToDouble(sourceArray) {
  let array = []
  for (const element of sourceArray) {
    array.push(element * 2)
  }
  return array
}

function mapToSquare(sourceArray) {
  let array = []
  for (const element of sourceArray) {
    array.push(element * element)
  }
  return array
}

// does work to a memo or aggregator
function reduceToTotal(sourceArray, startingPoint) {
  let total = startingPoint ? startingPoint : 0
  for (const element of sourceArray) {
    total += element
  }
  return total
}
function reduceToAllTrue(sourceArray) {
  let status = true
  for (const element of sourceArray) {
    if (element == false) {
      status = false
    }
  }
  return status
}

function reduceToAnyTrue(sourceArray) {
  let status = false
  for (const element of sourceArray) {
    if (element == true) {
      status = true
    }
  }
  return status
}

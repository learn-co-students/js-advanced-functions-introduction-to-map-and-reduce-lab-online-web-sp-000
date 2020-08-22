// Your code here

function mapToNegativize(values) {
  let new_values = [];
  for (let i = 0; i < values.length; i++)
    {
      new_values.push(-1*values[i]);
    }
  return new_values;
}

function mapToNoChange(values) {
  let new_values = [];
  for (let i = 0; i < values.length; i++)
    {
      new_values.push(values[i]);
    }
  return new_values;
}

function mapToDouble(values) {
  let new_values = [];
  for (let i = 0; i < values.length; i++) {
    new_values.push(values[i]*2)
  }
  return new_values;
}

function mapToSquare(values) {
  let new_values = [];
  for (let i = 0; i < values.length; i++) {
    new_values.push(values[i]**2)
  }
  return new_values;
}

function reduceToTotal(values, startingPoint = 0) {
  for (let i = 0; i < values.length; i++) {
    startingPoint += values[i]
  }
  return startingPoint;
}

function reduceToAllTrue(values) {
  let truthyValue;
  for (let i = 0; i < values.length; i++) {
    if (Boolean(values[i]) == true) {
      truthyValue = true;
    } else {
      truthyValue = false;
      break;
    }
  }
    return truthyValue;
}

function reduceToAnyTrue(values) {
  let truthyValue;
  for (let i = 0; i < values.length; i++) {
    if (Boolean(values[i]) == true) {
      truthyValue = true;
      break;
    } else {
      truthyValue = false;
    }
  }
  return truthyValue;
}

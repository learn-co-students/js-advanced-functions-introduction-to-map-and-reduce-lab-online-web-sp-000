// Your code here
function mapToNegativize(sourceArray) {
  let newArray = [];
  sourceArray.forEach( element => {
    newArray.push(element * -1);
  });
  return newArray;
};


function mapToNoChange(sourceArray) {
  let newArray = [];
  sourceArray.forEach(element => {
    newArray.push(element);
  });
  return newArray;
};

function mapToDouble(sourceArray) {
  let newArray = [];
  sourceArray.forEach(element => {
    newArray.push(element * 2);
  });
  return newArray;
};

function mapToSquare(sourceArray) {
  let newArray = [];
  sourceArray.forEach(element => {
    newArray.push(element ** 2);
  });
  return newArray;
};

function reduceToTotal(sourceArray, startingPoint = 0) {
  let start = startingPoint;
  for (let i=0; i<sourceArray.length; i++) {
    start += sourceArray[i];
  };
  return start;
};

function reduceToAllTrue(sourceArray) {
  let answer = true;
  sourceArray.forEach(element => {
    if (element === false) {
      answer = false;
      return answer;
    }
  })
  return answer;
};

function reduceToAnyTrue(sourceArray) {
  let answer = false;
  sourceArray.forEach(element => {
    if (element === true) {
      answer = true;
      return answer;
    }
  })
  return answer;
};

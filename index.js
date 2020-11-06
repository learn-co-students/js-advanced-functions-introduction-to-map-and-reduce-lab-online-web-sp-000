// Your code here
function mapToNegativize(array) {
  return array.map(x => x*-1)
};

function mapToNoChange(array) {
  return array;
}

function mapToDouble(array) {
  return array.map(x => x * 2);
};

function mapToSquare(array) {
  return array.map(x => x * x)
}

function reduceToTotal(array) {
  const answer = array.reduce((acc, val) => acc + val);
  return answer;
};

function reduceToAllTrue(array) {
  const answer = array.reduce((val) => Boolean(val));
  return answer;
};

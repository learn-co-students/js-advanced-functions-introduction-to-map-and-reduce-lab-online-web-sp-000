function mapToNegativize(sourceArray) {
   return sourceArray.map(e => e * -1);
}

function mapToNoChange(sourceArray) {
   return sourceArray.map(e => e);
}

function mapToDouble(sourceArray) {
   return sourceArray.map(e => e * 2);
}

function mapToSquare(sourceArray) {
   return sourceArray.map(e => e * e);
}

// array.reduce(function(total, currentValue, currentIndex, arr), initialValue);

function reduceToTotal(sourceArray, startingPoint=0) {
   return sourceArray.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
   }, startingPoint);
}

function reduceToAllTrue(sourceArray) {
   return sourceArray.reduce((accumulator, currentValue) => {
      if (currentValue){
         return true;
      }
      return false;
   });
}

function reduceToAnyTrue(sourceArray) {
   return sourceArray.reduce((accumulator, currentValue) => {
      if (!currentValue){
         return false;
      }
      return true;
   });
}

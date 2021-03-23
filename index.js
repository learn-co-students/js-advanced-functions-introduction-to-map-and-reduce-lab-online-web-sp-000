function mapToNegativize(sourceArray) { return sourceArray.map(element => element * -1) }
function mapToNoChange(sourceArray) { return sourceArray}
function mapToDouble(sourceArray) { return sourceArray.map(element => element * 2) }
function mapToSquare(sourceArray) { return sourceArray.map(element => element ** 2) }

function func(total, num) { return total + num }
function reduceToTotal(sourceArray, startingPoint=0) {return sourceArray.reduce(func, startingPoint)}

function allTruthyFunc(current, el) { return !!current && !!el }
function anyTruthyFunc(current, el) { return !!current || !!el }
function reduceToAllTrue(src) { return src.reduce(allTruthyFunc) }
function reduceToAnyTrue(src) { return src.reduce(anyTruthyFunc) }
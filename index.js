function mapToNegativize(values) {
    return values.map(value => value * -1)
}

function mapToNoChange(values) {
    return values
}

function mapToDouble(values) {
    return values.map(value => value * 2)
}

function mapToSquare(values) {
    return values.map(value => value ** 2)
}

function reduceToTotal(values, start = 0) {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return values.reduce(reducer, start)
}

function reduceToAllTrue(values) {
    const reducer = (accumulator, currentValue) => accumulator && !!currentValue;
    return values.reduce(reducer)
}

function reduceToAnyTrue(values) {
    const reducer = (accumulator, currentValue) => accumulator || !!currentValue;
    return values.reduce(reducer)
}
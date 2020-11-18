// Your code here

function mapToNegativize(collection) {
    return collection.map(function(num) {return num - (2 * num)});
};

function mapToNoChange(collection) {return collection};

function mapToDouble(collection) {
    return collection.map(function(num) {return 2 * num});
};

function mapToSquare(collection) {
    return collection.map(function(num) {return num ** 2});
};

function reduceToTotal(collection, start=0) {
    return start + collection.reduce(function(total, num) {return total + num});
};

function reduceToAllTrue(collection) {
    return collection.reduce(function(past, present) {return !!past && !!present});
};

function reduceToAnyTrue(collection) {
    return collection.reduce(function(past, present) {return !!past || !!present});
};
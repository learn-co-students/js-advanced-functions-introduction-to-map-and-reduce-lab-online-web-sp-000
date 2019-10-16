function mapToNegativize(num) {
    let array = []
    for (let i = 0; i < num.length; i++) {
        array.push(num[i] * -1)
    }
    return array
}

function mapToNoChange (num) {
    let foo = []
    for (let i = 0; i < num.length; i++) {
        foo.push(num[i])
    }
    return foo
}

function mapToDouble (num) {
    let foo = []
    for (let i = 0; i < num.length; i++) {
        foo.push(num[i] * 2)
    }
    return foo
}

function mapToSquare (num) {
    let foo = []
    for(let i = 0; i < num.length; i++) {
        foo.push(num[i] * num[i])
    }
    return foo
}

function reduceToTotal (num, start = 0) {
    let foo = start
    for (let i = 0; i < num.length; i++) {
        foo = num[i] + foo
    }
    return foo
}

function reduceToAllTrue (num) {
    for (let i = 0; i < num.length; i++) {
        if (!num[i]) return false
    }
    return true
}

function reduceToAnyTrue (num) {
    for (let i = 0; i < num.length; i++) {
        if (num[i]) return true
    }
    return false
}
function receivesAFunction(callback) {
    return callback();
}

function returnsANamedFunction() {
    return function happy() {
    }
}

function returnsAnAnonymousFunction() {
    return function() {
    }
}

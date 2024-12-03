var map = function(arr, fn) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        res.push(fn(arr[i], i))
    }
    return res;
};

function plusone(n) {
    return n + 1;
}

function plusI(n, i){
    return n + i;
}

function constant(){
    return 42;
}

console.log(map([1,2,3], plusI))
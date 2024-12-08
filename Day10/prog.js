
var once = function(fn) {
    
    return function(...args){
        if(!fn) return undefined;
        let result = fn(...args);
        fn = null;
        return result;
    }
};

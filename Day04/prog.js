var createCounter = function(init) {
    let act = init;
    return {
        increment: function(){
            return ++init;
        },
        decrement: function(){
            return --init;
        },
        reset: function(){
            return init = act;
        }
    }
};
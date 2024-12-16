var debounce = function(fn, t) {
    let timeout; // Variable to store the timeout ID
    
    return function(...args) {
        // Clear the existing timeout, if any
        clearTimeout(timeout);
        
        // Set a new timeout
        timeout = setTimeout(() => {
            fn(...args); // Execute the function with the provided arguments
        }, t);
    };
};

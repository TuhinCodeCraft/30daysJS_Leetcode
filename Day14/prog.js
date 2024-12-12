var cancellable = function(fn, args, t) {
    let timeoutId;

    timeoutId = setTimeout(() => {
        const result = fn(...args);
        console.log({ time: t, returned: result });
    }, t);

    return function cancelFn() {
        clearTimeout(timeoutId);
    };
};
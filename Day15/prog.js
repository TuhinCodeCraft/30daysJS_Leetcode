var cancellable = function(fn, args, t) {
    const intervalId = setInterval(() => {
        fn(...args);
    }, t);

    fn(...args);

    return () => {
        clearInterval(intervalId);
    };
};
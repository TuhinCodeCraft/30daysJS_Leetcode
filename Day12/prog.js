var addTwoPromises = async function(promise1, promise2) {
    return Promise.all([promise1, promise2]).then(values => {
        const [value1, value2] = values;
        return value1 + value2;
    });
};

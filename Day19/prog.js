var promiseAll = function(functions) {
    return new Promise((resolve, reject) => {
        const results = [];
        let resolvedCount = 0;
        const totalFunctions = functions.length;

        if (totalFunctions === 0) {
            resolve([]);
            return;
        }

        functions.forEach((fn, index) => {
            fn()
                .then((value) => {
                    results[index] = value;
                    resolvedCount++; 

                    if (resolvedCount === totalFunctions) {
                        resolve(results);
                    }
                })
                .catch((error) => {
                    reject(error);
                });
        });
    });
};
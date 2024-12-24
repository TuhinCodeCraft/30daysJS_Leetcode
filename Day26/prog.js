var flat = function (arr, n) {
    const helper = (array, depth) => {
        if (depth === 0) {
            return array;
        }

        let result = [];

        for (let element of array) {
            if (Array.isArray(element)) {
                result.push(...helper(element, depth - 1));
            } else {
                result.push(element);
            }
        }

        return result;
    };

    return helper(arr, n);
};
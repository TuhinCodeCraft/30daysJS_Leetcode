var isEmpty = function(obj) {
    if (Array.isArray(obj)) {
        return obj.length === 0;
    }

    if (typeof obj === "object") {
        return Object.keys(obj).length === 0;
    }

    return true;
};
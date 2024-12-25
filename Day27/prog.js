var compactObject = function(obj) {
    if (Array.isArray(obj)) {
        return obj
            .filter(Boolean)
            .map(compactObject);
    } else if (typeof obj === 'object' && obj !== null) {
        const result = {};
        for (const key in obj) {
            if (Boolean(obj[key])) {
                const compactedValue = compactObject(obj[key]);
                result[key] = compactedValue;
            }
        }
        return result;
    } else {
        return obj;
    }
};
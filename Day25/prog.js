var join = function(arr1, arr2) {
    const map = new Map();
    function addToMap(arr) {
        for (const obj of arr) {
            const id = obj.id;
            if (!map.has(id)) {
                map.set(id, obj);
            } else {
                map.set(id, { ...map.get(id), ...obj });
            }
        }
    }

    // Add both arrays to the map
    addToMap(arr1);
    addToMap(arr2);

    // Convert map values to an array and sort by id
    const joinedArray = Array.from(map.values()).sort((a, b) => a.id - b.id);

    return joinedArray;
};
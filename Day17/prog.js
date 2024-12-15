var TimeLimitedCache = function() {
    this.cache = new Map(); // To store key-value pairs and their expiration details
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    const currentTime = Date.now();
    const isKeyPresent = this.cache.has(key);
    
    if (isKeyPresent) {
        clearTimeout(this.cache.get(key).timeoutId); // Clear previous expiration timer
    }

    const expirationTime = currentTime + duration;
    const timeoutId = setTimeout(() => {
        this.cache.delete(key); // Remove key when it expires
    }, duration);

    this.cache.set(key, { value, expirationTime, timeoutId });
    return isKeyPresent && currentTime < this.cache.get(key).expirationTime;
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    const currentTime = Date.now();

    if (this.cache.has(key)) {
        const { value, expirationTime } = this.cache.get(key);
        if (currentTime < expirationTime) {
            return value; // Key is still valid
        } else {
            this.cache.delete(key); // Key has expired
        }
    }

    return -1; // Key does not exist or has expired
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    const currentTime = Date.now();
    let count = 0;

    for (const [key, { expirationTime }] of this.cache.entries()) {
        if (currentTime < expirationTime) {
            count++;
        } else {
            this.cache.delete(key); // Remove expired keys
        }
    }

    return count;
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */

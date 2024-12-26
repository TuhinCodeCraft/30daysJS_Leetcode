class EventEmitter {
    constructor() {
        this.events = {};
    }
    subscribe(eventName, callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }
        this.events[eventName].push(callback);
        return {
            unsubscribe: () => {
                const index = this.events[eventName].indexOf(callback);
                if (index !== -1) {
                    this.events[eventName].splice(index, 1);
                }
                return undefined;
            }
        };
    }

    emit(eventName, args = []) {
        if (!this.events[eventName] || this.events[eventName].length === 0) {
            return [];
        }

        const results = this.events[eventName].map(callback => callback(...args));
        return results;
    }
}
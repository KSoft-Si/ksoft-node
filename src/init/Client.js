const validate = require('../methods/validate');

module.exports = class Client {
    constructor(token, ...options) {
        const { success, err } = await validate((token || null), 'string', 0, null);
        if (!success) throw new Error(err.replace('{data}', 'token'));

        this.token = `TOKEN ${token}`;
        this.shouldCache = true;

        if (options) {
            if (options.cache && typeof(options.cache) == 'boolean') {
                this.shouldCache = options.cache;
            }
        }

        if (this.shouldCache == true) {
            this.cache = {};
        }

        return this;
    }

    static version() {
        return '1.0.0';
    }
}
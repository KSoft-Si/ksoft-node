const validate = require('../methods/validate');

const { readdirSync } = require('fs');

module.exports = class Client {
    constructor(token, ...options) {
        validate((token || null), 'string', 0, null).then(({ success, err }) => {
            if (!success) throw new Error(d.err.replace('{data}', 'token'));
        });

        this.token = `TOKEN ${token}`;
        this.baseUrl = `https://api.ksoft.si`;
        this.shouldCache = true;

        if (options) {
            if (options.shouldCache && typeof(options.shouldCache) == 'boolean') {
                this.shouldCache = options.shouldCache;
            }
        }

        if (this.shouldCache == true) {
            this.cache = {};
        }

        this.images = require('../methods/w/images');
        this.images.setToken(this.token, this.baseUrl);

        return this;
    }

    static get version() {
        return '1.0.0';
    }
}
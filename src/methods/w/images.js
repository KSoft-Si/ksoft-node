let token = null, base = null;
exports.setToken = (d, b) => { token = d; base = b; }

const p = require('phin');

exports.aww = async () => {
    const { body } = await p({
        url: `${base}/images/random-aww`,

        method: 'GET',
        parse: 'json',
        headers: {
            'Authorization': token
        }
    });

    if (typeof(body) != 'object') return null;

    return body;
}
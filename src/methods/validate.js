module.exports = (d, type, min, max) => {
    if (!d) return { success: false, err: `No {data} provided.` };

    if (typeof(d) != type) return { success: false, err: `Supplied {data} was not the required type '${type}'.` };

    if (typeof(d) == 'string') {
        let arg = d.split('');

        if (min && arg.length <= min) return { success: false, err: `Supplied {data} did not meet the required minimum of ${min} character${min > 1 ? 's' : ''}.` };

        if (max && arg.length > max) return { success: false, err: `Supplied {data} is over the required maximum of ${max} character${max > 1 ? 's' : ''}.` };

        return { success: true, err: null };
    }
}
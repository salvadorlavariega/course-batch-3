'use strict'

const getBigestValue = (values) => {
    const result = Math.max.apply(null, values);
    if(!isNaN(result)){
        return result;
    } else {
        throw new Error('The values must be numeric');
    }
};

module.exports = { getBigestValue: getBigestValue };
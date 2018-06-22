'use strict';

const factorial = (parameter, acumulator = 1) => {
    if(!Number.isInteger(parameter)){
        return {error: '001', message : 'Parameter is not a integer number'};
    }
    if(parameter < 0){
        return {error: '002', message : 'Parameter not >= 0'};
    }
    switch(parameter){
        case 0:
        case 1:
            return acumulator;
            break;
        default:
            return factorial(parameter-1, parameter * acumulator);
    }
};

module.exports = {factorial};

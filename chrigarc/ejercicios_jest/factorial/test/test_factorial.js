'use strict';
const assert    = require('chai').assert;
const factorial = require('../factorial').factorial;
describe('Pruebas unitarias para la funcion factorial: ', () => {
    it('test_parametro_invalido ', () => {
        const parameter = '';
        const result_factorial = factorial(parameter);
        const expect_value = {error: '001', message : 'Parameter is not a integer number'};
        assert.deepEqual(result_factorial, expect_value);
    });
    it('test_parametro_correcto ', () => {
        const parameter = 20;
        const result_factorial = factorial(parameter);
        const expect_value = 2432902008176640000;
        assert.equal(result_factorial, expect_value);
    });
    it('test_parametro_entero_negativo ', () => {
        const parameter = -2;
        const result_factorial = factorial(parameter);
        const expect_value = {error: '002', message : 'Parameter not >= 0'};
        assert.deepEqual(result_factorial, expect_value);
    });
});

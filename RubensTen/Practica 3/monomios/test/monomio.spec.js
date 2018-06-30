const {expect, assert}    = require("chai");
const monomio = require("../src/monomio");
const ERROR_CODES = require("../src/error_codes");

describe('Suit Test - Monomio', () => {
	describe('Suit Test - Suma', () => {
		it('existe funcion', function() {			
			expect(monomio.suma).to.not.equal(undefined);
		});

		it('retorna un error code si no se envia el parametro arreglo de monomios', () => {
			expect(() => monomio.suma()).to.throw(Error);
		});

		it('retorna un error code si recibe una tipo deferente vacia de monomios a sumar', () => {
			expect(() => monomio.suma('')).to.throw(Error);
		});

		it('retorna un error code si recibe un arreglo vacio', () => {
			expect(() => monomio.suma([])).to.throw(Error);
		});
	});
});

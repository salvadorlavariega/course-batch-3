const main = require('../src/main');
const assert = require('chai').assert;

describe('HTML parser', () => {
    it('El archivo no existe. Regresa una cadena vacia', () => {
      const content = main.readFile('./inputs/example4.html');
      assert.equal(content, '');
    });

    it('El archivo existe y es de texto. Regresa una cadena de texto', () => {
      const content = main.readFile('./inputs/example1.html');
      assert.equal(content, 'Ejemplo 1\n');
    });
});

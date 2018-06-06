const ERROR_CODES = require('./error_codes');
module.exports = {
	suma: (array) => {
		if (!array || (typeof array !== Array)) {
			throw new Error(ERROR_CODES.INVALID_PARAMS);
		}

		if (array.length <= 0) {
			throw new Error(ERROR_CODES.EMPTY_DATA);
		}

		/**
		 * @todo
		 * Realizar expresion regular para validar si es un monomio y si la lista de monomios es semejante para realizar la operacion de suma
		 */


		
	}
};
const Car = require('./Car');

class RENAULT4 {
    constructor(reference) {

        return new Car(reference,
            '1980',
            'RENAULT4',
            '4 door',
            2.20,
            1.30,
            '650kg',
            'white',
            '190kh');
    }
}

module.exports = RENAULT4;
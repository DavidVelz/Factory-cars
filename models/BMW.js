const Car = require('./Car');

class BMW {
    constructor(reference) {

        return new Car(
            reference,
            '2020',
            'BMW',
            'COUPE',
            3.00,
            1.50,
            '70K',
            'YELLOW',
            '300KM'
        );
    }
}

module.exports = BMW;
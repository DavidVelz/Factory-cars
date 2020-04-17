const BMW = require('../models/BMW');
const Renault4 = require('../models/RENAULT4');

class FactoryCar {

    create(brand, reference) {

        switch (brand) {
            case 'BMW':
                return new BMW(reference);
            case 'RENAULT4':
                return new Renault4(reference);
            case 'default':
                console.log('car not foud');
        }

    }


}
module.exports = new FactoryCar;
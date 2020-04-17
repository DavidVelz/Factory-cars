//Johan Sebastian Holguin Cano
//Walter David Bermúdez Vélez


const _factoryCar1 = require('./factory/FactoryCar');

const factoryCar1 = _factoryCar1.create('BMW', '43434');
factoryCar1.printConfiguration();
factoryCar1.operation();


const factoryCar2 = _factoryCar1.create('RENAULT4', '43434');
factoryCar2.printConfiguration();
factoryCar2.operation();
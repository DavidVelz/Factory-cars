class Car {
    constructor(
            reference = '545454656',
            model = '5656',
            brand = '',
            type = 'coupe',
            width = 67.5,
            height = 138.9,
            weight = '7.3',
            color = 'Generic',
            speed = '56'
        ) {
            this.brand = brand;
            this.width = width;
            this.height = height;
            this.reference = reference;
            this.configuration = {
                reference,
                model,
                brand,
                type,
                width,
                height,
                weight,
                color,
                speed
            }

        }
        //Resultado de la multiplicación
    operation() {
        console.log(this.brand);
        switch (this.brand) {
            case 'BMW':
                console.log(`EL resultado de multiplicar ${this.width} x ${this.height} =`);
                console.log(this.width * this.height);
                break;
            case 'RENAULT4':
                console.log(`EL resultado de sumar ${this.width} + ${this.height} =`);
                console.log(this.width + this.height);
                break;
            case 'default':
                console.log('No hay vehiculos');
        }
    }

    printConfiguration() {
        console.log(this.configuration);
    }

}

module.exports = Car;
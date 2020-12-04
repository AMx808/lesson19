// abstract class - object chem karox sarqel
// super - kanchum e ir cnoxi constructor@


abstract class Car{
    constructor(private model: string, private year: number) {
    }
    getModel(): string{
        return this.model;
    }
    getYear(): number{
        return this.year;
    }
}

class Opel extends Car{
    constructor(model: string, year: number, private xxx: string) {
        super(model, year);
    }
}

let opel1 = new Opel('Astra', 2000, 'ayl ban');
// Incapsulation - tvyalnery petk e linen pak(private)

class Car{
    private model: string;
    private year: number;

    constructor(model: string, year: number){
        this.model = model;
        this.year = year;
    }

    public getModel(): string{
        return this.model;
    }

    public getYear(): number{
        return this.year;
    }
}

class Opel extends Car{
    constructor(model, year) {
        super(model, year);
    }
}

let opel1 = new Opel('Vectra', 1997);
console.log(opel1.getModel());
console.log(opel1.getYear());
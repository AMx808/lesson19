

abstract class Car {
    constructor(private model: string, private year: number) {
    }

    logInfo(): void {
        console.log(this.model, this.year);
    }

    abstract sayHello(info: string): void;
}

class Opel extends Car{
    constructor(model, year, private xxx: string) {
        super(model, year);
    }
    sayHello(info: string): void{
        console.log('Opel info' + info);
    }
}

let opel1 = new Opel('Vectra', 1997, 'Yeah');

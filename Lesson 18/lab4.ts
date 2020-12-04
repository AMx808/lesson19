

class Car{

    constructor(private model: string, private year: number){
    }

    logInfo(): void{
        console.log(this.model, this.year);
    }
}

let car1 = new Car('Vectra', 1997);
car1.logInfo();
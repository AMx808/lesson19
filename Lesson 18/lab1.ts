// private - tesaneli e miayn ir class-i mej
// protected - tesaneli e ir class-i ev jarangneri mej
// public - tesaneli e bolor texerum



class Car{
    private model: string;
    public year: number;
    color: string = 'black';
    constructor(model: string, year: number){
        this.model = model;
        this.year = year;
    }

    logInfo(): void{
        console.log(this.model, this.year, this.color);
    }
}

class Opel extends Car{
    xxx: string;
    constructor(model, year, xxx){
        super(model, year);
        this.xxx = xxx;
        console.log(this.color);
        console.log(this.year);
    }
}

let opel1 = new Opel('Vectra', 1997, 'Arturi');
console.log(opel1);
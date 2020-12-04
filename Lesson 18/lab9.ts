

abstract class User1{
    constructor(private name: string, private age: number){
    }
    getName(): string{
        return this.name;
    }
    getAge(): number{
        return this.age;
    }
}

interface ICar{
    model: string;
    year: number;
}

interface IGetBirthYear{
    getBirthYear(): void;
}

class Doctor extends User1 implements ICar, IGetBirthYear{
    constructor(name: string, age: number, public model: string, public year: number) {
        super(name, age);
    }
    getBirthYear(): number {
        return 0;
    }
}
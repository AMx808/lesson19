// Interface

interface IUser{
    name: string;
    age: number;
}

interface ICar{
    model: string;
    year: number;
}

interface IgetBirthYear{
    getBirthYear(): number;
}

class User implements IUser, ICar, IgetBirthYear{
    name: string;
    age: number;
    model: string;
    year: number;
    getBirthYear(): number{
        return 0;
    }
}
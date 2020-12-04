

class User {
    private name: string;
    private age: number;
    constructor(n: string, a: number) {
        this.name = n;
        this.age = a;
    }
}

let user1 = new User('Vlad', 16);
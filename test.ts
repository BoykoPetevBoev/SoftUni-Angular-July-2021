let isOpen: boolean = false;
isOpen = true;

//------------------------------

class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getAge(): number {
        return this.age;
    }
}
const boyko = new Person('Boyko', 26);

class Person1 {
    constructor(
        public name: string,
        public age: number
    ) { }
}
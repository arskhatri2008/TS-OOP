class Person {
    name!: string; // ! sign shows if value is undefined error not appear
    age: number | undefined; // | sign shows if value is undefined
    // constructor(name: string, age: number) {
    //     this.name = name;
    //     this.age = age;
    // }
}

const person = new Person()
person.name = 'Miz'
person.age = 30
console.log(person);

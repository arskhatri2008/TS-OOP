/*
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
*/

class Product {
    name!: string;
    price!: number;
        constructor(name: string, price: number) {
            this.name = name;
            this.price = price;
        }
    display(){
        console.log(`Price of ${this.name} is ${this.price}`);
    }
}


/*
let laptop = new Product('Laptop', 2000)
laptop.display()

let mobile = new Product('Apple', 150000)
mobile.display()
*/

// Inheritance

/*
class Electronic extends Product{
    warranty!: number
        constructor(name:string, price:number, warranty:number){
            super(name, price)
            this.warranty = warranty
        }
    showWarranty(){
        // super.display()
        console.log(`This ${this.name} price is ${this.price} and its Warranty is ${this.warranty} years`);
    }
}

let led = new Electronic('LED',50000,2)
led.showWarranty()
*/

/*
class Human {
    name!: string
        constructor(name:string){
            this.name = name
        }
    rename(rename:string){
        this.name = rename
    }
}

let s1 = new Human('Musab Ahmed')
console.log(s1.name);
*/

/*
class Student {
    name!: string
    rollNumber!: number
        constructor(name:string, rollNumber:number){
            this.name = name
            this.rollNumber = rollNumber
        }
}

class Teacher extends Student {
    id!: number
        constructor(name:string, rollNumber:number,id:number){
            super(name,rollNumber)
            this.id = id
        }
}

let s1 = new Student('Muhammad Ali', 123)
let t1 = new Teacher('Musab Ahmed',321,11223344)
console.log(s1);
console.log(t1);
*/

class Student {
    name = "ratan lal"
    age = 25
}

class Teacher extends Student {}

let t1 = new Teacher()
console.log(t1);

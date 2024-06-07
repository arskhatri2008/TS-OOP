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
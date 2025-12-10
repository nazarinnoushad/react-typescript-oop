•	Create a class Person and a subclass Employee
•	Use interface for typing the class structure


//interface

```ts
interface Iperson  {
  name: string;
  age: number;
  greet(): void;
}

//Person Class (implements interface)

class person implements Iperson {
  name = string;
  age = number;

  constructor(name: string,age:number){
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hi ,I am ${this.name}`)
  }

}

//Employee Class (extends Person)
// Employee inherits name, age, and greet() from Person.  

class Employee extends person {
  job: string;

  constructor(name: string,age:number,job:string){
    super(name,age); //calls person constructor
    this.job = job;
  }
   
   work(){
    console.log(`${this.name}is working as a  ${this.job}`)
   }
}


const emp = new Employee("Nazarin", 21, "Developer");

emp.greet();          // from Person class
emp.work();           // from Employee class



// Output

/*
Hi, I am Nazarin
Nazarin is working as a Developer*/


```
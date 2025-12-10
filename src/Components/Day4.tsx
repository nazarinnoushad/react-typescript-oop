// Day 4 OOP Practice


    //  Interface

  interface IPerson {
    name: string;          
    age: number;            
    getDetails(): string;  
  }


     // Person Class

  class Person implements IPerson {

    public name: string;     // Public → can be accessed anywhere
    protected age: number;   // Protected → accessible in this class + child classes
    private id: number;      // Private → ONLY this class can access

    constructor(name: string, age: number, id: number) {
      this.name = name;
      this.age = age;
      this.id = id;
    }

// Method to return name + age

    getDetails(): string {
      return `Name: ${this.name}, Age: ${this.age}`;
    }

   // Method to access private ID

    getId(): number {
      return this.id;
    }
  }


     // Employee Class (Child of Person)

  class Employee extends Person {

    public position: string;

    constructor(name: string, age: number, id: number, position: string) {
      super(name, age, id);       // calls parent class constructor
      this.position = position;   // store the position of employee
    }

    // override function
    getDetails(): string {
      return `${super.getDetails()}, Position: ${this.position}`;
    }
  }

const Day4: React.FC = () => {

  // Create object
  const emp1 = new Employee("Nazarin", 23, 101, "Software Developer");

    //UI Part

  return (
    <div className="p-6 max-w-lg mx-auto mt-10 bg-white shadow-lg rounded-2xl border">

      <h1 className="text-3xl font-bold text-center text-blue-600 mb-5">
        Day 4: OOP in TypeScript
      </h1>

      <div className="bg-gray-100 p-4 rounded-xl mb-3">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Employee Details</h2>
        <p className="text-lg text-gray-900">{emp1.getDetails()}</p>
      </div>

      <div className="bg-gray-100 p-4 rounded-xl">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Employee ID</h2>
        <p className="text-lg text-gray-900">{emp1.getId()}</p>
      </div>
    </div>
  );
};

export default Day4;

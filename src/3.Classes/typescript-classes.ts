//  ** CLASSES **

// The constructor() method is called automatically when a class is initiated, and it has to have the exact name "constructor".
// In fact, if you do not have a constructor method, JavaScript will add an invisible and empty constructor method.

class Developer {
    // Scope properties does not exist in JS, they are only defined for TS.

    //  Properties and methods scopes

    // 	• Public (by default)
    // 	Can be accesessed from anywhere.

    // 	• Private
    // 	It can´t be accessed from outside it´s containing class.
    // 	ECMAScript Private Fields # (TypeScript 3.8)

    // 	• Protected
    // 	It´s similar to private but it can also be accessed within deriving classes (inherited classes).

    // 	• Readonly
    // 	Readonly properties must be initialized at their declaration or in the constructor.

    // 	• Static

    public name: string = 'Default';
    protected team: string = '';
    private position: string = '';
    private salary: number = 1200;

    constructor(firstName: string, initialTeam: string, initialPosition: string) {
        this.name = firstName;
        this.team = initialTeam;
        this.position = initialPosition;
        console.log('Developer called');
    };

    public getjobInfo(): string {
        // This is how we use template literals, a feature from ES6 or ES2015
        let message: string = `${this.name} ${this.team} ${this.position}`;

        return message;
    };

    private changeTeam(newTeam: string): boolean {
        let changeAccepted;
        if (newTeam && newTeam !== this.team) {
            this.team = newTeam;
            changeAccepted = true;
        } else {
            changeAccepted = false;
        }
        return changeAccepted;
    };

    public publicChangeTeam(newTeam: string): boolean {
        return this.changeTeam(newTeam);
    };

    protected getSalary(): number {
        return this.salary;
    }

}

let tsDeveloper = new Developer('Carlos', 'Angular', 'FrontEnd Analyst');

// Public property or method can be modified outside it´s class
tsDeveloper.name = 'Casana';
tsDeveloper.getjobInfo();

// Protected and private properties or methods are not accesible from outside.
// tsDeveloper.team = 'Maqueta';
// tsDeveloper.changeTeam('Java')

tsDeveloper.publicChangeTeam('Angular 9');


// #Inheritance:

class AngularMember extends Developer {

};


// If we don´t define a constructor, it has the father class constructor
let datalayerMan = new AngularMember('Joseba', 'Angular', 'FrontEnd Developer');

class FrontMember extends Developer {

    constructor(param1: string, param2: string, param3: string) {
        console.log('Front Member called');
        //Constructors for derived classes must contain a 'super' call, which executes father constructor.
        super(param1, param2, param3);

    };

    public getSalaryPublic(): number {
        // We can call father methods from super.methodName
        return super.getSalary();
    }
};

// We can check that both frontMember and Developer constructors are called.
let podrick = new FrontMember('Podrigo', 'Angular', 'FrontEnd Expert')

// As we extend from developer, we can call it´s public method.
console.log(datalayerMan.getjobInfo());

// Although FrontMember extends Developer, we can´t execute protected method outside the class.
//console.log(podrick.getSalary())

// We can access to a protected method like getSalary in Developer class by a public method in AngularMember.
console.log(podrick.getSalaryPublic());


// #Gets - Sets
// Used for controlling the access to properties

class Flight {
    private _price: number;

    constructor(price: number) {
        this._price = price;
    };

    get price(): number {
        return this._price
    };

    set price(price: number) {
        if (price > 1250) {
            console.error('This flight is too expensive. Check it and make it cheaper')
        } else {
            this._price = price;
        }
    }
}

let trip = new Flight(1200);

console.log(trip.price);
trip.price = 1300;



// 	#Static properties 
//  Can be called whithout instantiating the class

class AdultPassenger {
    private name: string
    static type: string = 'Adult';

    constructor(name: string) {
        this.name = name;
    };

    static createAdult(name: string) {
        console.log('Created by using a static method')
        return new AdultPassenger(name)
    }
}

console.log(AdultPassenger.type);

let myPassenger = AdultPassenger.createAdult('Peter')
console.log(myPassenger)


// 	#Abstract Classes 
//  Abstract classes can´t be instantiated. It´s  mainly used for inheritance.


abstract class Passenger {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    display(): void {
        console.log(this.name);
    }

    abstract find(name: string): Passenger;
}


class ChildPassenger extends Passenger {
    type: string

    constructor(name: string, type: string) {
        super(name); // must call super()
        this.type = type;
    }
    find(name: string): Passenger {
        return new ChildPassenger(name, 'child');
    }
}


// 	#Private Constructors
//  It is used to have one and only one instance of the class and don´t allow more.

class Trip{
    static instance: Trip;

    private constructor(public numberOfSlices: number) {
        
    };

    static callTrip () {
        if(!Trip.instance) {
            Trip.instance = new Trip(3);
        } else {
            return Trip.instance
        }
    }
}
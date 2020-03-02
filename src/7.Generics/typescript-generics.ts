//  ** GENERICS **

// Generics provide a way to make components work with any data type and not restrict to one data type. 
// Generics are used when we don´t know or don´t want to give a type.

// They are declared with an Uppercase letter betweeen <>. The standard is to use T: <T>.
function identity<T>(argument: T): T {
    return argument;
}

// Pass the arguments with their type
console.log(identity<Number>(24))

// Use type inference
console.log(identity('randomString'))



// #Why not using any? 
function identityWithAnys<T>(argument: T): T {
    return argument;
}

console.log(identityWithAnys('string'))
console.log(identityWithAnys(0))
// Although this code works, with any we loose the power that TS give us.
// We don´t define any type when calling the function, we don´t have IDE intellisense and 
// we are allowing to use our function with anything, which may cause errors.


// #Working with Generic Type Variables

// TypeScript will (correctly) give an error when we try to use an specific method in a generic. 
function loggingIdentity<T>(arg: T): T {
    // @ts-ignore
    console.log(arg.length);  // Error: T doesn't have .length
    return arg;
}

// We can define array of generics if we know that we are going to receive an array of something

function loggingIdentityWithArrays<T>(arg: T[]): T[] {
    console.log(arg.length);  // Array has a .length, so no more error
    return arg;
}

loggingIdentityWithArrays([1,2,3,1,2,3]);


// #Generic Types

// Generic function types
function identityFunction<T>(arg: T): T {
    return arg;
}

let myIdentity: <U>(arg: U) => U = identityFunction;

// We can also write the generic type as a call signature of an object literal type

function identityFunc<T>(arg: T): T {
    return arg;
}

let myNewIdentity: {<T>(arg: T): T} = identityFunc;

// Generic interface
interface GenericIdentityFn {
    <T>(arg: T): T;
}

function identityFunct<T>(arg: T): T {
    return arg;
}

let myOtherIdentity: GenericIdentityFn = identityFunct;

// Moving the generic parameter to be a parameter of the whole interface
interface NewGenericIdentityFn<T> {
    (arg: T): T;
}

function anotherIdentity<T>(arg: T): T {
    return arg;
}

let myLastIdentity: NewGenericIdentityFn<number> = anotherIdentity;


// #Generic Classes

class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
    constructor(zeroValue: T, add: (x: T, y: T) => T) {
        this.zeroValue = zeroValue;
        this.add = add;
    }
}

// A class has two sides to its type: the static side and the instance side. 
// Generic classes are only generic over their instance side rather than their static side, so when working with classes, static members can not use the class’s type parameter
let myGenericNumber = new GenericNumber<number>(0, function(x, y) { return x + y; });

let stringNumeric = new GenericNumber<string>('', function(x, y) { return x + y; });


console.log(stringNumeric.add(stringNumeric.zeroValue, "test"));


// #Generic Constraints 

// Instead of working with any and all types, we can constrain a function to work with any and all types that have a property or method

interface Lengthwise {
    length: number;
}

function loggingAnIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);  // We know it has a .length property, so no  error
    return arg;
}

// @ts-ignore
loggingAnIdentity(3);  // Error, number doesn't have a .length property
loggingAnIdentity({length: 10, value: 3});


// Type Parameters in Generic Constraints
function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };

getProperty(x, "a");
// @ts-ignore
getProperty(x, "m"); // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'


// #Using Class Types in Generics 

class BeeKeeper {
    // @ts-ignore
    hasMask: boolean;
}

class ZooKeeper {
    // @ts-ignore
    nametag: string;
}

class Animal {
    // @ts-ignore
    numLegs: number;
}

class Bee extends Animal {
    // @ts-ignore
    keeper: BeeKeeper;
}

class Lion extends Animal {
    // @ts-ignore
    keeper: ZooKeeper;
}

function createInstance<A extends Animal>(c: new () => A): A {
    return new c();
}

createInstance(Lion).keeper.nametag;  // typechecks!
createInstance(Bee).keeper.hasMask;   // typechecks!
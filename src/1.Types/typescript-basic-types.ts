//  ** TYPES **

// Primitivos: String, Number, Boolean, Null, Undefined
// Compuestos: Object, Class, Function.

// Además de estos, se pueden crear tipos nuevos, Interfaces, tipos genéricos…
// Por defecto, todo tiene tipo any.

// #Tuple

// Es un tipo de dato introducido en Typescript. Al transpilarlo se convertirá en array.
// La ventaja reside en definir la longitud del array y el tipo de cada elemento, para así tenerlos acotados.

let empId: number = 1;
let empName: string = "Steve";        

let newEmployee: [number, string] = [1, "Steve"];

//*Typescript no nos va a notificar el error al hacer un push que no cumpla con la Tupla:
newEmployee.push("Developer")



// #Enums

// Es un tipo de dato introducido en Typescript. Al transpilarlo se convertirá en una función autoinvocada.
// Se definen con "enum" y nos permiten declarar un conjunto de constantes definidas.

// Pueden ser de 3 tipos:

// 1. Numeric enum
// 2. String enum
// 3. Heterogeneous enum

// Por defecto, los enums son numéricos.
// Al definir un enum, se le asocia a cada valor un número. Si no lo definimos, los valores por defecto son:
// 	- Al primer valor siempre se le asigna el 0.
// 	- Los siguientes van incrementando de 1 en 1

enum Continents {
    North_America,
    South_America,
    Africa,
    Asia,
    Europe,
    Antartica,
    Australia
}

// #Reverse Mapping

// https://www.tutorialsteacher.com/typescript/typescript-enum
// https://blog.logrocket.com/writing-readable-code-with-typescript-enums-a84864f340e9/


// #Void

// Opossite of any. 
// Usually used for functions that don´t return anything.


// #Never

// Value that never should be. We identify the critical points where we should never pass.

function error(mensaje: string):never{
	throw new Error(mensaje)
}


// #Type Assertion

// Nos permiten que Typescript de por válido hacer casteos de variables. También nos permiten evitar que el compilador infiera el tipo de una variable según el valor inicial.


interface Employee { 
    name: string; 
    code: number; 
} 
let employee = <Employee> { }; 
employee.name = "John";
employee.code = 123; 


// There are two ways of using type assertion:

// 	- Using brackets <>:
		let companyCode: any = 123; 
		let employeeCode = <number> companyCode; 
//	- Using the word as:
		let code: any = 123; 
        let newEmployeeCode = code as number;
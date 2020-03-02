//  ** FUNCTIONS **

// 	- Type entry parameters and define them as optional/obligatory.
// 	- Type return.


// Parameters by default
// ES6 feature. 
// Nos permite darle un valor por defecto a un parámetro en el caso de que no se defina al llamar a la función.

function Greet(name: string, greeting: string = "Hello") : string {
    return greeting + ' ' + name + '!';
}


// #Optional parameters

// Como sabemos, en JS todos los parámetros de una funcion son opcionales, sin embargo para TS los parámetros son obligatorios por defecto.
// Podemos definir los parámetros que queramos como opcionales añadiendole una ? detrás.
// *Los parámetros opcionales deben ir en último lugar, después  de los parámetros obligatorios 

// #REST parameters

// Nos permite recibir todos los n parámetros restantes en forma de Array. Útil cuando el número de parámetros que recibirá la función es desconocido o puede variar.
// *Los parámetros REST siempre deben ir en último lugar.

function nombreCompleto (primerNombre:string,  ...restoDelNombre:string[]):string {
	return primerNombre + restoDelNombre.join(" ")
};

nombreCompleto ('Carlos', 'Martinez')
nombreCompleto ('Edison', 'James', 'Hernandez')


// #Function Type

// Typescript nos permite definir el tipo de una variable como function e incluso definir el tipo de los parámetros de entrada y de salida.

function sumar(a:number, b:number): number {
	return a + b
}

let miOperación: (x:number, y:number) => number = sumar


// #Arrow functions


// #Function Overloading

// Typescript nos permite tener varias funciones con el mismo nombre pero diferentes tipos de parámetros de entrada y de salida.
// *El número de parámetros de entrada debe ser el mismo.

function add(a:string, b:string):string;

function add(a:number, b:number): number;

function add(a: any, b:any): any {
    return a + b;
}

add("Hello ", "Steve"); // returns "Hello Steve" 

add(10, 20); // returns 30 
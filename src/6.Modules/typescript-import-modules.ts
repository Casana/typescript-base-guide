//  ** IMPORT MODULES **

// @ts-ignore
console.log(greeting); //Error: cannot find 'greeting'

// Import a single export from a Module
import { Developer } from "./typescript-export-modules";

let newDeveloper = new Developer(123000, 'Alfred', 'Maqueta');
console.log(newDeveloper);

// Import the entire module(file) into a variable
import * as Dev from "./typescript-export-modules";

console.log(Dev.numberOfDevs);
let anotherDeveloper = new Dev.Developer(176100, 'Aaron', 'Angular');
console.log(anotherDeveloper);

// Renaming an export from a Module
import { Developer as Employee } from "./typescript-export-modules";

let myEmployee = new Employee(154600, 'Galin', 'QA');
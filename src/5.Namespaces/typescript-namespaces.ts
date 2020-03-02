//  ** NAMESPACES **

// A Namespace is used for logical grouping of functionalities. 
// To access to properties and methods from a Namespace, we have to export them.
// Generated JavaScript code for the namespace uses the IIFE pattern to stop polluting the global scope

namespace FormValidations {
    export function validateNameLongitude(name: string): boolean {
        return 3 < name.length && name.length < 20;
    }

    export function validateSurnameLongitude(name: string): boolean {
        return 5 < name.length && name.length < 20;
    }

    function validatephoneLongitude(name: number): boolean {
        return 3 < name.toString().length && name.toString().length < 20;
    }
}

let newUserName = 'Anthony';
let newUserSurname = 'Michelson-lewitt Parker II';

console.log(FormValidations.validateNameLongitude('Valid name: ' + newUserName));
console.log(FormValidations.validateSurnameLongitude('Valid surname: ' + newUserSurname));

//In order to use namespace components at other places, first we need to include the namespace using the triple slash reference syntax 
/// <reference path="path to namespace file" />
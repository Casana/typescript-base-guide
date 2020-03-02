//  ** EXPORT MODULES **

// The TypeScript code we write is in the global scope by default. 
// If we have multiple files in a project, the variables, functions, etc. written in one file are accessible in all the other files.

// TypeScript provides modules and namespaces in order to prevent the default global scope of the code and also to organize and maintain a large code base.

// Modules are a way to create a local scope in the file. 
// So, all variables, classes, functions, etc. that are declared in a module are not accessible outside the module. 
// A module can be created using the keyword export and a module can be used in another module using the keyword import.
// In TypeScript, files containing a top-level export or import are considered modules.


export var greeting: string = "Hello from the other side";

export class Developer {
    employeeCode: number;
    name: string;
    status: string;
    available: boolean;

    constructor(code: number, name: string, stat: string, available?: boolean) {
        this.employeeCode = code;
        this.name = name;
        this.status = stat;
        this.available = available || true;
    }
};

export const numberOfDevs: number = 20;


//  ** COMPILING MODULES **

// We cannot use TypeScript modules directly in our application. We need to use the JavaScript for TypeScript modules. 
// To get the JavaScript files for the TypeScript modules, we need to compile modules using TypeScript compiler.


// In tsconfig.json we define our module code generation type:

// None
// CommonJS: Implemented by node. http://www.commonjs.org/
// AMD: Async Module Definition. Implemented by RequireJs. https://github.com/amdjs/amdjs-api/wiki/AMD
// UMD: Universal Module Definition. Combination of CommonJs + AMD (Syntax of CommonJs + async loading of AMD) https://github.com/umdjs/umd
// System https://github.com/systemjs/systemjs
// ES6, ES2015 or ESNext: Used for both server/client side.

/*  1. CommonJS

- Implemented by node
- Used for the server side when you have modules installed
- No runtime/async module loading
- import via “require”
- export via “module.exports”
- When you import you get back an object
- No tree shaking, because when you import you get an object
- No static analyzing, as you get an object, so property lookup is at runtime
- You always get a copy of an object, so no live changes in the module itself
- Poor cyclic dependency management
- Simple Syntax  */


/* 2. AMD: Async Module Definition

- Implemented by RequireJs
- Used for the client side (browser) when you want dynamic loading of modules
- Import via “require”
- Complex Syntax */


/* 3. UMD: Universal Module Definition

- Combination of CommonJs + AMD (that is, Syntax of CommonJs + async loading of AMD)
- Can be used for both AMD/CommonJs environments
- UMD essentially creates a way to use either of the two, while also supporting the global variable definition. 
As a result, UMD modules are capable of working on both client and server. */


/* 4. ECMAScript Harmony (ES6)

- Used for both server/client side
- Runtime/static loading of modules supported
- When you import, you get back bindings value (actual value)
- Import via “import” and export via “export”
- Static analyzing — You can determine imports and exports at compile time (statically) — you only have to look at the source code, you don’t have to execute it
- Tree shakeable, because of static analyzing supported by ES6
- Always get an actual value so live changes in the module itself
- Better cyclic dependency management than CommonJS  */
//  ** CLASS DECORATORS **

/**
 * Let´s say we are going to create a business that rents old castles.
 * We build each endpoint of the API as a class 
 * The public methods of the class would correspond to the HTTP methods.
 */

class Families {
    private houses = ['Lannister', 'Targaryen'];

    get() {
        return this.houses;
    }

    post(request: any) {
        this.houses.push(request.body);
    }
}

class Castles {
    private castles = ['Winterfell', 'Casterly Rock'];

    get() {
        return this.castles;
    };

    post(request: any) {
        this.castles.push(request.body);
    }
};

const httpEndpoints: any = {};

//This is a decorator: Function that takes a class as argument.
function registerEndpoint(constructor: any) {
    const className = constructor.name;
    const endpointPath = '/' + className.toLowerCase();
    httpEndpoints[endpointPath] = new constructor();
};

registerEndpoint(Families);
registerEndpoint(Castles);

console.log(httpEndpoints);
httpEndpoints['/families'].get();


//Instead of calling registerEndpoint the regular way, we can just decorate our classes with @registerEndpoint:

const HttpEndpointsV2: any = {};

// Experimental support for decorators is a feature that is subject to change in a future release. 
// In order to use it, we have to set experimentalDecorators in tsconfig so Typescript let us use them.
@registerEndpoint
class FamiliesV2 {
    private houses = ['Lannister', 'Targaryen'];

    get() {
        return this.houses;
    }

    post(request: any) {
        this.houses.push(request.body);
    }
};

@registerEndpoint
class CastlesV2 {
    private castles = ['Winterfell', 'Casterly Rock'];

    get() {
        return this.castles;
    };

    post(request: any) {
        this.castles.push(request.body);
    }
};

console.log(HttpEndpointsV2);
HttpEndpointsV2['/families'].get();


/**
 * Now we want to protect some of our endpoints so only authenticated users can access them.
 * We create a new decorator called protect and it will add the protected method to the protectedMethods array
 */

const protectedMethods: any[] = [];

function protect(target: any, propertyKey: any, descriptor: any) {
    const className = target.constructor.name;
    protectedMethods.push(className + '.' + propertyKey);
};

@registerEndpoint
class FamiliesV3 {
    private houses = ['Lannister', 'Targaryen'];

    @protect
    get() {
        return this.houses;
    }

    @protect
    post(request: any) {
        this.houses.push(request.body);
    }
};

console.log(protectedMethods);
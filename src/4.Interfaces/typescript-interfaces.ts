//  ** INTERFACES **

//  * Interface is a structure that defines the contract in the application. 
//  * It defines the syntax for classes to follow. 
//  * Classes that are derived from an interface must follow the structure provided by their interface.
//  * 
//  * The TypeScript compiler does not convert interface to JavaScript. 
//  * It uses interface for type checking. This is also known as "duck typing" or "structural subtyping".

interface IPrice {
    fare: number;
    tax: number;
    total: number;
    currency: string;
    ticketingFee: number;
}

const myPrice: IPrice = {
    fare: 20,
    tax: 5,
    total: 25,
    currency: 'EUR',
    ticketingFee: 0
};

interface ITrip {
    origin: string;
    destination: string;
    duration: number;
    getDuration: () => number;
    flightType: string;
    price: IPrice
}

// Extending interfaces
// Interfaces can extend one or more interfaces to make them flexible and reusable.

interface IFlight {
    arrivalDateTime: string;
    departureDateTime: string;
    duration: number;
    overnight: boolean;
};

/**
 * Slice represents a complete origin-destination (with any stops inside it)
 */
interface ISlice extends IFlight {
    sliceId: string;
    provider: string;
    stopsNumber: number;
}

/**
 * Segment represents a single flight
 */
interface ISegment extends IFlight {
    segmentId: string;
    departure: any;
    arrival: any;
    flight: any;
    waitingTime: any;
    offers: Array<any> | any[];
}



// Implementing an Interface
// Interfaces in TypeScript can be implemented with a Class. 
// The Class implementing the interface needs to strictly conform to the structure of the interface.
// The implementing class can define extra properties and methods, but at least it must define all the members of an interface.

class RedemptionFlight implements ITrip {
    origin: string;
    destination: string;
    duration: number = 0;
    extraInfo: string;
    price: IPrice;
    // Readonly properties allow us to set their values when creating the object 
    // and deny reasigning it in compilation time
    readonly flightType: string;

    constructor(origin: string, destination: string, duration?: number) {
        this.origin = origin;
        this.destination = destination;
        this.duration = duration || 0;
        this.extraInfo = '';
        this.flightType = 'Redemption';
        this.price = {
            fare: 40,
            tax: 0,
            total: 40,
            currency: 'AVIOS',
            ticketingFee: 0
        }
    }

    getDuration(): number {
        return this.duration
    }
};

let newRedemptionFlight = new RedemptionFlight('MAD', 'BCN');

console.log(newRedemptionFlight);
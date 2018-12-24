// 1 shared interface
interface Transport {
  deliver(param?: any) : void;
}

class Truck implements Transport {
  deliver = (param?: any) => {
    return "Method of Truck";
  }
}

class Ship implements Transport {
  deliver = (param?: any) => {
    return "Method of Ship";
  }
}

// 2 factory method
export namespace TransportFactory {
  export const createTransport = (type: string): Transport => {
    if (type === "truck") {
      return new Truck();
    } else if (type === "ship") {
      return new Ship();
    }

    return null;
  }
}

const truck: Transport = TransportFactory.createTransport("truck");
const ship: Transport = TransportFactory.createTransport("ship");

console.log(truck.deliver());
console.log(ship.deliver());
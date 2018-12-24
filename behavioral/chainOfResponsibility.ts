// 1 abstract
export class Handler {
  private handler: Handler;
  private req: number;

  constructor(req: number) {
    this.req = req;
  }

  public setHandler(handler: Handler): void {
    this.handler = handler;
  }

  public operation(msg: string, req: number): void {
    if (req <= this.req) {
      this.handlerRequest(msg)
    } else if (this.handler !== null && this.handler !== undefined) {
      this.handler.operation(msg, req);
    }
  }

  public handlerRequest(msg: string): void {
    throw new Error("Abstract method!");
  }
}

// 2 concrete
export class ConcreteHandler1 extends Handler {
  constructor(req: number) {
    super(req);
  }
  public handlerRequest(msg: string) {
    console.log("Message (ConcreteHandler1) :: ", msg);
  }
}


export class ConcreteHandler2 extends Handler {
  constructor(req: number) {
    super(req);
  }
  public handlerRequest(msg: string) {
    console.log("Message :: (ConcreteHandler2) ", msg);
  }
}

const reqs = [2, 7, 23, 34, 4, 5, 8, 3];

const h1 = new ConcreteHandler1(3);
const h2 = new ConcreteHandler2(7);

// 3 set chain
h1.setHandler(h2);

for (let i = 0, max = reqs.length; i < max; i += 1) {
  h1.operation("operation is fired!", reqs[i]);
}